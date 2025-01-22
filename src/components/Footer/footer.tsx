import MotionTransition from "../Transition-components/transition-components";
import { socialNetworks } from "../../../data";
import Link from "next/link";

export default function Footer() {
  return (
    <MotionTransition position="right" className="relative z-40">
      <footer className="text-primary flex items-center justify-center py-4">
        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-bgConteiner backdrop-blur-sm">
          {socialNetworks.map(({ logo, src, id }) => (
            <Link
              key={id}
              href={src}
              target="_blank"
              className="transition-all duration-300 hover:text-secondary"
            >
              {logo}
            </Link>
          ))}
        </div>
      </footer>
    </MotionTransition>
  );
}
