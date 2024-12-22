"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Definir los tipos para nuestro contexto
interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Componente proveedor que envuelve tu aplicación
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Estado para el idioma
  const [locale, setLocale] = useState("en");

  // Cargar el idioma guardado (si existe) desde localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  // Cambiar el idioma y guardarlo en localStorage
  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale); // Guardar el idioma en localStorage
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook para usar el contexto en otros componentes
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
