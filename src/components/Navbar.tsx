"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/80 border-b border-slate-200/80 shadow-xs"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#6c47ff] flex items-center justify-center font-bold text-white text-sm shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            PB
          </div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">
            Pramudi<span className="text-[#6c47ff]">.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#hero" className="hover:text-[#6c47ff] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#6c47ff] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#6c47ff] transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#6c47ff] transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#6c47ff] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA Button (Matching Reference Image 1 Aesthetic) */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:cit-23-02-0345@sltc.ac.lk"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6c47ff] text-white font-bold text-xs shadow-md shadow-purple-500/20 hover:bg-[#5b39ee] hover:scale-105 transition-all"
          >
            <span>Get In Touch</span>
            <span className="w-5 h-5 rounded-full bg-[#a3e635] text-slate-950 flex items-center justify-center text-[10px] font-bold">
              ➔
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
