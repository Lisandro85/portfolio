"use client";

import useTranslations from "@/components/HoockTraslate/hookTraslate";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const translations = useTranslations("contact");

  return (
    <div className="mx-5 bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md py-10 px-4 mb-96 mt-20">
      {/* Título */}
      <h1 className="text-8xl sm:text-6xl md:text-7xl font-bold text-[#06d6a0] font-Amatic-SC text-center">
        {translations?.title || "Contact Me"}
      </h1>

      {/* Descripción */}
      <p className="text-5xl sm:text-3xl md:text-4xl mt-4 text-[#06d6a0] font-bold font-Amatic-SC text-center leading-snug sm:leading-normal md:leading-relaxed">
        {translations?.description ||
          "Feel free to reach out to me via LinkedIn, GitHub, or email. I’m always open to new opportunities and collaborations!"}
      </p>

      {/* Enlaces con íconos */}
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/lisandro-bedotti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52efc2] text-6xl sm:text-7xl hover:text-blue-600 transform transition-all duration-300 hover:scale-125"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/Lisandro85"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52efc2] text-6xl sm:text-7xl hover:text-black transform transition-all duration-300 hover:scale-125"
        >
          <Github />
        </a>
        <a
          href="mailto:lisandrobedotti@hotmail.com"
          className="text-[#52efc2] text-6xl sm:text-7xl hover:text-red-600 transform transition-all duration-300 hover:scale-125"
        >
          <Mail />
        </a>
      </div>
    </div>
  );
}
