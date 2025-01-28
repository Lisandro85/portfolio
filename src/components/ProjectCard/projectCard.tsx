import React from "react";
import { ProjectCardProps } from "../interfaces/interfaces";
import { Github } from "lucide-react";

const ProjectCard: React.FC<ProjectCardProps> = ({
  videoUrl,
  imageUrl,
  title,
  technologies,
  features,
  repositoryUrl,
  translations,
}) => {
  return (
    <div className=" flex flex-col justify-between gap-2 w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt="Video Preview"
            className="w-full h-48 object-cover rounded-lg "
          />
        </a>
      </div>
      <div>
        <h3 className="text-4xl titulo">{translations.title || title}</h3>
      </div>
      <div className="">
        <p className="text-2xl description">
          <span className="font-bold text-[#3ae8d4]">Technologies:</span>{" "}
          {translations.technologies || technologies}
        </p>
        <p className="text-2xl description">
          <span className="font-bold text-[#3ae8d4]">Features:</span>{" "}
          {translations.features || features}
        </p>
      </div>
      <div>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2 p-2 flex justify-center items-center text-2xl text-center titulo hover:text-[#76c893] transition-colors duration-300 font-Amatic-SC rounded-lg border-2  border-[#3ae8d4]"
        >
          {translations.seeRepository || "See Repository"}
          <Github size={24} color={"black"} className="inline-block ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
