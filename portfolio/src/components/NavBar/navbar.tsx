"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[rgba(0,109,119,0.8)] p-2 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo o Título */}
        <div className="text-[#06d6a0] text-4xl font-bold font-Amatic-SC ">
          <Link href="/" className="text-[#06d6a0]  text-4xl font-Amatic-SC ">
            Backend dev &lt;&gt;
          </Link>
        </div>

        {/* Botón hamburguesa (solo visible en móviles) */}
        <button
          className="sm:hidden text-[#52b69a] focus:outline-none z-30"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#52b69a] my-1 transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#52b69a] my-1 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#52b69a] my-1 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
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
            className={`block sm:inline-block text-[#06d6a0] text-4xl font-bold  font-Amatic-SC  ${
              isActive("/home") ? "text-[#06d6a0] text-glow" : "hover:text-glow"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-4xl font-bold font-Amatic-SC  ${
              isActive("/about")
                ? "text-[#06d6a0] text-glow"
                : "hover:text-glow"
            }`}
          >
            About Me
          </Link>
          <Link
            href="/projects"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-4xl font-bold font-Amatic-SC  ${
              isActive("/projects")
                ? "text-[#06d6a0] text-glow"
                : "hover:text-glow"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`block sm:inline-block text-[#06d6a0] text-4xl font-bold font-Amatic-SC  ${
              isActive("/contact")
                ? "text-[#06d6a0] text-glow"
                : "hover:text-glow"
            }`}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
