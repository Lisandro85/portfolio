import React from "react";
import { ProjectCardProps } from "../interfaces/interfaces";

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
    <div className="w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt="Video Preview"
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <h3 className="text-4xl font-bold text-[#3ae8d4] mb-2 font-Amatic-SC">
          {translations.title || title}
        </h3>
        <p className="text-2xl text-[#52efc2] mb-4 font-Amatic-SC font-bold">
          <span className="font-bold text-[#3ae8d4]">Technologies:</span>{" "}
          {translations.technologies || technologies} <br />
          <span className="font-bold text-[#3ae8d4]">Features:</span>{" "}
          {translations.features || features}
        </p>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-[#3ae8d4] hover:text-[#76c893] transition-colors duration-300 font-Amatic-SC"
        >
          {translations.seeRepository || "See Repository"}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
