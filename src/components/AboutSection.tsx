"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bioGridRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (bioGridRef.current) {
        gsap.from(bioGridRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bioGridRef.current,
            start: "top 90%",
            once: true,
          },
        });
      }

      if (cardsGridRef.current) {
        gsap.from(cardsGridRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsGridRef.current,
            start: "top 90%",
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 px-6 bg-white text-slate-900 border-b border-slate-200/80 relative"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Top "Who is Pramudi Biyonika?" Grid */}
        <div
          ref={bioGridRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Column: Big Purple Stat Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[32px] bg-[#6c47ff] p-8 text-white shadow-2xl shadow-purple-500/25 flex flex-col justify-between min-h-[340px] overflow-hidden">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-purple-200">
                  SLTC University
                </span>
                <p className="text-xs text-purple-300 font-mono">CLASS OF 2027</p>
              </div>

              <div className="my-6">
                <span className="text-7xl sm:text-8xl font-extrabold tracking-tighter block leading-none font-mono">
                  2027
                </span>
                <span className="text-sm font-semibold text-purple-200 mt-2 block">
                  BSc (Hons) in Data Science
                </span>
              </div>

              <div className="pt-4 border-t border-purple-400/30 flex justify-between items-center text-xs font-mono text-purple-200 uppercase tracking-wider">
                <span>Pramudi Biyonika</span>
                <span>Data Scientist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-[#6c47ff] uppercase tracking-wider">
              — About Me
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Who is{" "}
              <span className="text-[#6c47ff]">Pramudi Biyonika?</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              An innovative and analytical undergraduate studying at SLT Research University, graduating in 2027, with a passion for solving complex problems. Hard-working, adaptable, and self-disciplined team worker, eager to contribute to impactful projects and researches.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2 max-w-md">
              <div>
                <div className="text-3xl font-extrabold text-[#6c47ff] font-mono">
                  10+
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-1">
                  Projects & Research Highlights
                </div>
              </div>

              <div>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">
                  SLTC &apos;27
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-1">
                  BSc (Hons) Data Science
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="mailto:cit-23-02-0345@sltc.ac.lk"
                className="px-6 py-3 rounded-full bg-[#a3e635] text-slate-950 font-bold text-xs shadow-md hover:bg-lime-300 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Contact / Resume</span>
                <span className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
                  ➔
                </span>
              </a>

              <span className="text-xl font-serif italic text-slate-700 font-bold tracking-wide border-b-2 border-[#6c47ff]/40 pb-1">
                Pramudi Biyonika
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Education & Experience Cards */}
        <div ref={cardsGridRef} className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-[#6c47ff] uppercase tracking-wider">
              — Education & Leadership
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              My Academic & Leadership Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[28px] bg-slate-50 border border-slate-200/80 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6c47ff] text-white flex items-center justify-center text-xl font-bold shadow-md shadow-purple-500/20">
                  🎓
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    Education
                  </h4>
                  <p className="text-xs font-semibold text-[#6c47ff]">
                    SLT Research University (SLTC)
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-200/80 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 text-sm">
                    BSc (Hons) in Data Science
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-[#6c47ff] text-xs font-bold font-mono">
                    2023 - 2027
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focusing on data structures, machine learning models, database management, and software design principles.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Business Analysis",
                    "Data Warehousing",
                    "Project Management",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[28px] bg-slate-50 border border-slate-200/80 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6c47ff] text-white flex items-center justify-center text-xl font-bold shadow-md shadow-purple-500/20">
                  🌟
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    Research & Leadership
                  </h4>
                  <p className="text-xs font-semibold text-[#6c47ff]">
                    Extra Curricular Activities
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-200/80 pt-4 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#6c47ff] font-bold">✓</span>
                  <span>
                    <strong>Emerging Scholars’ Research Programme:</strong> Completed Phase 1 research.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#6c47ff] font-bold">✓</span>
                  <span>
                    <strong>IEEE at SLTC:</strong> Content & Caption Team Member (2024-2025).
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#6c47ff] font-bold">✓</span>
                  <span>
                    <strong>Project Co-chair:</strong> &apos;Sipsari Yathra&apos; Initiative.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#6c47ff] font-bold">✓</span>
                  <span>
                    <strong>SLTC Media Unit:</strong> Compering team member & active societies participant.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
