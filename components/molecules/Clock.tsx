"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("es-MX", {
        hourCycle: "h24",
      });
      setTime(currentTime);
      return () => clearInterval(timer);
    }, 1000);
  }, []);

  return <div className="font-bold tabular-nums">{time}</div>;
}
