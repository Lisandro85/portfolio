import {
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Mail,
} from "lucide-react";

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

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/home",
  },
  {
    id: 2,
    title: "About",
    icon: <UserRound size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/about",
  },
  {
    id: 3,
    title: "Projects",
    icon: <CodeSquare size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    icon: <Speech size={25} color="#06d6a0" strokeWidth={1} />,
    link: "/contact",
  },
];
