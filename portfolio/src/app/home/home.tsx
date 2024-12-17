import DownloadCVButton from "@/components/DownLoadSpanishCv/downLoadEspCv";
import DownloadItaCVButton from "@/components/DownLoadItalianCv/downLoadItaCv";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-10 mb-80 px-4">
      {/* Contenedor principal con margen de 5px a la izquierda y derecha */}
      <div className="w-full mx-1 bg-slate-800 bg-opacity-80 rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-8">
          {/* Imagen */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden group mx-auto md:mx-0">
            <Image
              className="w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
              src="/assets/perfilFoto.jpg"
              alt="Profile Image"
              width={500} // Añade el valor de ancho (en píxeles)
              height={500} // Añade el valor de altura (en píxeles)
            />
          </div>
          {/* Texto al costado de la imagen */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-[#06d6a0] font-Exo-2">
              Lisandro Bedotti
            </h2>
            <p className="text-lg md:text-2xl mt-2 text-[#06d6a0] font-Exo-2">
              Hello! I&apos;m a software developer with a passion for web
              development,
              <br className="hidden md:block" /> and I specialize in backend
              technologies.
            </p>

            {/* Botones de descarga */}
            <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-4">
              <DownloadCVButton />
              <DownloadItaCVButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
