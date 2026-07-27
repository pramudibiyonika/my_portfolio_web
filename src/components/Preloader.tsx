"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);

  const [counter, setCounter] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Animate tags/name initial reveal
      tl.fromTo(
        nameRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          tagRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );

      // Animate numerical counter & progress bar fill
      const counterObj = { value: 0 };

      tl.to(
        counterObj,
        {
          value: 100,
          duration: 2.2,
          ease: "power2.inOut",
          onUpdate: () => {
            const currentVal = Math.floor(counterObj.value);
            setCounter(currentVal);
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${currentVal}%`;
            }
          },
        },
        "-=0.2"
      );

      // Transition exit sequence (split curtain reveal)
      tl.to([nameRef.current, tagRef.current, counterRef.current?.parentElement], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.in",
      })
        .to(curtainLeftRef.current, {
          xPercent: -100,
          duration: 1,
          ease: "expo.inOut",
        })
        .to(
          curtainRightRef.current,
          {
            xPercent: 100,
            duration: 1,
            ease: "expo.inOut",
          },
          "<"
        )
        .to(containerRef.current, {
          display: "none",
          duration: 0.1,
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-auto"
    >
      {/* Left Curtain */}
      <div
        ref={curtainLeftRef}
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-slate-950 border-r border-slate-900 z-10"
      />

      {/* Right Curtain */}
      <div
        ref={curtainRightRef}
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-slate-950 border-l border-slate-900 z-10"
      />

      {/* Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-[130px] rounded-full z-20 pointer-events-none" />

      {/* Content Center */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 space-y-6 max-w-lg">
        {/* Subtitle / Field Badge */}
        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
            BSc (Hons) Data Science • SLTC
          </span>
        </div>

        {/* Name Title */}
        <h1
          ref={nameRef}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase"
        >
          Pramudi{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
            Biyonika
          </span>
        </h1>

        {/* Progress Counter & Bar */}
        <div className="w-full max-w-xs space-y-3 pt-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span>LOADING PORTFOLIO</span>
            <span ref={counterRef} className="text-cyan-400 font-bold text-base">
              {counter}%
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full w-0 shadow-lg shadow-cyan-500/50 transition-all duration-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
