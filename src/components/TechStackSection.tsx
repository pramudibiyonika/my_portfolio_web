"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const skillsList = [
  {
    name: "Python & Data Science",
    category: "Analytics & ML",
    desc: "Data processing, analytical modeling, statistical evaluation, and data structures.",
    gradient: "from-cyan-900/40 to-blue-900/40",
    border: "border-cyan-500/40",
    icon: "🐍",
  },
  {
    name: "SQL & Data Warehousing",
    category: "Databases",
    desc: "Database design, complex querying, data warehousing, and relational data management.",
    gradient: "from-indigo-900/40 to-purple-900/40",
    border: "border-indigo-500/40",
    icon: "🗄️",
  },
  {
    name: "Power BI & Excel",
    category: "Data Visualization",
    desc: "Interactive dashboards, business analysis, reporting, and visual data insights.",
    gradient: "from-amber-900/40 to-yellow-900/40",
    border: "border-amber-500/40",
    icon: "📊",
  },
  {
    name: "C & Java Development",
    category: "Core Programming",
    desc: "Object-Oriented Programming, data structures & algorithms, and software design principles.",
    gradient: "from-emerald-900/40 to-teal-900/40",
    border: "border-emerald-500/40",
    icon: "💻",
  },
  {
    name: "Web Dev (HTML/CSS)",
    category: "Frontend Web",
    desc: "Building responsive, modern user interfaces with modern styling and clean layouts.",
    gradient: "from-pink-900/40 to-rose-900/40",
    border: "border-pink-500/40",
    icon: "🌐",
  },
  {
    name: "Problem Solving & Analysis",
    category: "Soft Skills",
    desc: "Critical thinking, bilingual communication, leadership, and event management.",
    gradient: "from-violet-900/40 to-purple-900/40",
    border: "border-violet-500/40",
    icon: "🧠",
  },
];

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="skills" ref={containerRef} className="py-24 px-6 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Skills & Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Technical Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive skill set spanning data analysis, software engineering, and analytical tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((item, idx) => (
            <div
              key={item.name}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className={`p-6 rounded-2xl bg-gradient-to-b ${item.gradient} border ${item.border} backdrop-blur-lg hover:-translate-y-2 transition-transform duration-300 shadow-xl group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
