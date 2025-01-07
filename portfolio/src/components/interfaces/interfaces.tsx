export interface DownloadCVButtonProps {
  flagCode: string;
  cvLink: string;
  translations: {
    title: string;
    message: string;
    confirm: string;
    cancel: string;
  };
  buttonText: string;
}

export interface ProjectCardProps {
  videoUrl: string;
  imageUrl: string;
  title: string;
  technologies: string;
  features: string;
  repositoryUrl: string;
  translations: {
    title?: string;
    technologies?: string;
    features?: string;
    seeRepository?: string;
  };
}
