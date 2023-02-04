"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("es-MX", {
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Mexico_City",
      });
      setTime(currentTime);
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <div className="hidden font-bold cursor-default tabular-nums sm:flex">
      <time>{time}</time>
      <div className="group">
        <span>&nbsp;|&nbsp; mexico city</span>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4 ml-1 duration-300 -translate-y-[2px] group-hover:translate-y-0 hidden lg:inline-block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
      </div>
    </div>
  );
}
