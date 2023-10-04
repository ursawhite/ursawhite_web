export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.5,
    },
  }),
};

export const fadeInTop = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  }),
};

export const animation = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * i,
    },
  }),
};
