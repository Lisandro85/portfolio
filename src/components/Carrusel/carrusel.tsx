import React, { useState, useEffect } from "react";
import { logos } from "../../../data";
import useTranslations from "../HoockTraslate/hookTraslate";

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translations = useTranslations("home");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center p-5 mb-50">
      <div className="relative pb-2 w-96 mb-40  bg-[rgba(0,109,119,0.8)] rounded-lg">
        <h1 className="text-center p-4 text-4xl font-bold text-[#06d6a0] font-Amatic-SC">
          {translations.skills}
        </h1>
        <div className="flex justify-center items-center  pb-2">
          <img
            key={currentIndex}
            src={logos[currentIndex].link}
            alt={`Logo ${logos[currentIndex].id}`}
            className="h-32 w-46"
          />
        </div>
      </div>
    </div>
  );
}
