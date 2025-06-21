import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui";
import {
  CodeBracketIcon,
  UsersIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const CommunityHero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);

  // Typewriter effect
  useEffect(() => {
    const phrases = [
      "Full Stack Developers",
      "DevOps Engineers",
      "Hackers & Security Experts",
      "ML & MLOps Engineers",
      "Robotics Builders",
      "Cloud Architects",
    ];

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

  // Terminal animation
  useEffect(() => {
    const terminalCommands = [
      {
        prompt: "$ git clone https://github.com/learners-arc/community.git",
        response: "Cloning into 'community'...",
      },
      {
        prompt: "$ cd community && npm install",
        response: "✓ Dependencies installed successfully",
      },
      {
        prompt: "$ npm run dev",
        response: "🚀 Community platform started on localhost:3000",
      },
      {
        prompt: "$ git status",
        response: "On branch main\nYour branch is up to date",
      },
    ];

    let commandIndex = 0;

    const addTerminalLine = () => {
      if (commandIndex < terminalCommands.length) {
        const command = terminalCommands[commandIndex];

        // Add prompt
        setTerminalLines((prev) => [
          ...prev,
          { type: "prompt", text: command.prompt },
        ]);

        // Add response after delay
        setTimeout(() => {
          setTerminalLines((prev) => [
            ...prev,
            { type: "response", text: command.response },
          ]);
          commandIndex++;

          // Add next command after delay
          if (commandIndex < terminalCommands.length) {
            setTimeout(addTerminalLine, 1500);
          }
        }, 800);
      }
    };

    const timer = setTimeout(addTerminalLine, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden gradient-hero">
      {/* Animated Background Particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Grid with Glow */}
      <div className="absolute inset-0 opacity-30 gradient-mesh">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 0),
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 0)
            `,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full blur-3xl animate-pulse float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyber-purple/20 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-terminal-green/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center glass-card px-6 py-3 text-sm font-medium text-cyber-blue shimmer"
            >
              <div className="w-2 h-2 bg-terminal-green rounded-full mr-3 pulse-glow"></div>
              🚀 Join 2,500+ Developers Building the Future
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-cyber">Community of</span>
              <br />
              <span className="text-glow">
                {typedText}
                <span className="inline-block w-1 h-12 bg-terminal-green ml-2 animate-pulse"></span>
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-2xl"
            >
              Build, learn, and grow with passionate developers through
              <span className="text-terminal-green font-semibold">
                {" "}
                intensive bootcamps
              </span>
              ,
              <span className="text-cyber-blue font-semibold">
                {" "}
                collaborative projects
              </span>
              , and
              <span className="text-cyber-purple font-semibold">
                {" "}
                peer mentorship
              </span>
              .
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: UsersIcon, label: "Active Members", value: "2,500+" },
                {
                  icon: CodeBracketIcon,
                  label: "Projects Built",
                  value: "500+",
                },
                { icon: CommandLineIcon, label: "Bootcamps", value: "25+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 magnetic-effect"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-terminal-green to-cyber-blue rounded-lg">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyber">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-muted">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="btn-cyber magnetic-effect px-8 py-4 text-lg">
                🚀 Apply for Membership
              </Button>
              <Button className="glass-card px-8 py-4 text-lg border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300">
                💡 Explore Bootcamps
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="glass-card p-1 card-hover">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-glass-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-text-muted font-mono">
                  learners-arc-terminal
                </div>
                <div className="w-6"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 bg-black/50 rounded-b-2xl font-mono text-sm min-h-[400px] backdrop-blur-xl">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`mb-2 ${
                      line.type === "prompt"
                        ? "text-terminal-green"
                        : "text-cyber-blue pl-4"
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}

                {/* Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-terminal-green"
                />
              </div>
            </div>

            {/* Floating Code Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-3 text-xs font-mono text-terminal-green"
            >
              npm run dev
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 glass-card p-3 text-xs font-mono text-cyber-blue"
            >
              git commit -m &quot;feat: awesome&quot;
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-terminal-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityHero;
