"use client";

import useTranslations from "@/components/HoockTraslate/hookTraslate";

export default function AboutMe() {
  const translations = useTranslations("about");

  return (
    <div className="mx-5 bg-[rgba(0,109,119,0.8)] mt-10 rounded-lg shadow-md overflow-hidden mb-80 px-4 py-4">
      {/* Contenedor con margen a los lados */}
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Agregado px-4 para el margen lateral en pantallas grandes */}
        <p className="text-4xl sm:text-3xl md:text-3xl leading-snug sm:leading-snug md:leading-snug text-[#06d6a0] font-bold font-Amatic-SC break-words">
          {translations?.description ||
            "I am a professional in technology and software development with a unique background that encompasses both security and criminal intelligence as well as programming. I began my career as a Systems Analyst and Software Developer, where I gained solid foundations in system logic and design. Later, I developed my skills in the field of security, specializing in criminal intelligence, which gave me an analytical perspective and a problem-solving approach to complex issues. Today, I work as a Full Stack Web Developer, with a specialization in Backend."}

          {/* Tecnologías con hover y escala */}
          <span className="block mt-2">
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
              React
            </span>
            .
          </span>

          {translations?.final ||
            "My focus is on developing efficient and scalable solutions, leveraging both backend logic and frontend user experience to create comprehensive and high-impact applications. I am motivated to continue learning and tackling new challenges in the world of technology. I am always open to opportunities that allow me to grow professionally and contribute my skills to innovative projects. I am always open to new opportunities and collaborations."}
        </p>
      </div>
    </div>
  );
}
