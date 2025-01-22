import React, { useState, useEffect } from "react";
import { logos } from "../../../data";

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative pb-2 max-w-sm mb-40 mx-1 bg-[rgba(0,109,119,0.8)] rounded-lg">
        <h1 className="text-center p-4 text-4xl font-bold text-[#06d6a0] font-Amatic-SC">
          Tech Skills:
        </h1>
        <div className="flex justify-center items-center px-4 pb-2">
          <img
            key={currentIndex}
            src={logos[currentIndex].link}
            alt={`Logo ${logos[currentIndex].id}`}
            className="h-32 w-40"
          />
        </div>
      </div>
    </div>
  );
}
