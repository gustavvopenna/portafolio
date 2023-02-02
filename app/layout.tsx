import { Poppins } from "@next/font/google";

import Navbar from "@/components/molecules/Navbar";
import "./globals.css";
import { cn } from "@/helpers";

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
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={cn([
          "max-w-6xl px-8 py-4 mx-auto text-slate-900 bg-slate-700",
          poppins.className,
        ])}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
