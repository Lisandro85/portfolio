import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="mx-5 bg-[rgba(0,109,119,0.8)]  rounded-lg shadow-md mt-10 py-10 px-4 mb-96">
      {/* Título */}
      <h1 className="text-6xl md:text-5xl font-bold text-[#06d6a0]  font-Amatic-SC  text-center">
        Contact Me
      </h1>

      {/* Descripción */}
      <p className="text-lg md:text-4xl mt-4 text-[#06d6a0] font-bold font-Amatic-SC  text-center leading-relaxed">
        Feel free to reach out to me via LinkedIn, GitHub, or email. I&apos;m
        always open to new opportunities and collaborations!
      </p>

      {/* Enlaces con íconos */}
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/lisandro-bedotti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52efc2] text-4xl hover:text-blue-600 transform transition-all duration-300 hover:scale-125"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/Lisandro85"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52efc2] text-4xl hover:text-black transform transition-all duration-300 hover:scale-125"
        >
          <Github />
        </a>
        <a
          href="mailto:lisandrobedotti@hotmail.com"
          className="text-[#52efc2] text-4xl hover:text-red-600 transform transition-all duration-300 hover:scale-125"
        >
          <Mail />
        </a>
      </div>
    </div>
  );
}
