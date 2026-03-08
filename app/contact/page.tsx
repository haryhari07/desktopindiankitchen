import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Indian Kitchen',
  description:
    'Get in touch with the Indian Kitchen team for feedback, collaboration, recipe suggestions, or support.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-[var(--ak-bg-soft)]">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="section-title text-3xl md:text-4xl mb-4">
          Contact Us
        </h1>
        <p className="section-subtitle text-sm md:text-base mb-8">
          We read every message and use your feedback to improve Indian
          Kitchen for home cooks everywhere.
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-[var(--ak-border)] p-6 md:p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Email
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            For general questions, recipe feedback, or partnership enquiries,
            send us an email at:
          </p>
          <a
            href="mailto:info@indiankitchen.blog"
            className="inline-flex items-center text-sm font-medium text-[var(--ak-primary)] underline underline-offset-2"
          >
            info@indiankitchen.blog
          </a>

          <div className="mt-8 space-y-3 text-sm text-gray-700">
            <p>
              When you write to us, you can include links to the recipes you
              are talking about, screenshots, or any additional details that
              help us understand your request.
            </p>
            <p>
              We aim to respond within a reasonable time, but response times
              can vary based on volume. Thank you for your patience and for
              being part of the Indian Kitchen community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

