"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    id: "01",
    title: "MediCare",
    subtitle: "Pharmacy Management System",
    type: "Team Project",
    typeColor: "bg-purple-100 text-[#6c47ff]",
    desc: "A comprehensive pharmacy management system streamlining inventory tracking, prescription processing, sales analytics, and customer management records for efficient pharmacy operations.",
    image: "/medicare_thumb.jpg",
    tags: ["Java", "SQL", "Database Design", "System Architecture"],
    year: "2024",
    accent: "from-purple-50 to-indigo-50",
    borderAccent: "hover:border-[#6c47ff]/30",
  },
  {
    id: "02",
    title: "SAPRO Dashboard",
    subtitle: "Greenhouse Management System",
    type: "Team Project",
    typeColor: "bg-lime-100 text-lime-800",
    desc: "Interactive analytics dashboard for real-time greenhouse climate monitoring, environmental sensor data visualization, automated reporting, and operational KPI tracking.",
    image: "/sapro_thumb.jpg",
    tags: ["Power BI", "Python", "Data Analytics", "Dashboard Design"],
    year: "2024",
    accent: "from-lime-50 to-green-50",
    borderAccent: "hover:border-lime-400/40",
  },
  {
    id: "03",
    title: "Emerging Scholars Research",
    subtitle: "Research Programme — Phase 1",
    type: "Research Project",
    typeColor: "bg-indigo-100 text-indigo-700",
    desc: "Phase 1 of the Emerging Scholars' Research Programme — conducting systematic analytical research, statistical evaluation, and data-driven academic inquiry at SLT Research University.",
    image: null,
    tags: ["Python", "Statistics", "Research Methods", "Data Analysis"],
    year: "2024",
    accent: "from-slate-50 to-purple-50",
    borderAccent: "hover:border-indigo-300/40",
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.18,
        delay: 0.25,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-6 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">

        {/* Section Header */}
        <div
          ref={headRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 text-left">
            <span className="text-xs font-mono font-bold text-[#6c47ff] uppercase tracking-wider">
              — Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              My Featured Projects{" "}
              <span className="text-[#6c47ff]">&</span> Dashboards
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl">
              Practical systems, analytics dashboards, and data science research built during academic and team collaborations.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#6c47ff] text-white font-bold text-xs shadow-md shadow-purple-500/20 hover:bg-[#5b39ee] hover:scale-105 transition-all flex items-center gap-2 w-max"
          >
            <span>Let&apos;s Collaborate</span>
            <span className="w-5 h-5 rounded-full bg-[#a3e635] text-slate-950 flex items-center justify-center text-[10px] font-bold">
              ➔
            </span>
          </a>
        </div>

        {/* Projects Grid — Bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: MediCare — Large Featured */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className={`md:col-span-7 group rounded-[32px] bg-gradient-to-br ${projects[0].accent} border border-slate-200/80 ${projects[0].borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
          >
            {/* Project Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={projects[0].image!}
                alt={projects[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              {/* Project Number */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-xs font-extrabold text-[#6c47ff] font-mono shadow">
                {projects[0].id}
              </div>
              {/* Type Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${projects[0].typeColor}`}>
                {projects[0].type}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8 flex flex-col flex-1 justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#6c47ff] transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-xs font-semibold text-[#6c47ff] font-mono">{projects[0].subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{projects[0].desc}</p>
              </div>

              <div className="flex flex-col gap-4 pt-2 border-t border-slate-200/80">
                <div className="flex flex-wrap gap-1.5">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{projects[0].year}</span>
                  <span className="text-xs font-bold text-[#6c47ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details ➔
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: SAPRO + Research stacked */}
          <div className="md:col-span-5 flex flex-col gap-6">

            {/* Card 2: SAPRO */}
            <div
              ref={(el) => { cardRefs.current[1] = el; }}
              className={`group rounded-[32px] bg-gradient-to-br ${projects[1].accent} border border-slate-200/80 ${projects[1].borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={projects[1].image!}
                  alt={projects[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-xs font-extrabold text-[#6c47ff] font-mono shadow">
                  {projects[1].id}
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${projects[1].typeColor}`}>
                  {projects[1].type}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#6c47ff] transition-colors">{projects[1].title}</h3>
                  <p className="text-xs font-semibold text-lime-700 font-mono">{projects[1].subtitle}</p>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{projects[1].desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projects[1].tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200/80">
                  <span className="text-xs text-slate-400 font-mono">{projects[1].year}</span>
                  <span className="text-xs font-bold text-lime-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details ➔
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Emerging Scholars Research */}
            <div
              ref={(el) => { cardRefs.current[2] = el; }}
              className={`group rounded-[32px] bg-gradient-to-br ${projects[2].accent} border border-slate-200/80 ${projects[2].borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-6 space-y-4`}
            >
              {/* Decorative Icon */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#6c47ff]/10 border border-purple-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🔬
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${projects[2].typeColor}`}>
                    {projects[2].type}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-xs font-extrabold text-[#6c47ff] font-mono shadow">
                    {projects[2].id}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#6c47ff] transition-colors leading-tight">
                  {projects[2].title}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 font-mono">{projects[2].subtitle}</p>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">{projects[2].desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {projects[2].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                <span className="text-xs text-slate-400 font-mono">{projects[2].year}</span>
                <span className="text-xs font-bold text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Details ➔
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            Interested in a collaboration or research opportunity?
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#a3e635] text-slate-950 font-bold text-xs shadow-md hover:bg-lime-300 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>Get In Touch</span>
            <span className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
              ➔
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
