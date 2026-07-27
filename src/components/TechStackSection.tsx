"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  {
    title: "Data Science & ML",
    subtitle: "Python, Pandas, Analytics",
    desc: "Processing complex datasets, statistical evaluation, building analytical models, and deriving actionable data-driven insights.",
    icon: "📊",
    tags: ["Python", "Pandas", "NumPy", "Data Mining"],
  },
  {
    title: "Web Development",
    subtitle: "Next.js, HTML/CSS, React",
    desc: "Designing and building fast, responsive, and modern fullstack web applications with intuitive user interfaces.",
    icon: "🌐",
    tags: ["HTML/CSS", "Next.js", "JavaScript", "Tailwind"],
  },
  {
    title: "SQL & Power BI",
    subtitle: "Database & Dashboards",
    desc: "Relational database design, complex SQL queries, data warehousing, and interactive Power BI dashboards.",
    icon: "🗄️",
    tags: ["SQL", "Power BI", "Excel", "Data Warehousing"],
  },
];

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 px-6 bg-[#6c47ff] text-white relative overflow-hidden border-b border-purple-500/30"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header (Exact Match to Reference Image 1 Services Header) */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 text-left">
            <span className="text-xs font-mono font-bold text-purple-200 uppercase tracking-wider">
              — Services & Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              My Services & Core Expertise
            </h2>
          </div>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#a3e635] text-slate-950 font-bold text-xs shadow-lg hover:bg-lime-300 hover:scale-105 transition-all flex items-center gap-2 w-max"
          >
            <span>View All Projects</span>
            <span className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
              ➔
            </span>
          </a>
        </div>

        {/* 3 Service Cards Grid (Exact Match to Reference Image 1 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={item.title}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="p-8 rounded-[32px] bg-white text-slate-900 shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Circular Icon Badge (Image 1 Style) */}
                <div className="w-16 h-16 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#6c47ff] font-mono">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Badges */}
              <div className="pt-6 border-t border-slate-100 mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-xs font-bold text-[#6c47ff] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <span className="ml-1">➔</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
