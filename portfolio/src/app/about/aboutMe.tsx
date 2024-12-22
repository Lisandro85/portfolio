"use client";

import Avatar from "@/components/Avatar/avatar";
import useTranslations from "@/components/HoockTraslate/hookTraslate";

export default function AboutMe() {
  const translations = useTranslations("about");

  return (
    <div className="mx-5 bg-[rgba(0,109,119,0.8)] mt-10 rounded-lg shadow-md overflow-hidden mb-80 px-4 py-4">
      {/* Contenedor con margen a los lados */}
      <div className="max-w-4xl mx-auto text-left px-4">
        {/* Agregado px-4 para el margen lateral en pantallas grandes */}
        <p className="text-4xl sm:text-3xl md:text-3xl leading-snug sm:leading-snug md:leading-snug text-[#06d6a0] font-bold font-Amatic-SC break-words text-center sm:text-center md:text-center">
          {translations?.description ||
            "I am a professional in technology and software development with a unique background that encompasses both security and criminal intelligence as well as programming. I began my career as a Systems Analyst and Software Developer, where I gained solid foundations in system logic and design. Later, I developed my skills in the field of security, specializing in criminal intelligence, which gave me an analytical perspective and a problem-solving approach to complex issues. Today, I work as a Full Stack Web Developer, with a specialization in Backend."}
        </p>

        <div className="flex flex-col md:flex-row items-start justify-start p-6 gap-8">
          {/* Imagen flotante en pantallas grandes y centrada en pantallas pequeñas */}
          <div className="w-32 h-32 rounded-full mb-4 md:mb-0 md:float-left mr-8">
            <Avatar />
          </div>

          {/* El texto continúa alrededor de la imagen sin superponerse */}
          <p className=" sm:mb-2 mt-10 text-4xl sm:text-3xl md:text-3xl leading-snug sm:leading-snug md:leading-snug text-[#06d6a0] font-bold font-Amatic-SC break-words md:ml-10 text-center sm:text-center md:text-center">
            {translations?.technologies ||
              "I have experience in technologies such as  "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              Node.js,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              JavaScript,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              TypeScript,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              Express,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              NestJs,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              TypeORM,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              Mongoose,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              MongoDB,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              PostgreSQL,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              Docker,
            </span>{" "}
            <span className="text-[#83c5be] inline-block transform transition-all duration-300 hover:scale-110">
              React.
            </span>
          </p>
        </div>

        {/* Texto final con justificación o centrado */}
        <p className="mt-2 sm:mt-10 text-4xl sm:text-3xl md:text-3xl leading-snug sm:leading-snug md:leading-snug text-[#06d6a0] font-bold font-Amatic-SC break-words  text-center sm:text-center md:text-center">
          {translations?.final ||
            "My focus is on developing efficient and scalable solutions, leveraging both backend logic and frontend user experience to create comprehensive and high-impact applications."}
        </p>
      </div>
    </div>
  );
}
