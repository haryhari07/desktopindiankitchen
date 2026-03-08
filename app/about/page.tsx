import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Indian Kitchen',
  description:
    'Learn about Indian Kitchen, our mission to make everyday Indian cooking easier, and how we curate authentic recipes from across India.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-[var(--ak-bg-soft)]">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="section-title text-3xl md:text-4xl mb-4">
          About Indian Kitchen
        </h1>
        <p className="section-subtitle text-sm md:text-base mb-8">
          Indian Kitchen is a home for simple, reliable Indian recipes that
          work in real kitchens, not just in food photos.
        </p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
          <p>
            Our goal is to make everyday Indian cooking approachable for
            everyone. Whether you are cooking in India or abroad, we focus on
            recipes that use practical ingredients, clear instructions, and
            tested methods so that you can trust the final result.
          </p>

          <p>
            The recipes on this site are hand-curated and organised by Indian
            states, regions, and dietary preferences. We highlight traditional
            dishes as well as everyday meals, so that you can explore the full
            diversity of Indian food one recipe at a time.
          </p>

          <p>
            You will also find Recipe Genie, an AI-powered assistant that helps
            you get ideas based on the ingredients you have. Genie is designed
            to complement our main recipe collection, not replace it. It is a
            helpful tool for inspiration, while our published recipes remain
            carefully reviewed and structured for step-by-step cooking.
          </p>

          <p>
            We care about a clean reading experience, fast loading pages, and
            clear navigation. That is why we focus on a limited number of
            high-quality recipes instead of thousands of automatically
            generated pages. This helps keep the site useful for real people
            and aligned with Google&apos;s quality guidelines.
          </p>

          <p>
            If you have suggestions, feedback, or recipe ideas you would like
            to see on Indian Kitchen, you can always reach us at{' '}
            <a
              href="mailto:info@indiankitchen.blog"
              className="text-[var(--ak-primary)] underline"
            >
              info@indiankitchen.blog
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

