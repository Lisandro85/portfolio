import {
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Speech,
  Github,
  Mail,
} from "lucide-react";
import { title } from "process";
import { JSX } from "react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/lisandro-bedotti",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/Lisandro85",
  },

  {
    id: 3,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:lisandrobedotti@hotmail.com",
  },
];
type NavbarTranslationKeys = "home" | "about" | "projects" | "contact";
export const itemsNavbar: {
  id: number;
  titleKey: NavbarTranslationKeys;
  icon: JSX.Element;
  link: string;
}[] = [
  {
    id: 1,
    titleKey: "home",
    icon: <HomeIcon size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/home",
  },
  {
    id: 2,
    titleKey: "about",
    icon: <UserRound size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/about",
  },
  {
    id: 3,
    titleKey: "projects",
    icon: <CodeSquare size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/projects",
  },
  {
    id: 4,
    titleKey: "contact",
    icon: <Speech size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/contact",
  },
];

export const logos = [
  {
    id: 1,
    link: "/images/nodejs.svg",
  },
  {
    id: 2,
    link: "/images/html.webp",
  },
  {
    id: 3,
    link: "/images/css.svg",
  },

  {
    id: 4,
    link: "/images/javascript.svg",
  },
  {
    id: 5,
    link: "/images/typescript.webp",
  },
  {
    id: 6,
    link: "/images/nextjs.png",
  },
  {
    id: 7,
    link: "/images/nestjs.png",
  },
  {
    id: 8,
    link: "/images/postgressql.webp",
  },
  {
    id: 9,
    link: "/images/mongodb.png",
  },
  {
    id: 10,
    link: "/images/React.svg.png",
  },
  {
    id: 11,
    link: "/images/typeorm.png",
  },
  {
    id: 12,
    link: "/images/docker.webp",
  },
  {
    id: 13,
    link: "/images/tailwind.png",
  },
];
