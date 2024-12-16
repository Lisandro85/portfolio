import { Github, Linkedin, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[rgba(0,109,119,0.8)] p-4 w-full bg-custom-footer mt-auto">
      <div className="footer__copy text-center">
        {/* Links de redes sociales */}
        <div className="mt-4 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/lisandro-bedotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#52b69a] mx-4 hover:text-blue-500 text-3xl transition duration-300"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Lisandro85"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#52b69a] mx-4 hover:text-black text-3xl transition duration-300"
          >
            <Github />
          </a>
          <a
            href="mailto:lisandrobedotti@hotmail.com"
            className="text-[#52b69a] mx-4 text-5xl hover:text-red-600 transition-colors duration-300"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
