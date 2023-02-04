"use client";

import { Poppins } from "@next/font/google";
import { useMotionValue } from "framer-motion";

import { AnalyticsWrapper } from "@/components/sections/Analytics"
import Navbar from "@/components/molecules/Navbar";
import Highlights from "@/components/molecules/Highlights";
import { cn } from "@/helpers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.pageX);
    y.set(e.pageY);
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body
        className={cn([
          "text-slate-900 bg-black/20 relative cursor-default mb-20",
          poppins.className,
        ])}
        onMouseMove={handleMouseMove}
      >
        <Highlights x={x} y={y} />
        <div className="relative z-10 max-w-6xl px-4 py-4 mx-auto sm:px-8">
          <Navbar />
          {children}
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  );
}
