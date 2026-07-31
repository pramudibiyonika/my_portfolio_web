"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

      tl.from(titleRef.current, { y: 35, opacity: 0, duration: 0.8 })
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(heroCardRef.current, { scale: 0.88, opacity: 0, duration: 0.9, ease: "back.out(1.4)" }, "-=0.4")
        .from(badgeRef.current, { x: -30, opacity: 0, duration: 0.6 }, "-=0.6")
        .from(marqueeRef.current, { opacity: 0, y: 15, duration: 0.5 }, "-=0.4");
    },
    { scope: containerRef }
  );

  const marqueeItems = [
    "Data Science ✦",
    "Machine Learning ✦",
    "Web Development ✦",
    "Data Visualization ✦",
    "SQL & Databases ✦",
    "Power BI Analytics ✦",
    "Python Engineering ✦",
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-28 pb-0 bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Grid Pattern (Matching Inspiration Image 1) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Top Header & Photo Centerpiece */}
      <div className="max-w-5xl mx-auto px-6 text-center z-10 space-y-6 flex-1 flex flex-col justify-center items-center">
        {/* Main Title (Exact Layout from Reference Image 1) */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
        >
          I&apos;m{" "}
          <span className="text-[#6c47ff]">Pramudi,</span>
          <br />
          <span>Data Scientist & Developer</span>
        </h1>

        {/* Subtitle / Field Tag */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-xl font-medium text-slate-600 max-w-xl mx-auto"
        >
          Undergraduate at SLT Research University • BSc (Hons) in Data Science (2027)
        </p>

        {/* Hero Photo Centerpiece with Purple Backdrop Shape & Floating Pills (Exact Match to Image 1) */}
        <div className="relative w-full max-w-md my-4 pt-2 pb-10 flex flex-col items-center">
          {/* Purple Background Shape Shield behind Cutout Portrait */}
          <div
            ref={heroCardRef}
            className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-[36px] bg-[#6c47ff] p-2 shadow-2xl shadow-purple-500/20 flex items-center justify-center group"
          >
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-slate-900">
              <Image
                src="/pramudi_female_hero.jpg"
                alt="Pramudi Biyonika Data Scientist"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlapping Floating Action Pills (Exact match to Reference 1) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 w-max">
              {/* Portfolio Pill with Purple BG & Lime Arrow Circle */}
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-[#6c47ff] text-white font-bold text-xs shadow-xl hover:bg-[#5b39ee] transition-all flex items-center gap-2"
              >
                <span>Portfolio</span>
                <span className="w-6 h-6 rounded-full bg-[#a3e635] text-slate-950 flex items-center justify-center text-xs font-bold">
                  ➔
                </span>
              </a>

              {/* Hire Me / Contact Me Pill (White background with thin border) */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-xs shadow-md border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Left Floating Trust Badge (Exact match to Reference 1) */}
          <div
            ref={badgeRef}
            className="absolute left-2 sm:left-4 top-16 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200 shadow-xl backdrop-blur-md z-20"
          >
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#6c47ff] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                DS
              </div>
              <div className="w-7 h-7 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                ML
              </div>
              <div className="w-7 h-7 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                JS
              </div>
            </div>
            <div className="text-left">
              <p className="text-xs font-extrabold text-slate-900">10+ Projects</p>
              <p className="text-[10px] text-slate-500">Research & Dev</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vibrant Lime Green Marquee Banner (Exact Match to Reference Image 1) */}
      <div
        ref={marqueeRef}
        className="w-full py-3.5 bg-[#a3e635] text-slate-950 font-extrabold overflow-hidden border-y border-lime-400 shadow-md"
      >
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-xs sm:text-sm font-mono uppercase tracking-wider">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="flex items-center gap-4">
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
