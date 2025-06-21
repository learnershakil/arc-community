import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to format numbers with commas
 */
export function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

/**
 * Utility function to truncate text
 */
export function truncate(str, length = 100) {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

/**
 * Utility function to debounce function calls
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility function to create smooth scroll behavior
 */
export function smoothScrollTo(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * Utility function to check if element is in viewport
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Utility function to generate random ID
 */
export function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Utility function to handle async operations with error handling
 */
export async function safeAsync(asyncFn, fallback = null) {
  try {
    return await asyncFn();
  } catch (error) {
    console.error("Async operation failed:", error);
    return fallback;
  }
}

/**
 * Utility function for animation variants
 */
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

/**
 * Utility function for responsive breakpoints
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

/**
 * Utility function to get viewport size
 */
export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Utility function for color utilities
 */
export const colors = {
  primary: {
    50: "#f0f4ff",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
  },
  accent: {
    50: "#fef7ff",
    500: "#e96dff",
    600: "#d946ef",
    700: "#bc20d3",
  },
};
