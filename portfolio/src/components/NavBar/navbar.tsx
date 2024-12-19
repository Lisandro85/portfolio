"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import useTranslations from "../HoockTraslate/hookTraslate";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const translations = useTranslations("navBar");

  const { locale, setLocale } = useLanguage();

  const isActive = (path: string) => pathname.startsWith(path);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (language: "en" | "es" | "it") => {
    setLocale(language);
    setIsLangMenuOpen(false);
  };

  const languageNames: { [key in "en" | "es" | "it"]: string } = {
    en: "English",
    es: "Español",
    it: "Italiano",
  };

  // Cerrar el menu de idiomas cuando se hace clic fuera
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
    <nav className="bg-[rgba(0,109,119,0.8)] p-2 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo o Título */}
        <div className="flex items-center space-x-4">
          <div className="text-[#06d6a0] text-4xl font-bold font-Amatic-SC">
            <Link href="/" className="text-[#06d6a0] text-4xl font-Amatic-SC">
              Backend dev &lt;&gt;
            </Link>
          </div>

          {/* Dropdown de idioma */}
          <div className="relative" ref={langMenuRef}>
            <button
              className="text-[#06d6a0] text-2xl sm:text-3xl font-bold font-Amatic-SC"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              {languageNames[locale as "en" | "es" | "it"]}{" "}
              <span className="text-3xl">🌍</span>
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 bg-[rgba(0,0,0,0.7)]  text-[#06d6a0] p-2 mt-2 rounded-md shadow-lg z-50">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block py-2 px-4 hover:bg-[#06d6a0] hover:text-white"
                >
                  {languageNames.en}
                </button>
                <button
                  onClick={() => handleLanguageChange("es")}
                  className="block py-2 px-4 hover:bg-[#06d6a0] hover:text-white"
                >
                  {languageNames.es}
                </button>
                <button
                  onClick={() => handleLanguageChange("it")}
                  className="block py-2 px-4 hover:bg-[#06d6a0] hover:text-white"
                >
                  {languageNames.it}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-[#52b69a] focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className="absolute top-0 right-0 text-[#06d6a0] text-4xl font-bold z-50 cursor-pointer">
              x
            </span>
          ) : (
            <>
              <span
                className={`block w-6 h-0.5 bg-[#06d6a0] my-1 transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#06d6a0] my-1 transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#06d6a0] my-1 transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </>
          )}
        </button>

        {/* Enlaces de navegación */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:space-x-4 text-center fixed inset-0 bg-[rgba(0,0,0,0.7)] sm:bg-transparent sm:relative sm:flex sm:space-x-6 sm:block sm:space-y-0 space-y-4 sm:space-y-0 pt-16 sm:pt-0 sm:static px-4 sm:px-0 z-40`}
        >
          <Link
            href="/home"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-6xl sm:text-2xl md:text-3xl lg:text-3xl font-bold font-Amatic-SC ${
              isActive("/home") ? "text-[#06d6a0] text-glow" : "hover:text-glow"
            }`}
          >
            {translations.home}
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-6xl sm:text-2xl md:text-3xl lg:text-3xl font-bold font-Amatic-SC ${
              isActive("/about")
                ? "text-[#06d6a0] text-glow"
                : "hover:text-glow"
            }`}
          >
            {translations.about}
          </Link>
          <Link
            href="/projects"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-6xl sm:text-2xl md:text-3xl lg:text-3xl font-bold font-Amatic-SC ${
              isActive("/projects")
                ? "text-[#06d6a0] text-glow"
                : "hover:text-glow"
            }`}
          >
            {translations.projects}
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-6xl sm:text-2xl md:text-3xl lg:text-3xl font-bold font-Amatic-SC  ${
              isActive("/contact")
                ? "text-[#06d6a0] text-glow"
                : "hover:text-glow"
            }`}
          >
            {translations.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
