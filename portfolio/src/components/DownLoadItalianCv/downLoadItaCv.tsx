import React from "react";

const DownloadItaCVButton: React.FC = () => {
  return (
    <a
      href="/CVLisandroBedottiIta.pdf"
      download="CVLisandroBedottiIta.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#52b69a] text-[white] py-2 px-6 rounded-md hover:bg-[#76c893] transition duration-300 font-Exo-2 "
    >
      Download Italian CV
    </a>
  );
};

export default DownloadItaCVButton;
