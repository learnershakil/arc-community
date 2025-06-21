/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Advanced scroll-based animations hook
export const useScrollAnimations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return { ref, scrollYProgress, y, opacity, scale };
};

// Parallax effect hook
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 400]);
  
  return { ref, y };
};

// Mouse tracking hook for interactive effects
export const useMouseTracking = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]));

  const handleMouseMove = (event, element) => {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) / rect.width);
    y.set((event.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { x, y, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

// Stagger animation for lists/grids
export const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Morphing shapes component
export const MorphingShape = ({ className = "", ...props }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ borderRadius: "20%" }}
      animate={{ 
        borderRadius: ["20%", "50%", "20%", "30%", "20%"],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      {...props}
    />
  );
};

// Floating elements component
export const FloatingElement = ({ children, intensity = 1, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [-10 * intensity, 10 * intensity, -10 * intensity],
        x: [-5 * intensity, 5 * intensity, -5 * intensity],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic hover effect
export const MagneticElement = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) * strength);
    y.set((event.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation
export const TextReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current) {
      const text = ref.current;
      const chars = text.textContent.split('');
      text.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px)';
        text.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.03,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            once: true
          }
        });
      });
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Advanced page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 30
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  out: {
    opacity: 0,
    scale: 1.05,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Advanced loading animation component
export const AdvancedLoader = () => {
  return (
    <div className="fixed inset-0 bg-neutral-950 flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-32 h-32 border-2 border-primary-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 border-2 border-secondary-500/50 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-1/2 w-2 h-2 -ml-1 -mt-1 bg-primary-400 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 45}deg) translateY(-60px)`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="absolute bottom-1/3 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-white text-xl font-semibold mb-2">
          Loading Experience
        </h3>
        <p className="text-neutral-400">
          Preparing something amazing...
        </p>
      </motion.div>
    </div>
  );
};
