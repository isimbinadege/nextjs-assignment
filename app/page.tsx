"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center pt-4 ">
      <h1 className="text-6xl italic font-bold mb-4 text-rose-700">Welcome to MyApp </h1>
      <p className="text-lg text-rose-900 ">Current Time </p>
      <p className="text-2xl font-semibold mt-2 text-rose-900">{time.toLocaleTimeString()}</p>
    </div>
  );
}
