import { ReactNode } from "react";

type ContactMethodProps = {
  icon: ReactNode;
  text: string;
  link: string;
};

export default function ContactMethod({
  icon,
  text,
  link,
}: ContactMethodProps) {
  return (
    <>
      <p className="text-emerald-500">
        {" "}
        <span className="text-gray-400 ml-10 sm:ml-14 md:ml-16 lg:ml-20">
          {"<"}
        </span>
        ContactMethod
      </p>
      <div className="flex items-center space-x-4">
        <p className="text-blue-400 ml-12 sm:ml-16 md:ml-20 lg:ml-24">icon:</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52efc2] text-5xl sm:text-6xl md:text-7xl lg:text-8xl hover:text-blue-600 transform transition-all duration-300 hover:scale-125"
        >
          {icon}
        </a>
      </div>
      <p className="text-blue-400 ml-12 sm:ml-16 md:ml-20 lg:ml-24">
        text: <span className="text-amber-800">'{text}'</span>
      </p>
      <p className="text-blue-400 ml-12 sm:ml-16 md:ml-20 lg:ml-24">
        link: <span className="text-amber-800">'{link}'</span>
      </p>
    </>
  );
}
