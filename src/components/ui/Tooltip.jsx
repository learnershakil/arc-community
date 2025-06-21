import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const Tooltip = ({
  children,
  content,
  position = "top",
  delay = 300,
  className = "",
  disabled = false,
  arrow = true,
  theme = "dark",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (disabled) return;

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      calculatePosition();
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let x = 0,
      y = 0;

    switch (position) {
      case "top":
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        y = triggerRect.top - tooltipRect.height - 10;
        break;
      case "bottom":
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        y = triggerRect.bottom + 10;
        break;
      case "left":
        x = triggerRect.left - tooltipRect.width - 10;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        break;
      case "right":
        x = triggerRect.right + 10;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        break;
      default:
        break;
    }

    // Adjust for viewport boundaries
    if (x < 10) x = 10;
    if (x + tooltipRect.width > viewport.width - 10) {
      x = viewport.width - tooltipRect.width - 10;
    }
    if (y < 10) y = 10;
    if (y + tooltipRect.height > viewport.height - 10) {
      y = viewport.height - tooltipRect.height - 10;
    }

    setTooltipPosition({ x, y });
  }, [position]);

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      window.addEventListener("scroll", calculatePosition);
      window.addEventListener("resize", calculatePosition);
    }

    return () => {
      window.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, calculatePosition]);

  const themeClasses = {
    dark: "bg-gray-900 dark:bg-gray-800 text-white border border-gray-700",
    light:
      "bg-white dark:bg-gray-100 text-gray-900 border border-gray-200 shadow-lg",
    primary: "bg-blue-500 text-white border border-blue-600",
    success: "bg-green-500 text-white border border-green-600",
    warning: "bg-yellow-500 text-white border border-yellow-600",
    error: "bg-red-500 text-white border border-red-600",
  };

  const arrowClasses = {
    dark: "border-gray-700",
    light: "border-gray-200",
    primary: "border-blue-600",
    success: "border-green-600",
    warning: "border-yellow-600",
    error: "border-red-600",
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className={`inline-block ${className}`}
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`fixed z-50 px-3 py-2 text-sm rounded-lg backdrop-blur-sm pointer-events-none ${themeClasses[theme]}`}
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
            }}
          >
            {content}

            {arrow && (
              <div
                className={`absolute w-2 h-2 transform rotate-45 ${
                  themeClasses[theme].split(" ")[0]
                } ${arrowClasses[theme]}`}
                style={{
                  [position === "top"
                    ? "bottom"
                    : position === "bottom"
                    ? "top"
                    : position === "left"
                    ? "right"
                    : "left"]: "-4px",
                  [position === "top" || position === "bottom"
                    ? "left"
                    : "top"]: "50%",
                  transform:
                    position === "top" || position === "bottom"
                      ? "translateX(-50%) rotate(45deg)"
                      : "translateY(-50%) rotate(45deg)",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  delay: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  arrow: PropTypes.bool,
  theme: PropTypes.oneOf([
    "dark",
    "light",
    "primary",
    "success",
    "warning",
    "error",
  ]),
};

Tooltip.defaultProps = {
  position: "top",
  delay: 300,
  className: "",
  disabled: false,
  arrow: true,
  theme: "dark",
};

export default Tooltip;
