import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui";
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  UsersIcon,
  SparklesIcon,
  CommandLineIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const CommunityHero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "Full Stack Developers",
    "DevOps Engineers",
    "Hackers & Security Experts",
    "ML & MLOps Engineers",
    "Robotics Builders",
    "Cloud Architects",
  ];

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          setTypedText("");
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen bg-background-primary relative overflow-hidden matrix-bg">
      {/* Matrix/Terminal Background Effect */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-500 font-mono text-xs opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: -100,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {
              [
                "git push",
                "npm install",
                "docker run",
                "kubectl apply",
                "pip install",
                "cargo build",
              ][Math.floor(Math.random() * 6)]
            }
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            {/* Terminal Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-background-code border border-terminal-500 rounded-full px-4 py-2 mb-6 terminal-border"
            >
              <CommandLineIcon className="w-5 h-5 text-terminal-500" />
              <span className="text-terminal-500 font-mono text-sm">
                $ learners_arc --init
              </span>
              <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-foreground-primary mb-6 leading-tight"
            >
              Join the <span className="cyber-text">Elite Community</span>
              <br />
              of{" "}
              <span className="terminal-text inline-block min-h-[1.2em]">
                {typedText}
                <span className="animate-terminal-blink">|</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xl text-foreground-secondary mb-8 max-w-2xl leading-relaxed"
            >
              Connect with like-minded developers, hackers, and builders.
              Participate in exclusive bootcamps like{" "}
              <span className="text-terminal-500 font-mono">
                Winter of Code
              </span>
              , contribute to open source, and level up your skills together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button className="bg-gradient-to-r from-terminal-500 to-terminal-600 hover:from-terminal-600 hover:to-terminal-700 text-black font-semibold px-8 py-4 rounded-lg shadow-glow hover:shadow-glow transition-all duration-300 group">
                <span className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5" />
                  Join Community
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-8 py-4 rounded-lg cyber-border transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  <CodeBracketIcon className="w-5 h-5" />
                  Explore Bootcamps
                </span>
              </Button>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "15K+", label: "Developers", icon: "👨‍💻" },
                { value: "50+", label: "Bootcamps", icon: "🚀" },
                { value: "200+", label: "Projects", icon: "💡" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-background-secondary rounded-lg border border-gray-800 hover:border-terminal-500 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-foreground-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal/Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground-muted cursor-pointer group"
        >
          <span className="text-sm font-mono">scroll_down()</span>
          <div className="w-6 h-10 border-2 border-terminal-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-terminal-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const TerminalWindow = () => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const terminalCommands = [
      {
        input: "git clone https://github.com/learners-arc/community.git",
        output: "Cloning into community...",
      },
      {
        input: "cd community && npm install",
        output: "✓ Dependencies installed",
      },
      {
        input: "npm run dev",
        output: "🚀 Community platform started on localhost:3000",
      },
      {
        input: "git status",
        output: "On branch main\nYour branch is up to date",
      },
      {
        input: 'echo "Welcome to Learners Arc!"',
        output: "Welcome to Learners Arc!",
      },
    ];

    let index = 0;
    const addCommand = () => {
      if (index < terminalCommands.length) {
        setCommands((prev) => [...prev, terminalCommands[index]]);
        index++;
        setTimeout(addCommand, 2000);
      } else {
        // Instead of resetting, just stop adding commands
        // Keep the terminal content visible
        return;
      }
    };

    addCommand();
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="bg-background-code rounded-lg border border-gray-700 p-6 shadow-2xl max-w-lg mx-auto"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-foreground-muted text-sm font-mono ml-4">
          terminal
        </span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-3 min-h-[300px]">
        {commands
          .filter((cmd) => cmd && cmd.input && cmd.output)
          .map((cmd, index) => (
            <motion.div
              key={`${cmd.input}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-terminal-500 font-mono">$</span>
                <span className="text-foreground-primary font-mono text-sm">
                  {cmd.input}
                </span>
              </div>
              <div className="text-foreground-secondary font-mono text-sm pl-4">
                {cmd.output}
              </div>
            </motion.div>
          ))}

        {/* Blinking cursor */}
        <div className="flex items-center gap-2">
          <span className="text-terminal-500 font-mono">$</span>
          <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink" />
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute -inset-4 pointer-events-none">
        {[
          { Icon: RocketLaunchIcon, position: "top-4 right-4", delay: 0 },
          { Icon: CpuChipIcon, position: "bottom-4 left-4", delay: 1 },
          { Icon: SparklesIcon, position: "top-1/2 -right-8", delay: 2 },
        ].map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} text-terminal-500 opacity-30`}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommunityHero;
