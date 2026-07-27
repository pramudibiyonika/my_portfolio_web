export function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs">
            FS
          </div>
          <span className="text-slate-300 font-semibold">Next.js + Tailwind + GSAP Baseline</span>
        </div>

        <p className="text-center md:text-left">
          © {new Date().getFullYear()} All rights reserved. Built with Next.js App Router, Tailwind CSS & GSAP.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">GitHub</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Documentation</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
