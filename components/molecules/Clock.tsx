"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("");

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
    <div className="font-bold tabular-nums">
      <time>{time}</time> &nbsp;|&nbsp; mexico city
    </div>
  );
}
