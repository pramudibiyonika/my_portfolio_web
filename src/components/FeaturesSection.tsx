"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const features = [
  {
    title: "App Router & Server Actions",
    description: "Leverage Next.js App Router with server-side rendering, streaming, and fullstack API capabilities.",
    badge: "Architecture",
  },
  {
    title: "Tailwind CSS Design Tokens",
    description: "Built-in dark theme, utility classes, and custom glassmorphism styles for scalable visual excellence.",
    badge: "Styling",
  },
  {
    title: "GSAP Animation Timelines",
    description: "Interactive UI micro-animations, scroll triggers, and enter/exit sequence timelines.",
    badge: "Motion",
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(featureCardsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="features" ref={containerRef} className="py-24 px-6 bg-slate-900/50 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Architecture Features
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need for building enterprise-grade fullstack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              ref={(el) => { featureCardsRef.current[idx] = el; }}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  {feat.badge}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
