import { useEffect, useCallback } from "react";

/**
 * Custom hook for optimizing scroll performance
 * Provides utilities for smooth scrolling and performance monitoring
 */
export const useScrollPerformance = () => {
  // Throttle scroll events for better performance
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }, []);

  // Debounce for scroll end detection
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Smooth scroll to element
  const scrollToElement = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Smooth scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Get scroll progress (0-100)
  const getScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  }, []);

  // Optimize scroll listener
  const addScrollListener = useCallback(
    (callback, throttleMs = 16) => {
      const throttledCallback = throttle(callback, throttleMs);
      window.addEventListener("scroll", throttledCallback, { passive: true });

      return () => {
        window.removeEventListener("scroll", throttledCallback);
      };
    },
    [throttle]
  );

  // Performance monitoring
  const monitorScrollPerformance = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

        // Log performance warnings
        if (fps < 30) {
          console.warn(`Low scroll FPS detected: ${fps}fps`);
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);
  }, []);

  // Initialize scroll optimizations
  useEffect(() => {
    // Add performance monitoring in development
    if (
      typeof window !== "undefined" &&
      window.location.hostname === "localhost"
    ) {
      monitorScrollPerformance();
    }

    // Add smooth scroll CSS
    document.documentElement.style.scrollBehavior = "smooth";

    // Optimize scroll for touch devices
    document.body.style.webkitOverflowScrolling = "touch";

    // Add scroll progress indicator
    const createScrollIndicator = () => {
      let indicator = document.getElementById("scroll-progress");
      if (!indicator) {
        indicator = document.createElement("div");
        indicator.id = "scroll-progress";
        indicator.className = "scroll-indicator";
        document.body.appendChild(indicator);
      }
      return indicator;
    };

    const indicator = createScrollIndicator();

    const updateScrollProgress = throttle(() => {
      const progress = getScrollProgress();
      indicator.style.transform = `scaleX(${progress / 100})`;
    }, 16);

    const removeScrollListener = addScrollListener(updateScrollProgress);

    // Cleanup
    return () => {
      removeScrollListener();
      document.documentElement.style.scrollBehavior = "";
      const indicator = document.getElementById("scroll-progress");
      if (indicator) {
        indicator.remove();
      }
    };
  }, [
    addScrollListener,
    getScrollProgress,
    monitorScrollPerformance,
    throttle,
  ]);

  return {
    scrollToElement,
    scrollToTop,
    getScrollProgress,
    addScrollListener,
    throttle,
    debounce,
  };
};

/**
 * Hook for intersection observer with performance optimizations
 */
export const useOptimizedIntersectionObserver = (options = {}) => {
  const observeElement = useCallback(
    (element, callback) => {
      if (!element) return;

      const defaultOptions = {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          callback(entry);
        });
      }, defaultOptions);

      observer.observe(element);

      return () => {
        observer.unobserve(element);
        observer.disconnect();
      };
    },
    [options]
  );

  return { observeElement };
};

/**
 * Hook for reduced motion preferences
 */
export const useReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return prefersReducedMotion;
};
