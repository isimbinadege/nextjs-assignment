"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-10 ">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyApp 🎉</h1>
      <p className="text-lg">Current Time </p>
      <p className="text-2xl font-semibold mt-2">{time.toLocaleTimeString()}</p>
    </div>
  );
}
