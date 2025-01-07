"use client";

import useTranslations from "@/components/HoockTraslate/hookTraslate";
import ProjectCard from "@/components/ProjectCard/projectCard";

export default function Projects() {
  const translations = useTranslations("projects");

  if (!translations) {
    return <div>Loading...</div>;
  }

  const projects = Object.keys(translations)
    .filter((key) => key.startsWith("project"))
    .map((key) => ({
      ...translations[key],
      repositoryLabel: translations.seeRepository || "See Repository",
    }));

  return (
    <div className="min-h-screen flex flex-col bg-slate-800 bg-transparent mb-80 mt-10">
      <div className="mt-6 flex-grow px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              videoUrl={project.videoUrl}
              imageUrl={project.imageUrl}
              title={project.title}
              technologies={project.technologies}
              features={project.features}
              repositoryUrl={project.repositoryUrl}
              translations={{
                title: project.title,
                technologies: project.technologies,
                features: project.features,
                seeRepository: project.repositoryLabel,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
