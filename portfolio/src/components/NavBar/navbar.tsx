"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Función para verificar si la ruta es activa
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[rgba(0,109,119,0.8)] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo o Título */}
        <div className="text-[#52b69a] text-2xl font-bold font-Exo-2">
          <Link
            href="/"
            className={`text-[#52b69a] text-2xl font-genos ${
              isActive("/home") ? "text-[#76c893] text-glow" : "hover:text-glow"
            }`}
          >
            Backend dev &lt;HOME&gt;
          </Link>
        </div>

        {/* Botón hamburguesa (solo visible en móviles) */}
        <button
          className="sm:hidden text-[#52b69a] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"} {/* Ícono hamburguesa */}
        </button>

        {/* Enlaces de navegación */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:space-x-4 text-center`}
        >
          <Link
            href="/about"
            className={`block sm:inline-block text-[#52b69a] text-xl font-Exo-2 ${
              isActive("/about")
                ? "text-[#76c893] text-glow"
                : "hover:text-glow"
            }`}
          >
            AboutMe
          </Link>
          <Link
            href="/projects"
            className={`block sm:inline-block text-[#52b69a] text-xl font-Exo-2 ${
              isActive("/projects")
                ? "text-[#76c893] text-glow"
                : "hover:text-glow"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`block sm:inline-block text-[#52b69a] text-xl font-Exo-2 ${
              isActive("/contact")
                ? "text-[#76c893] text-glow"
                : "hover:text-glow"
            }`}
          >
            ContactMe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
