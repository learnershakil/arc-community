import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  useEffect(() => {
    if (closeOnEscape) {
      const handleEscape = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [closeOnEscape, onClose]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />

          {/* Modal */}
          <motion.div
            className={cn(
              "relative w-full glass-card rounded-xl shadow-2xl border border-white/20",
              sizes[size],
              className
            )}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                {title && (
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  showCloseButton: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
};

export { Modal };
export default Modal;
