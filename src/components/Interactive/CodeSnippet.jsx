import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  PlayIcon,
  CommandLineIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui";

const CodeSnippet = ({
  code,
  language,
  title,
  interactive,
  highlightLines,
  showLineNumbers,
}) => {
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const codeRef = useRef(null);

  // Syntax highlighting (simplified)
  const highlightSyntax = (code, language) => {
    const keywords = {
      javascript: [
        "const",
        "let",
        "var",
        "function",
        "return",
        "if",
        "else",
        "for",
        "while",
        "class",
        "import",
        "export",
      ],
      python: [
        "def",
        "class",
        "import",
        "from",
        "return",
        "if",
        "else",
        "for",
        "while",
        "with",
        "try",
        "except",
      ],
      bash: [
        "cd",
        "ls",
        "git",
        "npm",
        "yarn",
        "docker",
        "sudo",
        "chmod",
        "mkdir",
        "rm",
      ],
    };

    let highlightedCode = code;
    const langKeywords = keywords[language] || [];

    langKeywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      highlightedCode = highlightedCode.replace(
        regex,
        `<span class="text-blue-400 dark:text-blue-300 font-semibold">${keyword}</span>`
      );
    });

    // Highlight strings
    highlightedCode = highlightedCode.replace(
      /(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
      '<span class="text-green-400 dark:text-green-300">$1$2$3</span>'
    );

    // Highlight comments
    highlightedCode = highlightedCode.replace(
      /(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)/gm,
      '<span class="text-gray-500 dark:text-gray-400 italic">$1</span>'
    );

    // Highlight numbers
    highlightedCode = highlightedCode.replace(
      /\b\d+(\.\d+)?\b/g,
      '<span class="text-orange-400 dark:text-orange-300">$&</span>'
    );

    return highlightedCode;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const simulateExecution = () => {
    if (!interactive) return;

    setIsRunning(true);
    setOutput("");

    const lines = code.split("\n");
    let lineIndex = 0;

    const executeLines = () => {
      if (lineIndex < lines.length) {
        setCurrentLine(lineIndex);

        // Simulate different outputs based on code content
        setTimeout(() => {
          if (lines[lineIndex].includes("console.log")) {
            const match = lines[lineIndex].match(
              /console\.log\(['"`](.*?)['"`]\)/
            );
            if (match) {
              setOutput((prev) => prev + match[1] + "\n");
            }
          } else if (lines[lineIndex].includes("git")) {
            setOutput((prev) => prev + "✓ Git command executed successfully\n");
          } else if (lines[lineIndex].includes("npm")) {
            setOutput((prev) => prev + "📦 Installing dependencies...\n");
          }

          lineIndex++;
          executeLines();
        }, 800);
      } else {
        setIsRunning(false);
        setCurrentLine(-1);
        setOutput((prev) => prev + "\n🎉 Execution completed!");
      }
    };

    executeLines();
  };

  const codeLines = code.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CodeBracketIcon className="w-4 h-4" />
            <span className="text-sm font-medium">{title}</span>
            <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
              {language}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {interactive && (
            <Button
              variant="ghost"
              size="sm"
              onClick={simulateExecution}
              disabled={isRunning}
              className="text-gray-300 hover:text-white"
            >
              {isRunning ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <CommandLineIcon className="w-4 h-4" />
                </motion.div>
              ) : (
                <PlayIcon className="w-4 h-4" />
              )}
              {isRunning ? "Running..." : "Run"}
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-gray-300 hover:text-white"
          >
            {copied ? (
              <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-400" />
            ) : (
              <ClipboardIcon className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative bg-gray-950/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 border-t-0 rounded-b-xl overflow-hidden">
        <pre
          ref={codeRef}
          className="p-4 overflow-x-auto text-sm font-mono text-gray-300 dark:text-gray-200"
        >
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className={`flex ${
                currentLine === index
                  ? "bg-blue-500/10 border-l-2 border-blue-400"
                  : ""
              } ${
                highlightLines.includes(index + 1)
                  ? "bg-yellow-500/10 border-l-2 border-yellow-400"
                  : ""
              }`}
              initial={interactive ? { opacity: 0, x: -20 } : {}}
              animate={interactive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {showLineNumbers && (
                <span className="select-none text-gray-500 text-xs w-8 flex-shrink-0 text-right pr-3">
                  {index + 1}
                </span>
              )}
              <code
                className="flex-1"
                dangerouslySetInnerHTML={{
                  __html: highlightSyntax(line, language),
                }}
              />
            </motion.div>
          ))}
        </pre>

        {/* Output Panel */}
        <AnimatePresence>
          {interactive && output && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-700/50 bg-gray-800/50"
            >
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CommandLineIcon className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">
                    Output
                  </span>
                </div>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {output}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </motion.div>
  );
};

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  title: PropTypes.string,
  interactive: PropTypes.bool,
  highlightLines: PropTypes.arrayOf(PropTypes.number),
  showLineNumbers: PropTypes.bool,
};

CodeSnippet.defaultProps = {
  language: "javascript",
  title: "Code Example",
  interactive: false,
  highlightLines: [],
  showLineNumbers: true,
};

export default CodeSnippet;
