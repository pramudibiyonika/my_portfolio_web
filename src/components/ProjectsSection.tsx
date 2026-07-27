"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projectList = [
  {
    title: "MediCare",
    subtitle: "Pharmacy Management System",
    type: "Team Project",
    desc: "A comprehensive management system designed for pharmacies to streamline inventory tracking, prescription processing, sales analytics, and customer records.",
    tags: ["Java", "SQL", "Database Design", "System Architecture"],
    gradient: "from-cyan-950/80 via-slate-900 to-slate-950",
    borderColor: "hover:border-cyan-500/50",
    badgeColor: "bg-cyan-950 text-cyan-400 border-cyan-800",
  },
  {
    title: "SAPRO Dashboard",
    subtitle: "Greenhouse Management System",
    type: "Team Project",
    desc: "Interactive analytics dashboard for greenhouse monitoring, environmental data visualization, sensor tracking, and automated reporting.",
    tags: ["Power BI", "Data Analytics", "Dashboard Design", "Python"],
    gradient: "from-indigo-950/80 via-slate-900 to-slate-950",
    borderColor: "hover:border-indigo-500/50",
    badgeColor: "bg-indigo-950 text-indigo-400 border-indigo-800",
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" ref={containerRef} className="py-24 px-6 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Software & Data Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Practical systems and dashboards built during academic and team collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, idx) => (
            <div
              key={project.title}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={`p-8 rounded-3xl bg-gradient-to-b ${project.gradient} border border-slate-800 ${project.borderColor} transition-all duration-300 shadow-2xl flex flex-col justify-between group`}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 text-xs font-mono font-medium rounded-full border ${project.badgeColor}`}>
                    {project.type}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
