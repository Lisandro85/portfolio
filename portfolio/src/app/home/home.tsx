"use client";

import DownloadCVButton from "@/components/DownLoadSpanishCv/downLoadEspCv";
import DownloadItaCVButton from "@/components/DownLoadItalianCv/downLoadItaCv";
import Image from "next/image";
import DownloadEngCVButton from "@/components/DownLoadEngCv/downLoadEngCv";
import useTranslations from "@/components/HoockTraslate/hookTraslate";
import { useLanguage } from "@/context/LanguageContext";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const translations = useTranslations("home");
  const { locale } = useLanguage();

  return (
    <div className="flex items-center justify-center mt-10 mb-80 px-4">
      <div className="w-full mx-1 bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-8">
          {/* Imagen */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden group mx-auto md:mx-0 flex-shrink-0">
            <Image
              className="w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
              src="/assets/perfilFoto.jpg"
              alt="Profile Image"
              width={500}
              height={500}
            />
          </div>

          {/* Texto al costado de la imagen */}
          <div className="text-center md:text-left flex-1 min-w-[300px]">
            <h2 className="text-5xl sm:text-5xl md:text-8xl font-bold text-[#06d6a0] font-Amatic-SC">
              <TypeAnimation
                sequence={[
                  "Lisandro Bedotti...",
                  1000,
                  "...Backend Developer",
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="font bold text-primary font-Amatic-SC text-5xl md:text-7xl"
              />
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl mt-2 text-primary font-Amatic-SC leading-snug sm:leading-snug md:leading-snug">
              {translations.description ||
                "Hello! I'm a software developer of dynamic web solutions, with a strong focus on backend technologies."}
            </p>

            {/* Botones de descarga */}
            <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-4">
              {locale === "es" && <DownloadCVButton />}
              {locale === "it" && <DownloadItaCVButton />}
              {locale === "en" && <DownloadEngCVButton />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
