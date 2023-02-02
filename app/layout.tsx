"use client"

import { Poppins } from "@next/font/google";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Navbar from "@/components/molecules/Navbar";
import "./globals.css";
import { cn } from "@/helpers";
import { useEffect } from "react";

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

  const translateX = useTransform(x, [0, 1000], [-200, 700])
  const translateY = useTransform(y, [0, 1000], [-200, 700])

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.pageX);
    y.set(e.pageY);
  };

  return (
    <html lang="en">
      <head />
      <body
        className={cn([
          "text-slate-900 bg-slate-900 relative",
          poppins.className,
        ])}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="z-0 absolute bg-fuchsia-700 w-[40vw] h-[50vh] blur-[100px]"
          style={{
            translateX,
            translateY
          }}
        />
        <motion.div
          className="z-0 absolute bg-indigo-700 w-[40vw] h-[50vh] blur-[100px] left-[400px]"
          style={{
            translateX,
            translateY
          }}
        />
        <div className="relative z-10 max-w-6xl px-8 py-4 mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
