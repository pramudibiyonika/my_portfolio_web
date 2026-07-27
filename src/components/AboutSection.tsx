"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Business Analysis & Software Design",
  "Data Technologies",
  "Project Management",
  "Data Warehousing",
  "Human Factors in Computer Systems",
];

const extracurriculars = [
  "Completed Phase 1 of Emerging Scholars' Research Programme",
  "Co-chair of 'Sipsari Yathra' Project",
  "Member of IEEE at SLTC - Content & Caption Team (2024-2025)",
  "Member of Leo Club at SLTC (2024-2025)",
  "Member of AIESEC at SLTC (2024)",
  "Member of Compering Team - SLTC Media Unit",
  "Member of Sri Lanka Karate-do Federation",
  "Leader of Inter-School Bilingual Debate Team (2016)",
  "School Senior Prefect Team (2016-2017)",
  "1st Place in Creative Writing (Divisional English Competition 2014)",
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Background & Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            About & Education
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic foundation at Sri Lanka Technological Campus (SLTC) alongside active research and leadership initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education & Coursework */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-2xl">
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Sri Lanka Technological Campus (SLTC)
                </h3>
                <p className="text-cyan-400 font-semibold text-sm">
                  BSc (Hons) in Data Science (Graduating 2027)
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              SLT Research University undergraduate focused on analytical methodologies, data structures, software engineering, and database systems.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Research & Extracurriculars */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 text-2xl">
                🌟
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Research & Leadership
                </h3>
                <p className="text-indigo-400 font-semibold text-sm">
                  Extra Curricular Activities & Achievements
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-300">
              {extracurriculars.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
