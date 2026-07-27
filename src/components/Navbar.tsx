"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 3.2, // synced after preloader exit
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            PB
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Pramudi Biyonika
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:cit-23-02-0345@sltc.ac.lk"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full group-hover:opacity-100 transition-opacity"></span>
            <span className="relative block px-5 py-2 rounded-full bg-slate-950 text-xs font-semibold text-white group-hover:bg-slate-950/80 transition-colors">
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
