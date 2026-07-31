import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#6c47ff] flex items-center justify-center font-bold text-white text-xs shadow-md">
            PB
          </div>
          <span className="text-slate-900 font-extrabold tracking-tight">
            Pramudi<span className="text-[#6c47ff]">.</span>
          </span>
        </div>

        <p className="text-center md:text-left text-xs text-slate-500">
          © {new Date().getFullYear()} Pramudi Biyonika. BSc (Hons) in Data Science • SLTC. Built with Next.js, Tailwind CSS & GSAP.
        </p>

        <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
          <Link href="/#hero" className="hover:text-[#6c47ff] transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-[#6c47ff] transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-[#6c47ff] transition-colors">Projects</Link>
          <a href="mailto:cit-23-02-0345@sltc.ac.lk" className="hover:text-[#6c47ff] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
