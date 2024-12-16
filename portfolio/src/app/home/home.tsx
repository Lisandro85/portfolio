import DownloadCVButton from "@/components/DownLoadSpanishCv/downLoadEspCv";
import DownloadItaCVButton from "@/components/DownLoadItalianCv/downLoadItaCv";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-10 mb-24">
      <div className="w-full mx-auto  bg-slate-800 bg-opacity-80  rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex items-center p-6">
          {/* Imagen */}
          <div className="w-56 h-56 rounded-full overflow-hidden group ml-20">
            <img
              className="w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
              src="/assets/perfilFoto.jpg"
              alt="Image description"
            />
          </div>
          {/* Texto al costado de la imagen */}
          <div className=" ml-20">
            <h2 className="text-5xl font-bold text-[#06d6a0] font-Exo-2 ">
              Lisandro Bedotti
            </h2>
            <p className="text-3xl mt-2 text-[#06d6a0]  font-Exo-2 ">
              Hello! I'm a software developer with a passion for web
              development,
              <br />
              and I specialize in backend technologies.
            </p>

            {/* Botones de descarga */}
            <div className="mt-4 flex space-x-4 ml-40">
              <DownloadCVButton />
              <DownloadItaCVButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
