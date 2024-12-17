import React from "react";
import Flag from "react-world-flags";

const DownloadEngCVButton: React.FC = () => {
  return (
    <a
      href="/CVLisandroBedottiEng.pdf"
      download="CVLisandroBedottiEng.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#52b69a] text-white py-2 px-6 sm:py-2 sm:px-6 text-xs sm:text-sm md:text-base rounded-md hover:bg-[#76c893] transition duration-300 font-Exo-2 text-center inline-flex items-center justify-center"
    >
      <Flag code="GB" width={30} height={20} className="mr-2" />
      Download CV
    </a>
  );
};

export default DownloadEngCVButton;
