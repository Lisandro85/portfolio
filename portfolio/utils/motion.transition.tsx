export const transitionVariantsPage = {
  initial: {
    x: "100%", // Inicia fuera de la pantalla
  },
  animate: {
    x: "0%", // Entra en pantalla
  },
  exit: {
    x: "100%", // Sale de pantalla
  },
};

export const fadeIn = (position: string) => {
  const transition = {
    type: "tween",
    duration: 1.4,
    delay: 0.5,
    ease: [0.25, 0.25, 0.25, 0.75],
  };

  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition,
    },
  };
};
