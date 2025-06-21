import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const Toggle = ({
  checked = false,
  onChange,
  size = "md",
  label = "",
  description = "",
  className = "",
  disabled = false,
  ...props
}) => {
  const sizes = {
    sm: {
      switch: "w-10 h-6",
      thumb: "w-4 h-4",
      translate: "translate-x-4",
    },
    md: {
      switch: "w-12 h-7",
      thumb: "w-5 h-5",
      translate: "translate-x-5",
    },
    lg: {
      switch: "w-14 h-8",
      thumb: "w-6 h-6",
      translate: "translate-x-6",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex items-start gap-3", className)} {...props}>
      <button
        type="button"
        onClick={() => !disabled && onChange?.(!checked)}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center rounded-full transition-colors duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
          currentSize.switch,
          checked ? "bg-primary-600" : "bg-gray-200 dark:bg-gray-700",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <motion.span
          className={cn(
            "inline-block rounded-full bg-white shadow-sm transform transition-transform duration-300",
            currentSize.thumb,
            checked ? currentSize.translate : "translate-x-1"
          )}
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>

      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export { Toggle };
export default Toggle;
