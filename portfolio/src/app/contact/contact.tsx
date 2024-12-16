import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="text-center bg-slate-800 bg-opacity-80  rounded-lg shadow-md  mt-10 py-10 mb-44">
      <h1 className="text-5xl font-bold text-[#06d6a0] font-Exo-2">
        Contact Me
      </h1>
      <p className="text-2xl mt-2 text-[#06d6a0] font-Exo-2">
        Feel free to reach out to me via LinkedIn, GitHub or email. I'm always
        open to new opportunities and collaborations!
      </p>

      {/* Enlaces con los íconos */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/lisandro-bedotti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52b69a] text-4xl hover:text-blue-600 transform transition-all duration-300 hover:scale-125"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/Lisandro85"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52b69a] text-4xl hover:text-black transform transition-all duration-300 hover:scale-125"
        >
          <Github />
        </a>
        <a
          href="mailto:lisandrobedotti@hotmail.com"
          className="text-[#52b69a] text-4xl hover:text-red-600 transform transition-all duration-300 hover:scale-125"
        >
          <Mail />
        </a>
      </div>
    </div>
  );
}
