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
    <section className="min-h-screen bg-background-primary relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-500 font-mono text-xs opacity-30"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
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
              ][Math.floor(Math.random() * 5)]
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
              className="inline-flex items-center gap-2 bg-background-code border border-terminal-500 rounded-full px-4 py-2 mb-6"
            >
              <CommandLineIcon className="w-5 h-5 text-terminal-500" />
              <span className="text-terminal-500 font-mono text-sm">
                $ learners_arc --init
              </span>
              <div className="w-2 h-4 bg-terminal-500 animate-pulse ml-1" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-foreground-primary mb-6 leading-tight"
            >
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-500 to-cyber-blue">
                Elite Community
              </span>
              <br />
              of{" "}
              <span className="text-terminal-500 inline-block min-h-[1.2em]">
                {typedText}
                <span className="animate-pulse">|</span>
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
              <Button className="bg-gradient-to-r from-terminal-500 to-terminal-600 hover:from-terminal-600 hover:to-terminal-700 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 group">
                <span className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5" />
                  Apply for Membership
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
                className="border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-8 py-4 rounded-lg transition-all duration-300 group"
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
                { value: "67+", label: "Bootcamps", icon: "🚀" },
                { value: "200+", label: "Projects", icon: "💡" },
              ].map((stat) => (
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

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-background-code rounded-lg border border-gray-700 p-6 shadow-2xl">
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
              <div className="space-y-2 min-h-[300px] font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={
                      line.type === "prompt"
                        ? "text-terminal-500"
                        : "text-foreground-secondary pl-4"
                    }
                  >
                    {line.text.split("\n").map((textLine, lineIndex) => (
                      <div key={lineIndex}>{textLine}</div>
                    ))}
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-terminal-500"
                >
                  $ <span className="animate-pulse">_</span>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-terminal-500 rounded-full opacity-20 blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyber-blue rounded-full opacity-30 blur-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
