import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "../ui";
import { AdvancedAnimations } from "../../lib/advancedAnimations";
import {
  CodeBracketIcon,
  UsersIcon,
  CommandLineIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(TextPlugin);

const EnhancedCommunityHero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const particleContainerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const phrases = useMemo(
    () => [
      "Full Stack Developers",
      "DevOps Engineers",
      "AI/ML Engineers",
      "Security Experts",
      "Cloud Architects",
      "Tech Innovators",
    ],
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize particle system
      if (particleContainerRef.current) {
        AdvancedAnimations.particleSystem(particleContainerRef.current, {
          count: 80,
          colors: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
          size: { min: 1, max: 4 },
          speed: { min: 1, max: 3 },
          opacity: { min: 0.1, max: 0.6 },
        });
      }

      // Hero entrance animation
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      })
        .from(
          ".hero-subtitle",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-stats",
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Floating elements
      AdvancedAnimations.floatingElements(".floating-icon", {
        amplitude: 15,
        duration: 4,
      });

      // Magnetic buttons
      AdvancedAnimations.magneticButton(".magnetic-btn", 0.2);

      setIsLoaded(true);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isLoaded && textRef.current) {
      const typewriterTl = gsap.timeline({ repeat: -1 });

      phrases.forEach((phrase) => {
        typewriterTl
          .to(textRef.current, {
            text: phrase,
            duration: phrase.length * 0.05,
            ease: "none",
          })
          .to({}, { duration: 2 }) // Pause
          .to(textRef.current, {
            text: "",
            duration: 0.5,
            ease: "none",
          });
      });
    }
  }, [isLoaded, phrases]);

  const stats = [
    {
      icon: UsersIcon,
      value: "15K+",
      label: "Developers",
      color: "text-blue-400",
    },
    {
      icon: CodeBracketIcon,
      value: "2.5K+",
      label: "Projects",
      color: "text-green-400",
    },
    {
      icon: RocketLaunchIcon,
      value: "180+",
      label: "Bootcamps",
      color: "text-purple-400",
    },
    {
      icon: SparklesIcon,
      value: "98%",
      label: "Success Rate",
      color: "text-yellow-400",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Particle Background */}
      <div
        ref={particleContainerRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-icon absolute top-20 left-20 text-6xl">💻</div>
        <div className="floating-icon absolute top-40 right-32 text-4xl">
          🚀
        </div>
        <div className="floating-icon absolute bottom-32 left-32 text-5xl">
          ⚡
        </div>
        <div className="floating-icon absolute bottom-20 right-20 text-3xl">
          🌟
        </div>
        <div className="floating-icon absolute top-1/2 left-10 text-4xl">
          🔥
        </div>
        <div className="floating-icon absolute top-1/3 right-10 text-5xl">
          💡
        </div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[1px]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Title */}
          <div className="hero-title mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Build the
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>

            <div className="text-2xl md:text-4xl text-gray-300 font-light mb-4">
              A community for{" "}
              <span
                ref={textRef}
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold min-h-[1.2em] inline-block"
              />
              <span className="animate-pulse text-cyan-400">|</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle mb-12">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join thousands of passionate developers in an ecosystem designed
              for
              <span className="text-blue-400 font-semibold">
                {" "}
                collaborative learning
              </span>
              ,
              <span className="text-purple-400 font-semibold">
                {" "}
                cutting-edge bootcamps
              </span>
              , and
              <span className="text-green-400 font-semibold">
                {" "}
                career transformation
              </span>
              .
            </p>
          </div>

          {/* Stats Grid */}
          <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              className="magnetic-btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <RocketLaunchIcon className="w-6 h-6 mr-3" />
              Start Your Journey
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="magnetic-btn border-2 border-white/30 hover:border-white/50 text-white px-12 py-4 text-lg font-semibold rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <CommandLineIcon className="w-6 h-6 mr-3" />
              Explore Community
            </Button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default EnhancedCommunityHero;
