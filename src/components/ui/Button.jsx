import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

  const variants = {
    default:
      "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
    gradient: "btn-cyber text-white border-0",
    outline:
      "glass-card border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black",
    ghost:
      "glass-card text-light-text dark:text-dark-text hover:bg-white/10 dark:hover:bg-gray-800/50",
    glass:
      "glass-card backdrop-blur-lg border border-white/20 text-white hover:border-white/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["0%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ skewX: "-15deg" }}
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export { Button };
export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "gradient",
    "outline",
    "ghost",
    "glass",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  className: "",
  variant: "default",
  size: "md",
  onClick: undefined,
  disabled: false,
  type: "button",
};
