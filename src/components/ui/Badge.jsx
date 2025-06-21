import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Badge = ({
  children,
  className = "",
  variant = "default",
  size = "sm",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300";

  const variants = {
    default: "bg-primary-600 text-white",
    secondary: "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    cyber: "bg-terminal-green text-black border border-terminal-green",
    glass: "glass-card backdrop-blur-lg border border-white/20 text-white",
  };

  const sizes = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.span
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
    "cyber",
    "glass",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
};

Badge.defaultProps = {
  className: "",
  variant: "default",
  size: "sm",
};

export { Badge };
export default Badge;
