
import { NextResponse } from 'next/server';

const HUGGINGFACE_MODEL =
  process.env.HUGGINGFACE_MODEL || 'meta-llama/Meta-Llama-3-8B-Instruct';

const HUGGINGFACE_IMAGE_MODEL =
  process.env.HUGGINGFACE_IMAGE_MODEL || 'black-forest-labs/FLUX.1-schnell';

function buildPrompt(ingredients: string, preferences: string | undefined, type: string) {
  const safePreferences = preferences && preferences.trim().length > 0 ? preferences : 'None';

  let userInstruction = '';

  if (type === 'suggest') {
    userInstruction = `You are an expert Indian chef. Suggest 3 Indian dishes I can make with these ingredients: ${ingredients}.
Preferences: ${safePreferences}.

You MUST respond with valid JSON matching this structure:
{
  "suggestions": [
    {
      "title": "Dish Name",
      "description": "Why this works with the ingredients"
    }
  ]
}`;
  } else {
    userInstruction = `You are an expert Indian chef. Create a detailed Indian recipe based on these ingredients: ${ingredients}.
Preferences: ${safePreferences}.

You MUST respond with valid JSON matching this structure:
{
  "title": "Recipe Name",
  "description": "Brief description",
  "prepTime": "XX mins",
  "cookTime": "XX mins",
  "servings": X,
  "ingredients": ["item 1", "item 2"],
  "instructions": ["step 1", "step 2"],
  "tips": "Chef's tip"
}`;
  }

  const systemPrompt =
    'You are a precise assistant that only responds with strict, valid JSON. Do not include markdown, code fences, or any explanation text.';

  return { systemPrompt, userInstruction };
}

function parseModelJson(text: string) {
  const withoutFences = text.replace(/```json\s*|\s*```/gi, '').trim();
  const firstBrace = withoutFences.indexOf('{');
  const lastBrace = withoutFences.lastIndexOf('}');

  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    const candidate = withoutFences.slice(firstBrace, lastBrace + 1);
    return JSON.parse(candidate);
  }

  return JSON.parse(withoutFences);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.HUGGINGFACE_API_KEY || process.env.HF_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Hugging Face API key is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const ingredients = (body.ingredients as string | undefined) || '';
    const preferences = body.preferences as string | undefined;
    const type = (body.type as string | undefined) || 'create';

    if (!ingredients && !type) {
      return NextResponse.json(
        { error: 'Please provide ingredients or recipe type' },
        { status: 400 }
      );
    }

    const { systemPrompt, userInstruction } = buildPrompt(ingredients, preferences, type);

    const hfResponse = await fetch('https://router.huggingface.co/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: HUGGINGFACE_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInstruction },
        ],
        max_tokens: 800,
        temperature: 0.4,
        top_p: 0.9,
      }),
    });

    const completion = await hfResponse.json();

    if (!hfResponse.ok) {
      const detail = typeof completion === 'string' ? completion : JSON.stringify(completion);
      throw new Error(`Hugging Face API error ${hfResponse.status}: ${detail}`);
    }

    const content =
      completion?.choices?.[0]?.message?.content ??
      completion?.choices?.[0]?.delta?.content ??
      '';

    if (typeof content !== 'string' || !content.trim()) {
      throw new Error('Invalid response from AI model');
    }

    const jsonResponse = parseModelJson(content) as unknown as {
      title?: string;
      description?: string;
      prepTime?: string;
      cookTime?: string;
      servings?: number;
      ingredients?: string[];
      instructions?: string[];
      tips?: string;
      suggestions?: unknown;
    };

    if (type === 'create' && jsonResponse && jsonResponse.title && !jsonResponse.suggestions) {
      try {
        const keyIngredients =
          Array.isArray(jsonResponse.ingredients) && jsonResponse.ingredients.length > 0
            ? jsonResponse.ingredients.slice(0, 5).join(', ')
            : ingredients;

        const imagePromptParts = [
          jsonResponse.title,
          jsonResponse.description,
          keyIngredients && `Ingredients: ${keyIngredients}`,
          preferences && `Style: ${preferences}`,
          'High-quality food photography, Indian cuisine, restaurant plating, vibrant colors, 4k, top-down shot',
        ].filter(Boolean) as string[];

        const imagePrompt = imagePromptParts.join('. ');

        const imageResponse = await fetch(
          `https://router.huggingface.co/hf-inference/models/${encodeURIComponent(
            HUGGINGFACE_IMAGE_MODEL
          )}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inputs: imagePrompt,
            }),
          }
        );

        if (imageResponse.ok) {
          const arrayBuffer = await imageResponse.arrayBuffer();
          const base64 = Buffer.from(arrayBuffer).toString('base64');
          (jsonResponse as unknown as { imageUrl?: string }).imageUrl =
            `data:image/png;base64,${base64}`;
        } else {
          const errorText = await imageResponse.text();
          console.error(
            'Recipe Genie Image Generation Error:',
            imageResponse.status,
            errorText
          );
        }
      } catch (imageError) {
        console.error('Recipe Genie Image Generation Exception:', imageError);
      }
    }

    return NextResponse.json(jsonResponse);
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Recipe Genie Error (Hugging Face):', err);

    let errorMessage = 'Something went wrong. Please try again.';
    const errorString = err.toString().toLowerCase();
    const specificError = err.message || err.toString();

    if (
      errorString.includes('429') ||
      errorString.includes('too many requests') ||
      errorString.includes('rate')
    ) {
      errorMessage =
        'Our AI chef is currently busy with too many requests. Please try again in a minute.';
    } else if (
      errorString.includes('403') ||
      errorString.includes('insufficient permissions') ||
      errorString.includes('does not have sufficient permissions')
    ) {
      errorMessage =
        'The AI setup for this site is not fully configured yet. Please contact the site owner to update the Hugging Face token permissions.';
    } else if (errorString.includes('404') || errorString.includes('not found')) {
      errorMessage = 'The AI service is temporarily unavailable. Please try again later.';
    } else if (
      errorString.includes('safety') ||
      errorString.includes('blocked') ||
      errorString.includes('policy')
    ) {
      errorMessage =
        'I cannot generate a recipe for that content due to safety guidelines. Please try different ingredients.';
    } else if (
      errorString.includes('503') ||
      errorString.includes('overloaded') ||
      errorString.includes('unavailable')
    ) {
      errorMessage = 'The AI service is overloaded. Please wait a moment and try again.';
    }

    errorMessage += ` (Debug Info: ${specificError})`;

    return NextResponse.json(
      {
        error: errorMessage,
        debug_error: specificError,
      },
      { status: 500 }
    );
  }
}
