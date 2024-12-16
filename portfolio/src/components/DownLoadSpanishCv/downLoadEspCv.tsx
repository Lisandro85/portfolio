import React from "react";

const DownloadEspCVButton: React.FC = () => {
  return (
    <a
      href="/CVLisandroBedottiEsp.pdf"
      download="CVLisandroBedottiEsp.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#52b69a] text-white py-2 px-6 rounded-md hover:bg-[#76c893] transition duration-300 font-Exo-2 " // Clases para estilos (opcional)
    >
      Download Spanish CV
    </a>
  );
};

export default DownloadEspCVButton;
