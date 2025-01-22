import { GithubIcon, Linkedin, Mail } from "lucide-react";
import ContactMethod from "./contactMethod";

export default function contactWithCode() {
  return (
    <>
      <div className="flex items-center justify-center w-full  h-screen lg:px-1 p-4  mt-5 sm:mt-4 lg:mt-10">
        <div className="w-full max-w-xl bg-[rgba(0,0,0,0.8)] p-4 1lg:px-8 rounded-lg shadow-xl ">
          <p>
            <span className="text-violet-500">if {""}</span>
            <span className="text-blue-300">
              {"(youCanContactMe)"} {""}
              <span className="text-violet-500">{"{"}</span>
            </span>
          </p>
          <p className="text-violet-500 ml-5 sm:ml-10 md:ml-12 lg:ml-16">
            {"return ("}
          </p>
          <p className="text-gray-400 ml-10 sm:ml-12 md:ml-14 lg:ml-16">
            {"<>"}
          </p>
          <ContactMethod
            icon={<Linkedin />}
            text="Linkedin"
            link="https://www.linkedin.com/in/lisandro-bedotti"
          />
          <ContactMethod
            icon={<GithubIcon />}
            text="Github"
            link="https://github.com/Lisandro85"
          />
          <ContactMethod
            icon={<Mail />}
            text="Mail"
            link="mailto:lisandrobedotti@hotmail.com"
          />
          <p className="text-gray-400 ml-12 sm:ml-14 md:ml-16 lg:ml-20">
            {"/>"}
          </p>
          <p className="text-gray-400 ml-10 sm:ml-12 md:ml-14 lg:ml-16">
            {"</>"}
          </p>
          <p className="text-violet-500 ml-8 sm:ml-10 md:ml-12 lg:ml-14">
            {")"}
          </p>
          <p className="text-violet-500 ml-5 sm:ml-8 md:ml-10 lg:ml-8">{"}"}</p>
        </div>
      </div>
    </>
  );
}
