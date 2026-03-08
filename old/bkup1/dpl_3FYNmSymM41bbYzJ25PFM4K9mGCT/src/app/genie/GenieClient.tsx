'use client';

import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Sparkles, ChefHat, Loader2, Utensils, AlertCircle, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

type RecipeType = 'create' | 'suggest';

interface SavedGenieRecipe {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tips?: string;
  prompt?: string;
   imageUrl?: string;
}

interface Suggestion {
  title: string;
  description: string;
}

interface GenieResponse {
  // For 'create' type
  title?: string;
  description?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  ingredients?: string[];
  instructions?: string[];
  tips?: string;
  imageUrl?: string;
  
  // For 'suggest' type
  suggestions?: Suggestion[];
  
  error?: string;
}

export default function GenieClient() {
  const { isAuthenticated, isLoading } = useAuth();
  const [ingredients, setIngredients] = useState('');
  const [preferences, setPreferences] = useState('');
  const [type, setType] = useState<RecipeType>('create');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenieResponse | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState<SavedGenieRecipe[]>([]);
  const [hasSavedCurrent, setHasSavedCurrent] = useState(false);

  useEffect(() => {
    const loadSaved = async () => {
      if (!isAuthenticated) {
        setSavedRecipes([]);
        return;
      }
      try {
        const res = await fetch('/api/genie/saved');
        if (!res.ok) return;
        const data = (await res.json()) as { recipes?: SavedGenieRecipe[] };
        if (Array.isArray(data.recipes)) {
          const mapped: SavedGenieRecipe[] = data.recipes.map((r) => ({
            id: r.id,
            title: r.title,
            description: r.description,
            createdAt: r.createdAt,
            prepTime: r.prepTime,
            cookTime: r.cookTime,
            servings: r.servings,
            ingredients: r.ingredients,
            instructions: r.instructions,
            tips: r.tips,
            prompt: r.prompt,
            imageUrl: r.imageUrl,
          }));
          setSavedRecipes(mapped.slice(0, 3));
        }
      } catch {
      }
    };
    if (!isLoading) {
      loadSaved();
    }
  }, [isAuthenticated, isLoading]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (!ingredients.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/genie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients,
          preferences,
          type,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate recipe');
      }

      setResult(data);
      setHasSavedCurrent(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!result || !result.title || !result.ingredients || !result.instructions) {
      return;
    }
    if (savedRecipes.length >= 3) {
      setError('Aap sirf 3 Genie recipes save kar sakte hain. Nayi recipe save karne se pehle ek purani recipe delete karein.');
      return;
    }
    try {
      setSaving(true);
      const saveRes = await fetch('/api/genie/saved', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: result.title,
          description: result.description || '',
          prepTime: result.prepTime || '',
          cookTime: result.cookTime || '',
          servings: result.servings || 2,
          ingredients: result.ingredients,
          instructions: result.instructions,
          tips: result.tips || '',
          prompt: `${ingredients} | ${preferences}`,
          imageUrl: result.imageUrl || undefined,
        }),
      });
      const savedData = await saveRes.json();
      if (!saveRes.ok) {
        throw new Error(savedData.error || 'Failed to save recipe');
      }
      if (savedData.recipe) {
        const r = savedData.recipe;
        const savedItem: SavedGenieRecipe = {
          id: r.id,
          title: r.title,
          description: r.description,
          createdAt: r.createdAt,
          prepTime: r.prepTime,
          cookTime: r.cookTime,
          servings: r.servings,
          ingredients: r.ingredients,
          instructions: r.instructions,
          tips: r.tips,
          prompt: r.prompt,
          imageUrl: r.imageUrl,
        };
        setSavedRecipes(prev => {
          const next = [savedItem, ...prev];
          return next.slice(0, 3);
        });
        setHasSavedCurrent(true);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save recipe. Please try again.';
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSaved = async (id: string) => {
    try {
      const res = await fetch('/api/genie/saved', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to delete recipe');
      }
      setSavedRecipes(prev => prev.filter(r => r.id !== id));
      setHasSavedCurrent(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to delete recipe. Please try again.';
      setError(message);
    }
  };

  const handleSavedClick = (recipe: SavedGenieRecipe) => {
    setType('create');
    if (recipe.prompt) {
      const parts = recipe.prompt.split('|');
      if (parts.length >= 1) {
        setIngredients(parts[0].trim());
      }
      if (parts.length >= 2) {
        setPreferences(parts[1].trim());
      }
    }
    setResult({
      title: recipe.title,
      description: recipe.description,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      tips: recipe.tips,
      imageUrl: recipe.imageUrl,
    });
    setHasSavedCurrent(true);
    setError('');
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-120px)] bg-[var(--ak-bg-soft)] flex items-center justify-center px-4 py-10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your account...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-120px)] bg-[var(--ak-bg-soft)] flex items-center justify-center px-4 py-10">
        <div className="max-w-md w-full text-center bg-white shadow-lg rounded-2xl p-8 border border-[var(--ak-border)]">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[var(--ak-primary)]/10 border border-[var(--ak-primary)]/20 mb-4">
            <ChefHat className="w-7 h-7 text-[var(--ak-primary)]" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Sign in to use Recipe Genie</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Recipe Genie is available only for logged in users so you can save and revisit your AI-generated recipes anytime.
          </p>
          <Link
            href="/signin"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--ak-primary)] hover:bg-[var(--ak-secondary)] text-white font-semibold text-sm transition-colors"
          >
            Go to Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-[var(--ak-bg)] pb-12">
      {/* Hero Section */}
      <div className="bg-[var(--ak-primary)] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="font-medium text-sm md:text-base">
                Powered by Indian Kitchen • AI Recipe Studio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              Recipe Genie
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Turn your available ingredients into delicious Indian dishes instantly. 
              Let our AI chef guide your culinary journey.
            </p>
          </m.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-5">
            <m.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-[var(--ak-border)] p-6 md:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What ingredients do you have?
                  </label>
                  <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="e.g., potatoes, cauliflower, ginger, garlic, garam masala..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--ak-primary)] focus:ring-2 focus:ring-[var(--ak-primary)]/20 transition-all resize-none h-32"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Any preferences? (Optional)
                  </label>
                  <input
                    type="text"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    placeholder="e.g., spicy, vegan, under 30 mins, kid-friendly..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--ak-primary)] focus:ring-2 focus:ring-[var(--ak-primary)]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What would you like?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setType('create')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        type === 'create'
                          ? 'border-[var(--ak-primary)] bg-[var(--ak-primary)]/5 text-[var(--ak-primary)]'
                          : 'border-gray-100 hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <ChefHat className="w-6 h-6" />
                      <span className="font-medium text-sm">Create Recipe</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setType('suggest')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        type === 'suggest'
                          ? 'border-[var(--ak-primary)] bg-[var(--ak-primary)]/5 text-[var(--ak-primary)]'
                          : 'border-gray-100 hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <Utensils className="w-6 h-6" />
                      <span className="font-medium text-sm">Suggest Dishes</span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !ingredients.trim()}
                  className="w-full bg-[var(--ak-primary)] hover:bg-[var(--ak-secondary)] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Conjuring Magic...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      {type === 'create' ? 'Generate Recipe' : 'Get Suggestions'}
                    </>
                  )}
                </button>
              </form>
            </m.div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-7 space-y-6">
            {error && (
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>{error}</p>
              </m.div>
            )}

            {!result && !loading && !error && (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl bg-white/50 p-8 text-center"
              >
                <ChefHat className="w-16 h-16 mb-4 opacity-20" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">Ready to Cook?</h3>
                <p className="max-w-md">
                  Enter your ingredients on the left and let our AI chef create a personalized Indian recipe just for you.
                </p>
              </m.div>
            )}

            {result && (
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-[var(--ak-border)] overflow-hidden"
              >
                {/* Create Recipe View */}
                {result.title && !result.suggestions && (
                  <div>
                    <div className="bg-[var(--ak-bg-soft)] p-8 border-b border-[var(--ak-border)]">
                      <h2 className="text-3xl font-bold font-serif text-[var(--ak-text)] mb-3">
                        {result.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{result.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-6">
                        <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                          <span className="text-gray-500 text-sm">Prep Time</span>
                          <span className="font-semibold text-[var(--ak-primary)]">{result.prepTime}</span>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                          <span className="text-gray-500 text-sm">Cook Time</span>
                          <span className="font-semibold text-[var(--ak-primary)]">{result.cookTime}</span>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                          <span className="text-gray-500 text-sm">Servings</span>
                          <span className="font-semibold text-[var(--ak-primary)]">{result.servings}</span>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-gray-500">
                          Save this recipe so you can find it later in your Genie history.
                        </p>
                        <button
                          type="button"
                          onClick={handleSave}
                          disabled={saving || hasSavedCurrent}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
                            hasSavedCurrent
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                              : 'bg-white text-[var(--ak-primary)] border-[var(--ak-primary)] hover:bg-[var(--ak-primary)] hover:text-white'
                          } ${saving ? 'opacity-80 cursor-wait' : ''}`}
                        >
                          {hasSavedCurrent ? (
                            <>
                              <Sparkles className="w-4 h-4" />
                              Saved
                            </>
                          ) : saving ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Saving...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              Save this recipe
                            </>
                          )}
                        </button>
                      </div>

                      {result.imageUrl && (
                        <div className="mt-6 relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                          <div className="relative w-full h-64 md:h-80">
                            <Image
                              src={result.imageUrl}
                              alt={result.title || 'Generated recipe image'}
                              fill
                              sizes="(min-width: 1024px) 640px, 100vw"
                              className="object-cover"
                              priority
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--ak-text)] mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-[var(--ak-primary)]/10 text-[var(--ak-primary)] flex items-center justify-center text-sm">1</span>
                            Ingredients
                          </h3>
                          <ul className="space-y-3">
                            {result.ingredients?.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ak-primary)] mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-[var(--ak-text)] mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-[var(--ak-primary)]/10 text-[var(--ak-primary)] flex items-center justify-center text-sm">2</span>
                            Instructions
                          </h3>
                          <div className="space-y-4">
                            {result.instructions?.map((step, i) => (
                              <div key={i} className="flex gap-4">
                                <span className="font-bold text-gray-400 shrink-0">{i + 1}.</span>
                                <p className="text-gray-700 leading-relaxed">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {result.tips && (
                        <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-xl p-6">
                          <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                            <ChefHat className="w-5 h-5" />
                            Chef’s Tip
                          </h4>
                          <p className="text-yellow-800/80">{result.tips}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Suggestions View */}
                {result.suggestions && (
                  <div className="p-8">
                    <h2 className="text-2xl font-bold font-serif text-[var(--ak-text)] mb-6 flex items-center gap-3">
                      <Utensils className="w-6 h-6 text-[var(--ak-primary)]" />
                      Suggested Dishes
                    </h2>
                    <div className="grid gap-6">
                      {result.suggestions.map((suggestion, i) => (
                        <div
                          key={i}
                          className="group p-6 rounded-xl border border-gray-100 hover:border-[var(--ak-primary)] hover:shadow-md transition-all bg-white"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-[var(--ak-text)] group-hover:text-[var(--ak-primary)] transition-colors">
                              {suggestion.title}
                            </h3>
                            <button
                              type="button"
                              onClick={() => {
                                setType('create');
                                setResult(null);
                                setError('');
                                setHasSavedCurrent(false);
                                setPreferences(
                                  `Generate full recipe for: ${suggestion.title}`
                                );
                                handleSubmit();
                              }}
                              className="text-sm font-medium text-[var(--ak-primary)] opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              Generate Full Recipe →
                            </button>
                          </div>
                          <p className="text-gray-600">{suggestion.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </m.div>
            )}

            <div className="bg-white rounded-2xl shadow-md border border-[var(--ak-border)] p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-[var(--ak-text)]">
                  Your saved Genie recipes
                </h3>
                {saving && (
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Saving...
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-4">
                You can save up to 3 Genie recipes. To save a new one, please
                remove any recipe you no longer need from this list.
              </p>
              {savedRecipes.length === 0 ? (
                <p className="text-sm text-gray-400">
                  You don&apos;t have any Genie recipes saved yet. Once you save a
                  recipe, it will appear here.
                </p>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {savedRecipes.map(recipe => (
                    <div
                      key={recipe.id}
                      className="flex flex-col gap-1 p-3 rounded-lg border border-gray-100 hover:border-[var(--ak-primary)]/60 hover:bg-[var(--ak-bg-soft)] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleSavedClick(recipe)}
                          className="flex-1 text-left"
                        >
                          <div className="text-sm font-semibold text-[var(--ak-text)]">
                            {recipe.title}
                          </div>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            {recipe.description}
                          </div>
                          {recipe.prompt && (
                            <div className="text-[11px] text-gray-500 mt-1">
                              Prompt: {recipe.prompt}
                            </div>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSaved(recipe.id);
                          }}
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 text-gray-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors"
                          aria-label="Remove saved recipe"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {new Date(recipe.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </LazyMotion>
  );
}
