import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const LoadingState = ({
  type = "spinner",
  size = "md",
  className = "",
  text = "Loading...",
  ...props
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
    },
  };

  const dotsVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
    },
  };

  if (type === "spinner") {
    return (
      <div
        className={cn("flex flex-col items-center gap-3", className)}
        {...props}
      >
        <motion.div
          className={cn(
            "border-2 border-gray-300 border-t-primary-500 rounded-full",
            sizes[size]
          )}
          variants={spinnerVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {text && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
        )}
      </div>
    );
  }

  if (type === "dots") {
    return (
      <div
        className={cn("flex flex-col items-center gap-3", className)}
        {...props}
      >
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-500 rounded-full"
              variants={dotsVariants}
              animate="animate"
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        {text && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
        )}
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div
        className={cn("flex flex-col items-center gap-3", className)}
        {...props}
      >
        <motion.div
          className={cn("bg-primary-500 rounded-full", sizes[size])}
          variants={pulseVariants}
          animate="animate"
          transition={{ duration: 1, repeat: Infinity }}
        />
        {text && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
        )}
      </div>
    );
  }

  return null;
};

LoadingState.propTypes = {
  type: PropTypes.oneOf(["spinner", "dots", "pulse"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
  text: PropTypes.string,
};

export { LoadingState };
export default LoadingState;
