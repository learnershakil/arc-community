import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  error = "",
  required = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const showLabel = isFocused || hasValue;

  return (
    <div className={cn("relative", className)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={showLabel ? placeholder : ""}
        className={cn(
          "w-full px-4 py-3 bg-transparent border rounded-lg transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary-500",
          "text-gray-900 dark:text-white",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus:border-primary-500",
          showLabel ? "pt-6 pb-2" : "py-3"
        )}
        required={required}
        {...props}
      />

      {label && (
        <motion.label
          className={cn(
            "absolute left-4 pointer-events-none transition-all duration-300",
            "text-gray-500 dark:text-gray-400",
            error && "text-red-500"
          )}
          animate={{
            y: showLabel ? -8 : 12,
            scale: showLabel ? 0.85 : 1,
            color: isFocused ? (error ? "#ef4444" : "#3b82f6") : undefined,
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

FloatingInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export { FloatingInput };
export default FloatingInput;
