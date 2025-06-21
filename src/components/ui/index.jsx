/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Modern Button Component
export const Button = React.forwardRef(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

    const variants = {
      primary:
        "bg-primary-600 hover:bg-primary-700 text-white shadow-soft hover:shadow-glow",
      secondary: "glass text-white hover:bg-white/10 border border-white/20",
      accent: "bg-accent-600 hover:bg-accent-700 text-white shadow-soft",
      outline:
        "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
      ghost: "text-neutral-300 hover:text-white hover:bg-white/5",
      gradient:
        "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-glow hover:shadow-glow-lg",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-lg",
      md: "px-4 py-2 text-base rounded-xl",
      lg: "px-6 py-3 text-lg rounded-2xl",
      xl: "px-8 py-4 text-xl rounded-2xl",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <span className={cn("flex items-center gap-2", loading && "opacity-0")}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Modern Card Component
export const Card = React.forwardRef(
  (
    { children, className, variant = "default", hover = false, ...props },
    ref
  ) => {
    const baseStyles = "rounded-2xl border transition-all duration-300";

    const variants = {
      default: "surface shadow-soft",
      glass: "glass shadow-medium",
      gradient:
        "bg-gradient-mesh from-neutral-900/50 to-neutral-800/50 border-white/10 shadow-medium",
      glow: "surface shadow-glow border-primary-500/20",
    };

    const hoverStyles = hover
      ? "hover:scale-[1.02] hover:shadow-glow cursor-pointer"
      : "";

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Modern Input Component
export const Input = React.forwardRef(
  (
    { className, type = "text", label, error, leftIcon, rightIcon, ...props },
    ref
  ) => {
    const baseStyles =
      "w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 transition-all duration-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none";

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-neutral-300">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              baseStyles,
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error &&
                "border-error-500 focus:border-error-500 focus:ring-error-500",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-error-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

// Modern Badge Component
export const Badge = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const variants = {
    default: "bg-neutral-800 text-neutral-300 border border-neutral-700",
    primary: "bg-primary-600/20 text-primary-300 border border-primary-500/30",
    accent: "bg-accent-600/20 text-accent-300 border border-accent-500/30",
    success: "bg-success-600/20 text-success-300 border border-success-500/30",
    warning: "bg-warning-600/20 text-warning-300 border border-warning-500/30",
    error: "bg-error-600/20 text-error-300 border border-error-500/30",
    glass: "glass text-white border border-white/20",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};

// Modern Spinner Component
export const Spinner = ({ size = "md", className }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-primary-200 border-t-primary-600",
        sizes[size],
        className
      )}
    />
  );
};

// Modern Avatar Component
export const Avatar = ({
  src,
  alt,
  size = "md",
  fallback,
  className,
  ...props
}) => {
  const sizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-xl",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-neutral-800 text-neutral-300 font-medium overflow-hidden",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
};

// Modern Progress Component
export const Progress = ({
  value = 0,
  max = 100,
  className,
  variant = "primary",
  size = "md",
  showValue = false,
  ...props
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const variants = {
    primary: "bg-primary-600",
    accent: "bg-accent-600",
    success: "bg-success-600",
    warning: "bg-warning-600",
    error: "bg-error-600",
  };

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div
      className={cn(
        "w-full bg-neutral-800 rounded-full overflow-hidden",
        sizes[size],
        className
      )}
      {...props}
    >
      <motion.div
        className={cn("h-full rounded-full", variants[variant])}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {showValue && (
        <div className="mt-1 text-sm text-neutral-400 text-center">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default {
  Button,
  Card,
  Input,
  Badge,
  Spinner,
  Avatar,
  Progress,
};
