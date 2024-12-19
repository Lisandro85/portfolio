"use client"; // Asegúrate de agregar esta línea al principio

import { useLanguage } from "@/context/LanguageContext"; // Importar el contexto de idioma
import { useEffect, useState } from "react";

const useTranslations = (page: string) => {
  const { locale } = useLanguage(); // Obtener el idioma actual
  const [translations, setTranslations] = useState<{ [key: string]: string }>(
    {}
  );

  // Cargar las traducciones del archivo correspondiente
  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/locale/${locale}.json`);
      const data = await response.json();
      setTranslations(data[page]); // Cargar las traducciones de la página específica
    };

    loadTranslations();
  }, [locale, page]); // Dependiendo del idioma y la página

  return translations;
};

export default useTranslations;
