/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";

// Advanced Modal Component
export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  closeOnOverlayClick = true,
  showCloseButton = true,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl",
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeOnOverlayClick ? onClose : undefined}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "relative w-full glass border border-white/20 rounded-2xl shadow-2xl",
              sizes[size],
              className
            )}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                {title && (
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                )}
                {showCloseButton && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Toast Notification System
export const Toast = ({
  message,
  type = "info",
  duration = 5000,
  onClose,
  position = "top-right",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const types = {
    success: {
      icon: CheckIcon,
      className: "bg-success-600/20 border-success-500/50 text-success-300",
    },
    error: {
      icon: XCircleIcon,
      className: "bg-error-600/20 border-error-500/50 text-error-300",
    },
    warning: {
      icon: ExclamationTriangleIcon,
      className: "bg-warning-600/20 border-warning-500/50 text-warning-300",
    },
    info: {
      icon: InformationCircleIcon,
      className: "bg-primary-600/20 border-primary-500/50 text-primary-300",
    },
  };

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  const Icon = types[type].icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={cn(
            "fixed z-50 flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm border max-w-sm",
            types[type].className,
            positions[position]
          )}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{message}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(false)}
            className="ml-auto p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Advanced Loading Skeleton
export const Skeleton = ({
  width = "w-full",
  height = "h-4",
  className,
  rounded = "rounded-lg",
  animation = true,
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-800/50",
        width,
        height,
        rounded,
        animation && "skeleton",
        className
      )}
    />
  );
};

// Loading States Component
export const LoadingState = ({
  type = "spinner",
  size = "md",
  text,
  className,
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  if (type === "spinner") {
    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={cn(
            "border-4 border-neutral-700 border-t-primary-500 rounded-full",
            sizes[size]
          )}
        />
        {text && <p className="text-neutral-300 text-sm">{text}</p>}
      </div>
    );
  }

  if (type === "dots") {
    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="w-3 h-3 bg-primary-500 rounded-full"
            />
          ))}
        </div>
        {text && <p className="text-neutral-300 text-sm">{text}</p>}
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className={cn(
            "bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl",
            sizes[size]
          )}
        />
        {text && <p className="text-neutral-300 text-sm">{text}</p>}
      </div>
    );
  }

  return null;
};

// Form Field with Floating Label
export const FloatingInput = ({
  label,
  type = "text",
  error,
  required = false,
  className,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <input
        {...props}
        type={type}
        className={cn(
          "peer w-full px-4 py-4 bg-neutral-900/50 border rounded-xl text-white placeholder-transparent transition-all duration-200",
          "focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none",
          error ? "border-error-500" : "border-neutral-700",
          "pt-6"
        )}
        placeholder={label}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />

      <motion.label
        animate={{
          y: focused || hasValue ? -8 : 8,
          scale: focused || hasValue ? 0.85 : 1,
          color: focused ? "#6366f1" : error ? "#ef4444" : "#a1a1aa",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-4 pointer-events-none origin-left"
      >
        {label}
        {required && <span className="text-error-500 ml-1">*</span>}
      </motion.label>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-error-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// Toggle Switch
export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  className,
}) => {
  const sizes = {
    sm: { container: "w-8 h-4", thumb: "w-3 h-3" },
    md: { container: "w-12 h-6", thumb: "w-5 h-5" },
    lg: { container: "w-16 h-8", thumb: "w-7 h-7" },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center rounded-full transition-colors duration-200",
        sizes[size].container,
        checked ? "bg-primary-600" : "bg-neutral-700",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <motion.span
        animate={{
          x: checked ? (size === "sm" ? 16 : size === "md" ? 24 : 32) : 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "inline-block bg-white rounded-full shadow-lg",
          sizes[size].thumb
        )}
      />
    </motion.button>
  );
};

// Tab Component
export const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
  className,
}) => {
  const variants = {
    default: "border-b border-neutral-800",
    pills: "bg-neutral-900/50 rounded-xl p-1",
    underline: "border-b-2 border-transparent",
  };

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("flex", variants[variant])}>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-all duration-200",
              variant === "pills" && "rounded-lg",
              activeTab === tab.id
                ? "text-white bg-white/10"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            )}
          >
            {tab.label}
            {activeTab === tab.id && variant === "underline" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default {
  Modal,
  Toast,
  Skeleton,
  LoadingState,
  FloatingInput,
  Toggle,
  Tabs,
};
