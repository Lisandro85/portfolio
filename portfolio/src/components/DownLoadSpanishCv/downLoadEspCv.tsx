"use client";
import React from "react";
import Flag from "react-world-flags";
import Swal from "sweetalert2";

const DownloadEspCVButton: React.FC = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      html: `<p class="font-Amatic-SC">Do you want to download the English CV?</p>`,
      color: "#06d6a0",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, download",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "bg-[#52b69a] text-white text-xl py-1 px-3 rounded",
        cancelButton: "bg-[#d9534f] text-white text-xl py-1 px-3 rounded",
        popup:
          " text-2xl bg-slate-800 bg-opacity-80 text-white font-Amatic-SC max-w-md",
        title: "text-3xl font-Amatic-SC",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "/CVLisandroBedottiEsp.pdf";
        link.download = "CVLisandroBedottiEsp.pdf";
        link.click();
      }
    });
  };

  return (
    <a
      href="/CVLisandroBedottiEsp.pdf"
      download="CVLisandroBedottiEsp.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleDownload}
      className="bg-[#52b69a] text-emerald-900 py-1 px-4 sm:py-1 sm:px-4 text-lg sm:text-base md:text-lg font-bold font-Amatic-SC rounded-md hover:bg-[#76c893] transition duration-300 text-center inline-flex items-center justify-center"
    >
      <Flag code="ES" width={30} height={20} className="mr-2" />
      Descargar CV
    </a>
  );
};

export default DownloadEspCVButton;
