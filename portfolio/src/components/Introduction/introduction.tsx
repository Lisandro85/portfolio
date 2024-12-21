"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="w-full mx-1 bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md overflow-hidden mb-80">
      <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-8">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden group mx-auto md:mx-0 flex-shrink-0 mb-20">
          <Image
            src="/assets/perfilFoto.jpg"
            width={500}
            height={500}
            alt="ProfiilePic"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md">
          <h1
            className="mb-5 text-2xl leading-tight text-center md-text-left 
          md:text-4xl md:mb-10"
          >
            Lisandro Bedotti
            <TypeAnimation
              sequence={[
                "Hello! I'm a software developer of dynamic web solution,swith a strong focus on backend technologies.",
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="font bold text-[#06d6a0] font-Amatic-SC text-3xl md:text-5xl"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
