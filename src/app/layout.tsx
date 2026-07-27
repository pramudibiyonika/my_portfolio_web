import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fullstack Developer Portfolio | Next.js, Tailwind CSS & GSAP",
  description: "High-performance fullstack web application built with Next.js App Router, Tailwind CSS, and GSAP animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
