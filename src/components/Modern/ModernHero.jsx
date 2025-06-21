import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button, Card, Badge } from "../ui";
import {
  ArrowRightIcon,
  PlayIcon,
  StarIcon,
  UsersIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

const ModernHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Floating animation for background elements
  const floatingY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const animate = () => {
      floatingY.set(Math.sin(Date.now() * 0.001) * 10);
    };
    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [floatingY]);

  const stats = [
    { label: "Active Learners", value: "10,000+", icon: UsersIcon },
    { label: "Courses", value: "50+", icon: BookOpenIcon },
    { label: "Success Rate", value: "95%", icon: StarIcon },
  ];

  const features = [
    "AI-Powered Learning",
    "Industry Experts",
    "Real Projects",
    "Career Support",
    "Community Driven",
    "Flexible Schedule",
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 pt-20 pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="primary"
                size="lg"
                className="text-sm font-medium"
              >
                🚀 Winter of Code 2025 - Now Open
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-display leading-none">
                Master <span className="gradient-text">Modern</span>
                <br />
                Development
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
                Join the ultimate learning community where tomorrow&apos;s
                developers are made. Experience hands-on learning with real
                projects, industry mentors, and cutting-edge technologies.
              </p>
            </motion.div>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-neutral-300 backdrop-blur-sm"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="gradient"
                size="lg"
                rightIcon={<ArrowRightIcon className="w-5 h-5" />}
                className="text-lg px-8 py-4"
              >
                Start Learning Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<PlayIcon className="w-5 h-5" />}
                className="text-lg"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              className="relative z-20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card
                variant="glass"
                className="p-8 backdrop-blur-xl border-white/20"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="success">Live Sessions</Badge>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse" />
                      <span className="text-sm text-neutral-300">
                        1,247 online
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white">
                      Next Session Starts in
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      {["02", "14", "35", "08"].map((time, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-primary-400">
                            {time}
                          </div>
                          <div className="text-xs text-neutral-400">
                            {["Days", "Hrs", "Min", "Sec"][index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="primary" className="w-full">
                    Reserve Your Spot
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Floating Sub-Cards */}
            <motion.div
              className="absolute -top-8 -left-8 z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Card variant="glow" className="p-4 w-48">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      4.9/5
                    </div>
                    <div className="text-sm text-neutral-400">
                      Student Rating
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-8 z-10"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Card variant="glass" className="p-4 w-52">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full" />
                    <div>
                      <div className="text-sm font-medium text-white">
                        Sarah Chen
                      </div>
                      <div className="text-xs text-neutral-400">
                        just completed React Mastery
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-300">
                    Amazing experience! Got my dream job at Google.
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModernHero;
