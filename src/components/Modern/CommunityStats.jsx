import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  UsersIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  GlobeAltIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const CommunityStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({
    developers: 0,
    projects: 0,
    bootcamps: 0,
    countries: 0,
    commits: 0,
    mentors: 0,
  });

  // Animated counter effect
  useEffect(() => {
    if (!isInView) return;

    const finalStats = {
      developers: 15247,
      projects: 1834,
      bootcamps: 67,
      countries: 42,
      commits: 89420,
      mentors: 156,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const timers = Object.keys(finalStats).map((key) => {
      let current = 0;
      const target = finalStats[key];
      const increment = target / steps;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timers.find((t) => t === this));
        }
        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepTime);
    });

    return () => timers.forEach(clearInterval);
  }, [isInView]);

  const stats = [
    {
      key: "developers",
      label: "Active Developers",
      value: counts.developers.toLocaleString(),
      icon: UsersIcon,
      description: "Full-stack, DevOps, ML engineers",
      color: "text-terminal-500",
      bgColor: "bg-terminal-500/10",
      borderColor: "border-terminal-500/30",
    },
    {
      key: "projects",
      label: "Community Projects",
      value: counts.projects.toLocaleString(),
      icon: CodeBracketIcon,
      description: "Open source & collaborative",
      color: "text-cyber-blue",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      key: "bootcamps",
      label: "Bootcamps Completed",
      value: counts.bootcamps.toLocaleString(),
      icon: RocketLaunchIcon,
      description: "Including Winter of Code",
      color: "text-cyber-purple",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      key: "countries",
      label: "Countries",
      value: counts.countries.toLocaleString(),
      icon: GlobeAltIcon,
      description: "Global developer community",
      color: "text-cyber-pink",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
    },
    {
      key: "commits",
      label: "Lines of Code",
      value: counts.commits.toLocaleString() + "K+",
      icon: CpuChipIcon,
      description: "Collective contributions",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      key: "mentors",
      label: "Expert Mentors",
      value: counts.mentors.toLocaleString(),
      icon: AcademicCapIcon,
      description: "Industry professionals",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
  ];

  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-terminal-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-background-code border border-terminal-500 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-terminal-500 font-mono text-sm">
              $ community --stats
            </span>
            <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground-primary mb-4">
            Growing <span className="cyber-text">Together</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Our community is built by developers, for developers. Join thousands
            of builders creating the future of technology together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className={`
                p-6 rounded-2xl border ${stat.borderColor} ${stat.bgColor}
                backdrop-blur-sm hover:shadow-2xl transition-all duration-300
                group cursor-pointer
              `}
            >
              {/* Icon */}
              <div
                className={`
                w-12 h-12 rounded-lg ${stat.bgColor} border ${stat.borderColor}
                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform
              `}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>

              {/* Value */}
              <div
                className={`text-3xl font-bold font-mono ${stat.color} mb-2`}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-foreground-primary mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-foreground-muted">
                {stat.description}
              </div>

              {/* Hover effect */}
              <div
                className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-transparent to-${
                  stat.color.split("-")[1]
                }-500/5
                transition-opacity duration-300 pointer-events-none
              `}
              />
            </motion.div>
          ))}
        </div>

        {/* Community Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-terminal-500/20 to-cyber-blue/20 rounded-2xl p-8 border border-terminal-500/30">
            <h3 className="text-2xl font-bold text-foreground-primary mb-4">
              Ready to be part of something bigger?
            </h3>
            <p className="text-foreground-secondary mb-6">
              Join developers from 42+ countries building the future of
              technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-terminal-500 to-terminal-600 hover:from-terminal-600 hover:to-terminal-700 text-black font-semibold px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              Join the Community →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityStats;
