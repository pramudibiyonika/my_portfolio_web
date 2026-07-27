"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 3.4, // Trigger after preloader exit
      });

      tl.from(badgeRef.current, { y: 20, opacity: 0, duration: 0.6 })
        .from(titleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.6")
        .from(descRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(buttonsRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.6")
        .from(cardRef.current, { scale: 0.9, opacity: 0, duration: 1, ease: "back.out(1.5)" }, "-=0.4");
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-36 pb-20 px-6 flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10 space-y-6">
        {/* Status Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-xl">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase font-mono">
            BSc (Hons) in Data Science Student • SLTC (2027)
          </span>
        </div>

        {/* Main Name Heading */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Hello, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
            Pramudi Biyonika
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-semibold text-slate-300 tracking-wide"
        >
          Data Science Undergraduate & Analytical Developer
        </p>

        {/* Biography excerpt */}
        <p
          ref={descRef}
          className="max-w-3xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed font-normal"
        >
          An innovative and analytical undergraduate at SLT Research University with a passion for solving complex problems, building web applications, and performing data analytics using Python, SQL, Java, Power BI, and modern fullstack technologies.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-800/80 font-semibold text-slate-200 backdrop-blur-md transition-all duration-300"
          >
            About & Education
          </a>
        </div>

        {/* Profile Details Terminal Card */}
        <div
          ref={cardRef}
          className="mt-12 p-1 rounded-2xl bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-slate-950 border border-slate-800 shadow-2xl backdrop-blur-xl"
        >
          <div className="bg-slate-950/90 rounded-[14px] p-6 text-left font-mono text-sm overflow-x-auto text-slate-300 border border-slate-900">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500 font-sans">pramudi_biyonika.json</span>
            </div>
            <pre className="text-cyan-300">
              <code>{`{
  "name": "Pramudi Biyonika",
  "degree": "BSc (Hons) in Data Science",
  "university": "SLT Research University (SLTC)",
  "expectedGraduation": 2027,
  "skills": ["C", "Java", "Python", "SQL", "Power BI", "HTML/CSS"],
  "focusAreas": ["Data Analytics", "Software Engineering", "Machine Learning"]
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
