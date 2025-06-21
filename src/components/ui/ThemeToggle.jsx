import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-12 h-12 rounded-full border-2 transition-all duration-300
        ${
          isDark
            ? "bg-background-secondary border-terminal-500 hover:border-terminal-400"
            : "bg-white border-gray-300 hover:border-gray-400"
        }
        flex items-center justify-center group
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className={`
          ${isDark ? "text-terminal-500" : "text-yellow-500"}
          transition-colors duration-300
        `}
      >
        {isDark ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </motion.div>

      {/* Glow effect on hover */}
      <div
        className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${
          isDark
            ? "shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            : "shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        }
      `}
      />
    </motion.button>
  );
};

export default ThemeToggle;
