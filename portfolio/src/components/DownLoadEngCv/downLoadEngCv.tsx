"use client";
import React from "react";
import Flag from "react-world-flags";
import Swal from "sweetalert2";

const DownloadEngCVButton: React.FC = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to download the English CV?",
      color: "#06d6a0",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, download",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "bg-[#52b69a] text-white",
        cancelButton: "bg-[#d9534f] text-white",
        popup: "bg-slate-800 bg-opacity-80 text-white",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "/CVLisandroBedottiEng.pdf";
        link.download = "CVLisandroBedottiEng.pdf";
        link.click();
      }
    });
  };

  return (
    <a
      href="/CVLisandroBedottiEng.pdf"
      download="CVLisandroBedottiEng.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleDownload}
      className="bg-[#52b69a] text-white py-2 px-6 sm:py-2 sm:px-6 text-xs sm:text-sm md:text-base rounded-md hover:bg-[#76c893] transition duration-300 font-Exo-2 text-center inline-flex items-center justify-center"
    >
      <Flag code="GB" width={30} height={20} className="mr-2" />
      Download CV
    </a>
  );
};

export default DownloadEngCVButton;
