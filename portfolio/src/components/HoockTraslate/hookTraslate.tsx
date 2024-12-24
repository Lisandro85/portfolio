/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

const useTranslations = (page: string) => {
  const { locale } = useLanguage();
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/locale/${locale}.json`);
      const data = await response.json();
      setTranslations(data[page]);
    };

    loadTranslations();
  }, [locale, page]);

  return translations;
};

export default useTranslations;
