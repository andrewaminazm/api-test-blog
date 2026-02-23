import Link from "next/link";
import { Zap, Linkedin, ExternalLink } from "lucide-react";

const footerLinks = {
  Topics: [
    { label: "Manual Testing", href: "/categories/manual" },
    { label: "REST Assured", href: "/categories/rest-assured" },
    { label: "Cypress", href: "/categories/cypress" },
    { label: "Python Testing", href: "/categories/python" },
    { label: "Postman", href: "/categories/postman" },
    { label: "Test Cases", href: "/categories/test-cases" },
  ],
  Resources: [
    { label: "All Posts", href: "/blog" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm">API Test Blog</span>
                <span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Manual & Automation</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your complete resource for API testing — covering manual testing, REST Assured, Cypress, Python, Postman, and comprehensive test case coverage.
            </p>

            {/* Author card */}
            <div className="mt-5 rounded-xl border border-slate-700/60 bg-slate-800/40 p-4">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">Written by</p>
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center shadow-md shadow-[#0077B5]/20">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0077B5] border-2 border-slate-800 flex items-center justify-center">
                    <Linkedin size={8} className="text-white fill-white" />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Andrew Amin</p>
                  <p className="text-slate-500 text-xs">QA Engineer · API Testing</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/andrew-amin-48763a194/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 flex items-center justify-center gap-2 w-full bg-[#0077B5]/15 hover:bg-[#0077B5]/30 border border-[#0077B5]/30 hover:border-[#0077B5]/60 text-[#38bdf8] text-xs font-semibold py-2 rounded-lg transition-all duration-200"
              >
                <Linkedin size={12} className="fill-current" />
                Connect on LinkedIn
                <ExternalLink size={10} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2026 API Test Blog. Built for QA engineers worldwide.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
