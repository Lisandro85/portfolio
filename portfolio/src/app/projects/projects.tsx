export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-800 bg-transparent mb-80">
      <div className="mt-6 flex-grow px-4 py-4">
        {/* Contenedor de tarjetas con grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Tarjeta 4 */}
          <div className="w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)]  rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://www.youtube.com/watch?v=igOPSYdE_Xc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/igOPSYdE_Xc/0.jpg"
                alt="Video Preview"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
                Buddify - Social Network
              </h3>
              <p className="text-sm text-[#83c5be] mb-4">
                <span className="font-bold text-[#2a9d8f]">Technologies:</span>{" "}
                NestJS, TypeORM, TypeScript, PostgreSQL, Next.js, Tailwind CSS.{" "}
                <br />
                <span className="font-bold text-[#2a9d8f]">Features:</span>{" "}
                Create and join events, user profiles, and activity exploration.
              </p>
              <a
                href="https://github.com/Lisandro85/Buddify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#52b69a] hover:text-[#76c893] transition-colors duration-300"
              >
                See Repository
              </a>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)]  rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://www.youtube.com/watch?v=IwXr4UKzs64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/IwXr4UKzs64/0.jpg"
                alt="Video Preview"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
                Ecommerce API
              </h3>
              <p className="text-sm text-[#83c5be] mb-4">
                <span className="font-bold text-[#2a9d8f]">Technologies:</span>{" "}
                NestJS, PostgreSQL, TypeScript, TypeORM. <br />
                <span className="font-bold text-[#2a9d8f]">Features:</span>{" "}
                Product, user, and order management.
              </p>
              <a
                href="https://github.com/Lisandro85/ecommerceDeploy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#52b69a] hover:text-[#76c893] transition-colors duration-300"
              >
                See Repository
              </a>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)]  rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://www.youtube.com/watch?v=VizIYWYvxLQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/VizIYWYvxLQ/0.jpg"
                alt="Video Preview"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
                Rest-Bar Scheduling System
              </h3>
              <p className="text-sm text-[#83c5be] mb-4">
                <span className="font-bold text-[#2a9d8f]">Technologies:</span>{" "}
                TypeScript, PostgreSQL, Express, React. <br />
                <span className="font-bold text-[#2a9d8f]">Features:</span>{" "}
                Real-time reservations and customer management.
              </p>
              <a
                href="https://github.com/Lisandro85/sistema-de-turnos-resto-bar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#52b69a] hover:text-[#76c893] transition-colors duration-300"
              >
                See Repository
              </a>
            </div>
          </div>

          {/* Tarjeta 1 */}
          <div className="w-full max-w-sm overflow-hidden bg-[rgba(0,109,119,0.8)] rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://www.youtube.com/watch?v=ZJ-Y7EWapTo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.youtube.com/vi/ZJ-Y7EWapTo/0.jpg"
                alt="Video Preview"
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
                Movie Platform
              </h3>
              <p className="text-sm text-[#83c5be] mb-4">
                <span className="font-bold text-[#2a9d8f]">Technologies:</span>{" "}
                JavaScript, HTML, CSS, Bootstrap, Mongoose, MongoDB, Express.{" "}
                <br />
                <span className="font-bold text-[#2a9d8f]">Features:</span>{" "}
                Movie catalog and user management.
              </p>
              <a
                href="https://github.com/Lisandro85/Movies-Plataforma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#52b69a] hover:text-[#76c893] transition-colors duration-300"
              >
                See Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
