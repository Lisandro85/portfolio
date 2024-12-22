"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { transitionVariantsPage } from "../../../utils/motion.transition";

export const TransitionPage = () => {
  const pathname = usePathname(); // Ruta actual

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Cambia con cada ruta
        className="fixed top-0 bottom-0 right-full w-screen z-30"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
};
