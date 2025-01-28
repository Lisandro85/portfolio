/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { itemsNavbar } from "../../../data";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import MotionTransition from "../Transition-components/transition-components";
import useTranslations from "../HoockTraslate/hookTraslate";

const Navbar = () => {
  const router = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLanguage();
  const translations = useTranslations("navBar");

  const handleLanguageChange = (language: "en" | "es" | "it") => {
    setLocale(language);
    setIsLangMenuOpen(false);
  };

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
        <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6 px-4 py-1 rounded-full bg-bgConteiner backdrop-blur-sm flex-wrap">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-2 py-1 md:px-3 md:py-2 lg:px-2 lg:py-1 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link
                className="flex flex-col justify-center items-center font-bold text-lg md:text-lg lg:text-xl xl:text-2xl text-[#06d6a0] font-Amatic-SC"
                href={item.link}
              >
                {item.icon}{" "}
                <span className="text-xs md:text-sm lg:text-base xl:text-lg truncate max-w-[150px] sm:max-w-full">
                  {translations[item.titleKey] || item.titleKey}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </nav>

      {/* Menú de idiomas al final de la navbar */}
      <div className="absolute right-4 top-1 mt-0 sm:right-2 sm:top-1 flex flex-col justify-center">
        <div className="relative" ref={langMenuRef}>
          <button
            className="text-[#06d6a0] text-2xl sm:text-3xl font-bold font-Amatic-SC p-2 rounded-full bg-[#006d77cc] hover:bg-[#006d77cc] transition-colors"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <Globe size={25} color="#06d6a0" />
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
