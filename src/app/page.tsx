"use client";

import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative">
      {/* GSAP Preloader Overlay */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Portfolio Content */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
