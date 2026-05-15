"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b12]/90 backdrop-blur border-b border-[#1e2d45]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-lg text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          Bastian<span className="text-blue-500">.</span>dev
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Arcan17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f1623] border-b border-[#1e2d45] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Arcan17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300"
          >
            GitHub →
          </a>
        </div>
      )}
    </nav>
  );
}
