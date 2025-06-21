import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hover = true,
  ...props
}) => {
  const baseClasses =
    "rounded-lg transition-all duration-300 border border-gray-200 dark:border-gray-700";

  const variants = {
    default: "bg-white dark:bg-gray-800 shadow-sm",
    glass: "glass-card backdrop-blur-lg border-white/20",
    cyber: "cyber-card border-terminal-green",
    gradient:
      "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800",
    outline: "bg-transparent border-2",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const hoverEffect = hover
    ? {
        whileHover: { scale: 1.02, y: -4 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }
    : {};

  return (
    <motion.div
      className={cn(
        baseClasses,
        variants[variant],
        paddings[padding],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...hoverEffect}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ children, className = "", ...props }) => (
  <div
    className={cn(
      "pb-4 border-b border-gray-200 dark:border-gray-700",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const CardBody = ({ children, className = "", ...props }) => (
  <div className={cn("py-4", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "", ...props }) => (
  <div
    className={cn(
      "pt-4 border-t border-gray-200 dark:border-gray-700",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "glass",
    "cyber",
    "gradient",
    "outline",
  ]),
  padding: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
  hover: PropTypes.bool,
};

Card.defaultProps = {
  className: "",
  variant: "default",
  padding: "md",
  hover: true,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Card, CardHeader, CardBody, CardFooter };
export default Card;
