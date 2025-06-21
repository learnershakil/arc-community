// Optimized animation variants for better scroll performance
export const fadeInUpOptimized = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth performance
      staggerChildren: 0.1,
    },
  },
};

export const fadeInOptimized = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const scaleInOptimized = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInFromLeftOptimized = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInFromRightOptimized = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Container variants for stagger animations
export const containerOptimized = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Optimized viewport settings
export const optimizedViewport = {
  once: true,
  margin: "-100px",
  amount: 0.3,
};

// Performance-focused hover animations
export const hoverOptimized = {
  scale: 1.02,
  y: -2,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

// Optimized button animations
export const buttonHoverOptimized = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

// Card hover with minimal transforms
export const cardHoverOptimized = {
  y: -5,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};
