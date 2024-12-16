export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-6 flex flex-wrap justify-center space-x-6 flex-grow">
        {/* Tarjeta 4 */}
        <div className="max-w-xs  overflow-hidden  bg-slate-800 bg-opacity-80  rounded-lg shadow-md mb-10">
          {/* Vista previa del video de YouTube */}
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

          {/* Título y Descripción */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
              Buddify - Social Network
            </h3>
            <p className="text-sm mb-4 text-[#83c5be]">
              Technologies: NestJS, TypeORM, TypeScript, PostgreSQL, Next.js,
              Tailwind CSS.
              <br />
              Features: Create and join events, user profiles, and activity
              exploration.
            </p>

            {/* Enlace al repositorio */}
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
        <div className="max-w-xs  overflow-hidden  bg-slate-800 bg-opacity-80  rounded-lg shadow-md mb-5">
          {/* Vista previa del video de YouTube */}
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

          {/* Título y Descripción */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
              Ecommerce API
            </h3>
            <p className="text-sm text-[#83c5be] mb-4">
              Technologies: NestJS, PostgreSQL, TypeScript, TypeORM.
              <br />
              Features: Product, user, and order management.
            </p>

            {/* Enlace al repositorio */}
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
        <div className="max-w-xs  overflow-hidden  bg-slate-800 bg-opacity-80  rounded-lg shadow-md mb-5">
          {/* Vista previa del video de YouTube */}
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

          {/* Título y Descripción */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
              Rest-Bar Scheduling System
            </h3>
            <p className="text-sm mb-4 text-[#83c5be]">
              Technologies: TypeScript, PostgreSQL, Express, React.
              <br />
              Features: Real-time reservations and customer management.
            </p>

            {/* Enlace al repositorio */}
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
        <div className="max-w-xs overflow-hidden bg-slate-800 bg-opacity-80 rounded-lg shadow-md mb-5">
          {/* Vista previa del video de YouTube */}
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

          {/* Título y Descripción */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#52b69a] mb-2">
              Movie Platform
            </h3>
            <p className="text-sm text-[#83c5be] mb-4">
              Technologies: JavaScript, HTML, CSS, Bootstrap, Mongoose, MongoDB,
              Express.
              <br />
              Features: Movie catalog and user management.
            </p>

            {/* Enlace al repositorio */}
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
  );
}
