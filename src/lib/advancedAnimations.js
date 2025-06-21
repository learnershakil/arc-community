import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Advanced Animation Utilities
export class AdvancedAnimations {
  static init() {
    // Set default GSAP settings
    gsap.defaults({
      duration: 0.6,
      ease: "power2.out",
    });

    // Smooth scroll setup
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
      start: "top 85%",
      end: "bottom 15%",
    });
  }

  // Magnetic button effect
  static magneticButton(selector, strength = 0.3) {
    const buttons = gsap.utils.toArray(selector);

    buttons.forEach((button) => {
      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function
      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }

  // Parallax scrolling effect
  static parallaxScroll(selector, speed = 0.5) {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 0 },
        {
          y: () => -(element.offsetHeight * speed),
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }

  // Stagger animation with scroll trigger
  static staggerInView(selector, options = {}) {
    const {
      y = 50,
      opacity = 0,
      duration = 0.8,
      stagger = 0.2,
      ease = "power2.out",
      trigger = null,
    } = options;

    const elements = gsap.utils.toArray(selector);

    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      { y, opacity, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: trigger || elements[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  // Typewriter effect
  static typewriter(selector, options = {}) {
    const {
      text = "",
      speed = 0.05,
      cursor = true,
      onComplete = null,
    } = options;

    const element = document.querySelector(selector);
    if (!element) return;

    // Clear existing content
    element.textContent = "";

    // Add cursor if enabled
    if (cursor) {
      element.innerHTML = '<span class="typewriter-cursor">|</span>';
      gsap.to(".typewriter-cursor", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    // Animate text
    gsap.to(element, {
      text: text,
      duration: text.length * speed,
      ease: "none",
      onComplete: () => {
        if (cursor) {
          gsap.set(".typewriter-cursor", { display: "none" });
        }
        onComplete?.();
      },
    });
  }

  // Floating elements animation
  static floatingElements(selector, options = {}) {
    const { amplitude = 20, duration = 3, ease = "power1.inOut" } = options;

    const elements = gsap.utils.toArray(selector);

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: amplitude * (index % 2 === 0 ? 1 : -1),
        duration: duration + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease,
        delay: index * 0.2,
      });
    });
  }

  // Morphing shapes animation
  static morphShape(selector, shapes = [], options = {}) {
    const {
      duration = 1,
      ease = "power2.inOut",
      repeat = -1,
      yoyo = true,
    } = options;

    const element = document.querySelector(selector);
    if (!element || shapes.length === 0) return;

    const timeline = gsap.timeline({ repeat, yoyo });

    shapes.forEach((shape, index) => {
      timeline.to(element, {
        attr: { d: shape },
        duration,
        ease,
        delay: index === 0 ? 0 : 0.5,
      });
    });
  }

  // 3D card flip effect
  static cardFlip(selector, options = {}) {
    const {
      perspective = 1000,
      duration = 0.6,
      ease = "power2.inOut",
    } = options;

    const cards = gsap.utils.toArray(selector);

    cards.forEach((card) => {
      const front = card.querySelector(".card-front");
      const back = card.querySelector(".card-back");

      if (!front || !back) return;

      // Set initial 3D styles
      gsap.set(card, { perspective });
      gsap.set(back, { rotationY: 180 });

      let isFlipped = false;

      const flip = () => {
        if (isFlipped) {
          gsap.to(front, { rotationY: 0, duration, ease });
          gsap.to(back, { rotationY: 180, duration, ease });
        } else {
          gsap.to(front, { rotationY: -180, duration, ease });
          gsap.to(back, { rotationY: 0, duration, ease });
        }
        isFlipped = !isFlipped;
      };

      card.addEventListener("click", flip);

      // Return cleanup function
      return () => card.removeEventListener("click", flip);
    });
  }

  // Particle system animation
  static particleSystem(container, options = {}) {
    const {
      count = 50,
      colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
      size = { min: 2, max: 6 },
      speed = { min: 0.5, max: 2 },
      opacity = { min: 0.3, max: 0.8 },
    } = options;

    // Handle both CSS selector strings and DOM elements
    const containerEl =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    if (!containerEl) return;

    const particles = [];

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle absolute rounded-full pointer-events-none";

      const particleSize = gsap.utils.random(size.min, size.max);
      const color = gsap.utils.random(colors);

      gsap.set(particle, {
        width: particleSize,
        height: particleSize,
        backgroundColor: color,
        opacity: gsap.utils.random(opacity.min, opacity.max),
        x: gsap.utils.random(0, containerEl.offsetWidth),
        y: gsap.utils.random(0, containerEl.offsetHeight),
      });

      containerEl.appendChild(particle);
      particles.push(particle);

      // Animate particle
      gsap.to(particle, {
        x: `+=${gsap.utils.random(-100, 100)}`,
        y: `+=${gsap.utils.random(-100, 100)}`,
        duration: gsap.utils.random(speed.min, speed.max) * 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      // Fade in/out animation
      gsap.to(particle, {
        opacity: gsap.utils.random(opacity.min, opacity.max),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: gsap.utils.random(0, 2),
      });
    }

    // Cleanup function
    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }

  // Scroll-triggered counter animation
  static animateCounter(selector, options = {}) {
    const {
      start = 0,
      end = 100,
      duration = 2,
      ease = "power2.out",
      formatFunction = (value) => Math.round(value),
    } = options;

    const element = document.querySelector(selector);
    if (!element) return;

    const counter = { value: start };

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(counter, {
          value: end,
          duration,
          ease,
          onUpdate: () => {
            element.textContent = formatFunction(counter.value);
          },
        });
      },
    });
  }

  // Advanced loading animation
  static createLoader(container, options = {}) {
    const {
      type = "dots",
      color = "#3b82f6",
      size = 40,
      duration = 1.5,
    } = options;

    const containerEl =
      typeof container === "string"
        ? document.querySelector(container)
        : container;
    if (!containerEl) return;

    switch (type) {
      case "dots":
        this.createDotLoader(containerEl, { color, size, duration });
        break;
      case "spinner":
        this.createSpinnerLoader(containerEl, { color, size, duration });
        break;
      case "pulse":
        this.createPulseLoader(containerEl, { color, size, duration });
        break;
      default:
        this.createDotLoader(containerEl, { color, size, duration });
    }

    return {
      show: () => gsap.to(containerEl, { opacity: 1, duration: 0.3 }),
      hide: () => gsap.to(containerEl, { opacity: 0, duration: 0.3 }),
      destroy: () => {
        gsap.killTweensOf(containerEl.children);
        containerEl.innerHTML = "";
      },
    };
  }

  static createDotLoader(container, { color, size, duration }) {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.className = "inline-block rounded-full mx-1";
      dot.style.width = `${size / 4}px`;
      dot.style.height = `${size / 4}px`;
      dot.style.backgroundColor = color;
      container.appendChild(dot);
      dots.push(dot);
    }

    gsap.to(dots, {
      y: -size / 4,
      duration: duration / 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  }

  static createSpinnerLoader(container, { color, size, duration }) {
    const spinner = document.createElement("div");
    spinner.className = "rounded-full border-4 border-gray-200";
    spinner.style.width = `${size}px`;
    spinner.style.height = `${size}px`;
    spinner.style.borderTopColor = color;
    container.appendChild(spinner);

    gsap.to(spinner, {
      rotation: 360,
      duration,
      repeat: -1,
      ease: "none",
    });
  }

  static createPulseLoader(container, { color, size, duration }) {
    const pulse = document.createElement("div");
    pulse.className = "rounded-full";
    pulse.style.width = `${size}px`;
    pulse.style.height = `${size}px`;
    pulse.style.backgroundColor = color;
    container.appendChild(pulse);

    gsap.to(pulse, {
      scale: 1.5,
      opacity: 0.3,
      duration: duration / 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }

  // Cleanup all ScrollTriggers
  static cleanup() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf("*");
  }
}

// Initialize on import
AdvancedAnimations.init();

export default AdvancedAnimations;
