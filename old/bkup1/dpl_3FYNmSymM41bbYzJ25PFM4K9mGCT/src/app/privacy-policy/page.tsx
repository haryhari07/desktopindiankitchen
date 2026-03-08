import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Understand how Indian Kitchen collects, uses, and protects your information, including basic analytics and potential advertising partners.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-[var(--ak-bg-soft)]">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="section-title text-3xl md:text-4xl mb-4">
          Privacy Policy
        </h1>
        <p className="section-subtitle text-sm md:text-base mb-8">
          This page explains what information we collect on Indian Kitchen, how
          we use it, and your choices.
        </p>

        <div className="prose prose-sm md:prose-base max-w-none text-gray-800 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Who we are
            </h2>
            <p>
              Indian Kitchen is a recipe website available at{' '}
              <span className="font-medium">indiankitchen.blog</span>. You can
              contact us any time at{' '}
              <a
                href="mailto:info@indiankitchen.blog"
                className="text-[var(--ak-primary)] underline"
              >
                info@indiankitchen.blog
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Information we collect
            </h2>
            <p>We collect limited information in order to run this site:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Information you provide directly, such as your email address and
                name when you create an account, leave a comment, or contact us.
              </li>
              <li>
                Basic usage data, such as pages visited, device type, and
                approximate location, through analytics tools in order to
                understand how people use the site.
              </li>
              <li>
                Technical data like IP address and browser type that are needed
                to serve the website securely and prevent abuse.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              3. Cookies and similar technologies
            </h2>
            <p>
              We use cookies and similar technologies to keep you signed in,
              remember your preferences, and measure how the site is used. Some
              cookies are essential for the site to function, while others help
              us improve performance and content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              4. Advertising and Google AdSense
            </h2>
            <p>
              In the future, we may show ads on Indian Kitchen through partners
              such as Google AdSense. When ads are active, these partners may
              use cookies or similar technologies to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Serve and measure personalised or non-personalised ads.</li>
              <li>
                Limit how often you see the same ad and detect invalid activity.
              </li>
              <li>
                Understand which ads are useful and relevant to visitors of this
                site.
              </li>
            </ul>
            <p>
              You can learn more about how Google uses data from partner sites
              by visiting Google&apos;s own privacy and advertising policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              5. How we use your information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Operate and maintain the website and your account.</li>
              <li>
                Show you saved recipes, comments, and other personalised
                features when you are signed in.
              </li>
              <li>Improve our content, performance, and user experience.</li>
              <li>
                Protect the site from spam, abuse, and security threats.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              6. Data sharing
            </h2>
            <p>
              We do not sell your personal information. We may share limited
              data with service providers that help us run the site (for
              example, hosting, analytics, or email services), and with
              advertising partners when ads are displayed. These partners are
              expected to protect your data and use it only for the agreed
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              7. Your choices
            </h2>
            <p>You can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Choose not to create an account or leave comments.</li>
              <li>
                Request deletion of your account by contacting us at{' '}
                <a
                  href="mailto:info@indiankitchen.blog"
                  className="text-[var(--ak-primary)] underline"
                >
                  info@indiankitchen.blog
                </a>
                .
              </li>
              <li>
                Adjust your browser settings to block or clear cookies. Some
                parts of the site may not work correctly without cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              8. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. When we make
              important changes, we will update the date on this page and, where
              appropriate, provide additional notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              9. Contact
            </h2>
            <p>
              If you have any questions about this policy or your data, please
              contact us at{' '}
              <a
                href="mailto:info@indiankitchen.blog"
                className="text-[var(--ak-primary)] underline"
              >
                info@indiankitchen.blog
              </a>
              .
            </p>
            <p className="text-xs text-gray-500 mt-2">
              You can also read our{' '}
              <Link
                href="/terms"
                className="text-[var(--ak-primary)] underline"
              >
                Terms of Service
              </Link>{' '}
              to understand how the site may be used.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

