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
