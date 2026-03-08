import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the terms and conditions for using Indian Kitchen, including acceptable use, content ownership, and limitations of liability.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-[var(--ak-bg-soft)]">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="section-title text-3xl md:text-4xl mb-4">
          Terms of Service
        </h1>
        <p className="section-subtitle text-sm md:text-base mb-8">
          Please read these terms carefully before using Indian Kitchen at
          indiankitchen.blog.
        </p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-800 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Acceptance of terms
            </h2>
            <p>
              By accessing or using Indian Kitchen, you agree to be bound by
              these Terms of Service and our{' '}
              <Link
                href="/privacy-policy"
                className="text-[var(--ak-primary)] underline"
              >
                Privacy Policy
              </Link>
              . If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Use of content
            </h2>
            <p>
              The recipes, text, images, and other content on Indian Kitchen are
              provided for personal, non-commercial use. You may cook from the
              recipes and share links to our pages, but you should not copy and
              republish full recipes or content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              3. User accounts and behaviour
            </h2>
            <p>
              When you create an account, you are responsible for keeping your
              login details secure. You agree not to misuse the site, including
              by posting spam, offensive content, or anything that violates
              applicable laws or the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              4. Recipe Genie and AI-generated content
            </h2>
            <p>
              Recipe Genie provides AI-generated suggestions based on the input
              you provide. These suggestions are for inspiration only and may
              not always be accurate, complete, or suitable for your specific
              needs. You should always use your own judgement, especially for
              ingredients, allergens, and dietary restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              5. No professional advice
            </h2>
            <p>
              Content on this site is for general cooking and educational
              purposes only. It is not professional nutritional, medical, or
              dietary advice. Always consult a qualified professional if you
              have specific health or dietary questions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              6. Third-party services and ads
            </h2>
            <p>
              Indian Kitchen may link to third-party websites or show
              third-party advertisements. We do not control and are not
              responsible for the content, policies, or practices of these
              external sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              7. Limitation of liability
            </h2>
            <p>
              Indian Kitchen is provided &ldquo;as is&rdquo; without any
              guarantees. To the maximum extent permitted by law, we are not
              liable for any direct or indirect damages arising from your use of
              the site, including issues related to recipes, ingredients, or
              technical problems.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              8. Changes to these terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. If changes
              are significant, we will update the date on this page and, where
              appropriate, communicate updates within the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              9. Contact
            </h2>
            <p>
              If you have questions about these terms, please contact us at{' '}
              <a
                href="mailto:info@indiankitchen.blog"
                className="text-[var(--ak-primary)] underline"
              >
                info@indiankitchen.blog
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

