"use client";
import { DownloadCVButtonProps } from "../interfaces/interfaces";

import React from "react";
import Flag from "react-world-flags";
import Swal from "sweetalert2";

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
  flagCode,
  cvLink,
  translations,
  buttonText,
}) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();

    Swal.fire({
      title: translations.title,
      html: `<p class="font-Amatic-SC">${translations.message}</p>`,
      color: "#06d6a0",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: translations.confirm,
      cancelButtonText: translations.cancel,
      customClass: {
        confirmButton: "bg-[#52b69a] text-white text-xl py-1 px-3 rounded",
        cancelButton: "bg-[#d9534f] text-white text-xl py-1 px-3 rounded",
        popup:
          "text-2xl bg-slate-800 bg-opacity-80 text-white font-Amatic-SC max-w-md",
        title: "text-3xl font-Amatic-SC",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = cvLink;
        link.download = cvLink.split("/").pop() || "";
        link.click();
      }
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-[#52b69a] text-emerald-900 py-1 px-4 sm:py-1 sm:px-4 text-lg sm:text-base md:text-lg font-bold font-Amatic-SC rounded-md hover:bg-[#76c893] transition duration-300 text-center inline-flex items-center justify-center mb-5"
    >
      <Flag code={flagCode} width={30} height={20} className="mr-2" />
      {buttonText}
    </button>
  );
};

export default DownloadCVButton;
