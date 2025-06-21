import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  CommandLineIcon,
  XMarkIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const TerminalAnimation = ({
  commands,
  autoPlay = true,
  loop,
  typingSpeed,
  pauseDuration = 100,
  title = "Terminal",
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentOutput, setCurrentOutput] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const terminalRef = useRef(null);

  const defaultCommands = [
    {
      command: "git clone https://github.com/learners-arc/community.git",
      output: [
        "Cloning into 'community'...",
        "remote: Enumerating objects: 157, done.",
        "remote: Counting objects: 100% (157/157), done.",
        "remote: Compressing objects: 100% (98/98), done.",
        "remote: Total 157 (delta 59), reused 157 (delta 59), pack-reused 0",
        "Receiving objects: 100% (157/157), 245.82 KiB | 2.86 MiB/s, done.",
        "Resolving deltas: 100% (59/59), done.",
      ],
    },
    {
      command: "cd community && npm install",
      output: [
        "added 1847 packages from 865 contributors and audited 1851 packages in 32.451s",
        "",
        "156 packages are looking for funding",
        "  run `npm fund` for details",
        "",
        "found 0 vulnerabilities",
      ],
    },
    {
      command: "npm run dev",
      output: [
        "",
        "> community@1.0.0 dev",
        "> vite",
        "",
        "  VITE v6.0.3  ready in 423 ms",
        "",
        "  ➜  Local:   http://localhost:5173/",
        "  ➜  Network: use --host to expose",
        "  ➜  press h + enter to show help",
      ],
    },
    {
      command: "git status",
      output: [
        "On branch main",
        "Your branch is up to date with 'origin/main'.",
        "",
        "nothing to commit, working tree clean",
      ],
    },
  ];

  const commandList = commands || defaultCommands;

  useEffect(() => {
    if (!autoPlay) return;

    const runCommand = async () => {
      const command = commandList[currentCommandIndex];
      setIsTyping(true);
        console.log('Length: ',command.command)
      // Type command
      for (let i = 0; i <= command.command.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        setCurrentText(command.command.slice(0, i));
      }

      // Pause before showing output
      await new Promise((resolve) => setTimeout(resolve, pauseDuration / 2));

      // Show output
      setCurrentOutput(command.output);
      setIsTyping(false);

      // Pause before next command
      await new Promise((resolve) => setTimeout(resolve, pauseDuration));

      // Move to next command
      setCurrentCommandIndex((prev) => {
        const nextIndex = (prev + 1) % commandList.length;
        if (nextIndex === 0 && !loop) return prev;
        return nextIndex;
      });

      // Clear for next command
      if (currentCommandIndex === commandList.length - 1 && loop) {
        setCurrentText("");
        setCurrentOutput([]);
      }
    };

    runCommand();
  }, [
    currentCommandIndex,
    autoPlay,
    loop,
    typingSpeed,
    pauseDuration,
    commandList,
  ]);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentOutput, currentText]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: isFullscreen ? 1.02 : 1,
        width: isFullscreen ? "100vw" : "auto",
        height: isFullscreen ? "100vh" : "auto",
      }}
      className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 ${
        isFullscreen ? "fixed inset-0 z-50" : "max-w-4xl"
      } ${isMinimized ? "h-12" : "h-96"}`}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CommandLineIcon className="w-4 h-4" />
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <MinusIcon className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Terminal Content */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="h-full overflow-hidden"
          >
            <div
              ref={terminalRef}
              className="p-4 font-mono text-sm text-green-400 bg-gray-950 h-full overflow-y-auto"
              style={{
                background: "linear-gradient(180deg, #0a0a0a 0%, #111827 100%)",
                fontFamily:
                  '"JetBrains Mono", "Fira Code", "SF Mono", monospace',
              }}
            >
              {/* Previous commands output */}
              {currentCommandIndex > 0 &&
                commandList.slice(0, currentCommandIndex).map((cmd, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 text-blue-400">
                      <span className="text-purple-400">
                        learners-arc@community
                      </span>
                      <span className="text-gray-500">:</span>
                      <span className="text-cyan-400">~/projects</span>
                      <span className="text-gray-500">$</span>
                      <span>{cmd.command}</span>
                    </div>
                    {cmd.output.map((line, lineIndex) => (
                      <div key={lineIndex} className="text-gray-300 pl-4">
                        {line}
                      </div>
                    ))}
                  </div>
                ))}

              {/* Current command */}
              <div className="flex items-center gap-2 text-blue-400">
                <span className="text-purple-400">learners-arc@community</span>
                <span className="text-gray-500">:</span>
                <span className="text-cyan-400">~/projects</span>
                <span className="text-gray-500">$</span>
                <span>{currentText}</span>
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="bg-green-400 w-2 h-4 inline-block"
                  />
                )}
              </div>

              {/* Current output */}
              {currentOutput.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2"
                >
                  {currentOutput.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-300 pl-4"
                    >
                      {line}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Cursor when not typing */}
              {!isTyping && currentText && (
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400 mt-2"
                >
                  ▊
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 opacity-50 pointer-events-none" />
    </motion.div>
  );
};

TerminalAnimation.propTypes = {
  commands: PropTypes.arrayOf(
    PropTypes.shape({
      command: PropTypes.string.isRequired,
      output: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  typingSpeed: PropTypes.number,
  pauseDuration: PropTypes.number,
  title: PropTypes.string,
};

TerminalAnimation.defaultProps = {
  commands: null,
  autoPlay: true,
  loop: true,
  typingSpeed: 50,
  pauseDuration: 1000,
  title: "Terminal",
};

export default TerminalAnimation;
