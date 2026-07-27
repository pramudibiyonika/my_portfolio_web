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
        duration: 0.9,
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
    <section
      id="contact"
      ref={containerRef}
      className="py-24 px-6 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-200/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-[#6c47ff] uppercase tracking-wider">
            — Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Contact <span className="text-[#6c47ff]">&</span> Connect
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Available for research opportunities, data analytics projects, and software engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details & Academic References */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
                Contact Information
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#6c47ff] text-xl font-bold shadow-xs">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase">
                      EMAIL
                    </p>
                    <a
                      href="mailto:cit-23-02-0345@sltc.ac.lk"
                      className="font-bold text-slate-900 hover:text-[#6c47ff] transition-colors"
                    >
                      cit-23-02-0345@sltc.ac.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-800 text-xl font-bold shadow-xs">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase">
                      PHONE
                    </p>
                    <a
                      href="tel:0777637316"
                      className="font-bold text-slate-900 hover:text-[#6c47ff] transition-colors"
                    >
                      0777637316
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#6c47ff] text-xl font-bold shadow-xs">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase">
                      LOCATION
                    </p>
                    <p className="font-bold text-slate-900">
                      197/A2, Wewa Para, Deheragoda, Ellawala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic References Box */}
            <div className="p-8 rounded-[32px] bg-slate-900 text-white space-y-4 shadow-xl">
              <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider block">
                Academic References
              </span>

              <div className="space-y-4 text-xs">
                <div className="border-b border-slate-800 pb-3">
                  <p className="font-bold text-white text-sm">
                    Ms. Januki Jyarathne
                  </p>
                  <p className="text-slate-400">
                    Assistant Manager • Faculty of Postgraduate & Research
                  </p>
                  <p className="text-purple-300 font-mono mt-1">
                    januki.j@sltc.ac.lk • 0704762367
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white text-sm">
                    Mr. Samantha Wikramasingha
                  </p>
                  <p className="text-slate-400">
                    Lecturer-probationary (SLTC)
                  </p>
                  <p className="text-purple-300 font-mono mt-1">
                    samanthaw@sltc.ac.lk • 072-3455846
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-lime-100 border border-lime-300 text-lime-800 flex items-center justify-center text-3xl mx-auto shadow-md">
                    ✓
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    Message Sent!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Pramudi will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-500 uppercase mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#6c47ff] focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-500 uppercase mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#6c47ff] focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-500 uppercase mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Research Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#6c47ff] focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-500 uppercase mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Pramudi, I would like to discuss a Data Science project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#6c47ff] focus:bg-white transition-all text-sm font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#a3e635] text-slate-950 font-extrabold text-sm shadow-md hover:bg-lime-300 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <span className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] font-bold">
                      ➔
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
