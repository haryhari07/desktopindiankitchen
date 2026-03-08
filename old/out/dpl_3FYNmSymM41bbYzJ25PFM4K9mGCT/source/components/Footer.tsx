import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-sm">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">
            Indian Kitchen
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Celebrating the diversity of Indian cuisine, one state at a time.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Contact:{' '}
            <a
              href="mailto:info@indiankitchen.blog"
              className="underline underline-offset-2"
            >
              info@indiankitchen.blog
            </a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Site
            </span>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/recipes" className="hover:text-white">
              All Recipes
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Legal
            </span>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Indian Kitchen. All rights reserved.
      </div>
    </footer>
  );
}
