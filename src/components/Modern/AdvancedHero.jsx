import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui";
import {
  useParallax,
  MorphingShape,
  FloatingElement,
  MagneticElement,
  TextReveal,
} from "../../lib/animations";
import {
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const AdvancedHero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const { ref: parallaxRef, y: parallaxY } = useParallax(0.5);

  // Scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          y: parallaxY,
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement intensity={2} delay={0}>
          <MorphingShape className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-xl" />
        </FloatingElement>

        <FloatingElement intensity={1.5} delay={2}>
          <MorphingShape className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl" />
        </FloatingElement>

        <FloatingElement intensity={3} delay={4}>
          <MorphingShape className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-gradient-to-br from-green-500/20 to-cyan-500/20 blur-xl" />
        </FloatingElement>
      </div>

      {/* Main Content */}
      <motion.div
        ref={parallaxRef}
        className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <MagneticElement strength={0.2}>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <SparklesIcon className="w-5 h-5 text-primary-400" />
              <span className="text-primary-400 font-medium">
                The Future of Learning
              </span>
              <motion.div
                className="w-2 h-2 bg-primary-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </MagneticElement>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <TextReveal className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Build Your
          </TextReveal>
          <motion.div
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-purple-400 bg-clip-text text-transparent leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            <TextReveal>Tech Future</TextReveal>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <TextReveal className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Master cutting-edge technologies with AI-powered learning paths,
            expert mentorship, and hands-on projects that prepare you for
            tomorrow&apos;s challenges.
          </TextReveal>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <MagneticElement strength={0.1}>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 px-8 py-4 text-lg font-semibold"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Start Learning
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </MagneticElement>

          <MagneticElement strength={0.1}>
            <Button
              variant="outline"
              size="lg"
              className="group border-neutral-600 hover:border-primary-500 px-8 py-4 text-lg font-semibold"
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.span>
            </Button>
          </MagneticElement>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Students", value: "50K+", icon: "👥" },
            { label: "Courses", value: "200+", icon: "📚" },
            { label: "Projects", value: "1000+", icon: "🚀" },
            { label: "Success Rate", value: "95%", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <MagneticElement strength={0.2}>
          <motion.div
            className="flex flex-col items-center gap-2 text-neutral-400 cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm group-hover:text-primary-400 transition-colors">
              Scroll to explore
            </span>
            <motion.div
              className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center group-hover:border-primary-500 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-primary-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </MagneticElement>
      </motion.div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvancedHero;
