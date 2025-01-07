/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { itemsNavbar } from "../../../data";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import useTranslations from "../HoockTraslate/hookTraslate";
import { Globe } from "lucide-react";
import MotionTransition from "../Transition-components/transition-components";

const Navbar = () => {
  const router = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const translations = useTranslations("navBar");
  const { locale, setLocale } = useLanguage();

  // Función para manejar el cambio de idioma
  const handleLanguageChange = (language: "en" | "es" | "it") => {
    setLocale(language);
    setIsLangMenuOpen(false);
  };

  // Nombres de los idiomas
  const languageNames: { [key in "en" | "es" | "it"]: string } = {
    en: "English",
    es: "Español",
    it: "Italiano",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max top-3 mb-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-bgConteiner backdrop-blur-sm">
          {/* Enlaces de navegación */}
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>

      {/* Menú de idiomas al final de la navbar */}
      <div className="absolute right-4 top-1 mt-0 sm:right-3 sm:top-1">
        {/* Ajuste de alineación con el top de la navbar */}
        <div className="relative" ref={langMenuRef}>
          <button
            className="text-[#06d6a0] text-2xl sm:text-3xl font-bold font-Amatic-SC p-2 rounded-full bg-[#006d77cc] hover:bg-[#006d77cc] transition-colors"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <Globe size={25} color="#06d6a0" />{" "}
            {/* Ícono de Lucide React con tamaño y color */}
          </button>
          {isLangMenuOpen && (
            <div className="absolute right-0 bg-[rgba(0,0,0,0.7)] text-[#06d6a0] p-2 mt-2 rounded-md shadow-lg z-50">
              <button
                onClick={() => handleLanguageChange("en")}
                className="block py-2 px-4 hover:bg-[#06d6a0] hover:text-white text-xl font-bold font-Amatic-SC"
              >
                {languageNames.en}
              </button>
              <button
                onClick={() => handleLanguageChange("es")}
                className="block py-2 px-4 hover:bg-[#06d6a0] hover:text-white font-bold text-xl font-Amatic-SC"
              >
                {languageNames.es}
              </button>
              <button
                onClick={() => handleLanguageChange("it")}
                className="block py-2 px-4 hover:bg-[#06d6a0] hover:text-white font-bold text-xl font-Amatic-SC"
              >
                {languageNames.it}
              </button>
            </div>
          )}
        </div>
      </div>
    </MotionTransition>
  );
};

export default Navbar;
