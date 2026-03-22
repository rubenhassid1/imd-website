import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-heading text-xl font-bold tracking-wide">
              IMD
            </span>
            <p className="text-sm text-primary-light mt-1">
              Tel Aviv &middot; Washington, D.C.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm">
            <a
              href="mailto:contact@imd-intel.com"
              className="hover:text-primary-light transition-colors"
            >
              contact@imd-intel.com
            </a>
            <Link
              href="/contact"
              className="hover:text-primary-light transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary text-sm text-base-light">
          &copy; 2026 IMD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
