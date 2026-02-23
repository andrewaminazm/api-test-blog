"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Code2, Zap, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "All Posts" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-900/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <Zap size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-sm tracking-tight">API Test</span>
              <span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Blog</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-800/60 rounded-lg px-3 py-2 border border-slate-700/50">
              <Code2 size={12} className="text-indigo-400" />
              <span>Manual + Automation</span>
            </div>
            <a
              href="https://www.linkedin.com/in/andrew-amin-48763a194/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#0077B5]/10 hover:bg-[#0077B5]/25 border border-[#0077B5]/30 hover:border-[#0077B5]/60 px-3.5 py-2 rounded-lg transition-all duration-200"
            >
              <div className="w-5 h-5 rounded-md bg-[#0077B5] flex items-center justify-center flex-shrink-0">
                <Linkedin size={11} className="text-white fill-white" />
              </div>
              <span className="text-[#38bdf8] text-xs font-semibold">Andrew Amin</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-500/15 text-indigo-400"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* LinkedIn in mobile menu */}
            <a
              href="https://www.linkedin.com/in/andrew-amin-48763a194/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium text-[#38bdf8] bg-[#0077B5]/10 border border-[#0077B5]/25 hover:bg-[#0077B5]/20 transition-colors"
            >
              <div className="w-5 h-5 rounded-md bg-[#0077B5] flex items-center justify-center">
                <Linkedin size={11} className="text-white fill-white" />
              </div>
              Andrew Amin — LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
