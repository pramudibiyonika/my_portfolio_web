"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "01",
    title: "Cognitive-Aware Learning Analytics",
    subtitle: "LLMs & Knowledge Tracing Framework",
    type: "Research Project",
    typeColor: "bg-purple-100 text-[#6c47ff]",
    desc: "Developing an AI-powered learning analytics framework integrating Large Language Models (LLMs) with Knowledge Tracing (KT) to predict student performance and generate explainable learner insights.",
    image: "/cognitive_thumb.jpg",
    tags: ["Python", "PyTorch", "TensorFlow", "LLMs", "Scikit-learn", "Jupyter"],
    year: "2026 (Ongoing)",
    accent: "bg-white",
    borderAccent: "hover:border-[#6c47ff]/40",
    link: "/projects/cognitive-analytics",
  },
  {
    id: "02",
    title: "Sinhala Sentiment Analysis",
    subtitle: "NLP & Transformer Models",
    type: "NLP & Deep Learning",
    typeColor: "bg-indigo-100 text-indigo-700",
    desc: "Developing a deep learning-based sentiment analysis system to classify Sinhala social media content by comparing sequential neural networks and transformer-based models (BERT, XLM-RoBERTa).",
    image: "/sentiment_thumb.jpg",
    tags: ["Python", "TensorFlow", "BERT", "XLM-RoBERTa", "Scikit-learn", "Pandas"],
    year: "2026 (Ongoing)",
    accent: "bg-white",
    borderAccent: "hover:border-indigo-400/40",
    link: "/projects/sinhala-sentiment",
  },
  {
    id: "03",
    title: "SAPRO Dashboard",
    subtitle: "Greenhouse Management System",
    type: "Team Project",
    typeColor: "bg-lime-100 text-lime-800",
    desc: "Developed a web-based dashboard to monitor greenhouse conditions, manage plant data, and support smart greenhouse operations with real-time visualization and analytics.",
    image: "/sapro_thumb.jpg",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "MySQL", "Recharts"],
    year: "2026",
    accent: "bg-white",
    borderAccent: "hover:border-lime-400/40",
    link: "/projects/sapro",
  },
  {
    id: "04",
    title: "MediVibe",
    subtitle: "Pharmacy Management System",
    type: "Team Project",
    typeColor: "bg-purple-100 text-[#6c47ff]",
    desc: "Developed a pharmacy management system to streamline medicine inventory, prescription management, customer records, and billing through an intuitive, user-friendly interface.",
    image: "/medicare_thumb.jpg",
    tags: ["Django 5.1", "Python", "React.js", "Node.js", "SQLite", "Bootstrap"],
    year: "2025",
    accent: "bg-white",
    borderAccent: "hover:border-[#6c47ff]/40",
    link: "/projects/medivibe",
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const validCards = cardRefs.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-6 bg-[#f8fafc] border-b border-slate-200/80 relative"
    >
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
              <span className="text-[#6c47ff]">&</span> Research
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium">
              AI research frameworks, deep learning models, smart IoT dashboards, and fullstack web applications.
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

        {/* 2x2 Responsive Grid Layout for 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[idx] = el; }}
            >
              <Link
                href={project.link}
                className={`group rounded-[32px] bg-white border border-slate-200/90 ${project.borderAccent} shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full block cursor-pointer`}
              >
                <div>
                  {/* Project Image Header */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-900">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white font-bold text-lg">
                        {project.title}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 border border-slate-200 flex items-center justify-center text-xs font-extrabold text-[#6c47ff] font-mono shadow-md">
                      {project.id}
                    </div>
                    
                    {/* Type Badge */}
                    <div className={`absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-sm ${project.typeColor}`}>
                      {project.type}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 space-y-4 text-left">
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#6c47ff] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-bold text-[#6c47ff] font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tech Badges & Year */}
                <div className="px-8 pb-8 pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/60 text-slate-800 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      {project.year}
                    </span>
                    <span className="text-xs font-bold text-[#6c47ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Project Details ➔
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Collaboration CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 text-center">
          <p className="text-slate-600 text-sm font-medium">
            Interested in a research collaboration or development project?
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
