"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 px-6 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Contact & Connect
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Available for research opportunities, data analytics projects, and software engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-6 p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 text-xl">
                ✉️
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">EMAIL</p>
                <a href="mailto:cit-23-02-0345@sltc.ac.lk" className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors">
                  cit-23-02-0345@sltc.ac.lk
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400 text-xl">
                📞
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">PHONE</p>
                <a href="tel:0777637316" className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors">
                  0777637316
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-purple-400 text-xl">
                📍
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">LOCATION</p>
                <p className="text-slate-200 font-semibold">
                  197/A2, Wewa Para, Deheragoda, Ellawala
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. Pramudi will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Pramudi, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
