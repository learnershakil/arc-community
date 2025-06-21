import { createContext, useContext, useReducer, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Toast Context
const ToastContext = createContext();

// Toast Types
const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

// Toast Actions
const TOAST_ACTIONS = {
  ADD_TOAST: "ADD_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
  CLEAR_ALL: "CLEAR_ALL",
};

// Toast Reducer
const toastReducer = (state, action) => {
  switch (action.type) {
    case TOAST_ACTIONS.ADD_TOAST:
      return [...state, action.payload];
    case TOAST_ACTIONS.REMOVE_TOAST:
      return state.filter((toast) => toast.id !== action.payload);
    case TOAST_ACTIONS.CLEAR_ALL:
      return [];
    default:
      return state;
  }
};

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

// Toast Provider
export const ToastProvider = ({
  children,
  position = "top-right",
  maxToasts = 5,
}) => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const addToast = (toast) => {
    const id = generateId();
    const newToast = {
      id,
      type: TOAST_TYPES.INFO,
      duration: 5000,
      ...toast,
    };

    dispatch({ type: TOAST_ACTIONS.ADD_TOAST, payload: newToast });

    // Auto remove toast
    if (newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  };

  const removeToast = (id) => {
    dispatch({ type: TOAST_ACTIONS.REMOVE_TOAST, payload: id });
  };

  const clearAll = () => {
    dispatch({ type: TOAST_ACTIONS.CLEAR_ALL });
  };

  // Limit number of toasts
  useEffect(() => {
    if (toasts.length > maxToasts) {
      const excess = toasts.length - maxToasts;
      for (let i = 0; i < excess; i++) {
        removeToast(toasts[i].id);
      }
    }
  }, [toasts, maxToasts]);

  const value = {
    toasts,
    addToast,
    removeToast,
    clearAll,
    // Convenience methods
    success: (message, options = {}) =>
      addToast({ ...options, type: TOAST_TYPES.SUCCESS, message }),
    error: (message, options = {}) =>
      addToast({ ...options, type: TOAST_TYPES.ERROR, message }),
    warning: (message, options = {}) =>
      addToast({ ...options, type: TOAST_TYPES.WARNING, message }),
    info: (message, options = {}) =>
      addToast({ ...options, type: TOAST_TYPES.INFO, message }),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer
        position={position}
        toasts={toasts}
        onRemove={removeToast}
      />
    </ToastContext.Provider>
  );
};

// Toast Hook
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Toast Container
const ToastContainer = ({ position, toasts, onRemove }) => {
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div
      className={`fixed z-50 flex flex-col gap-2 ${positionClasses[position]} max-w-sm w-full`}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Individual Toast Component
const Toast = ({ toast, onRemove }) => {
  const { id, type, message, title, action, icon: customIcon } = toast;

  const typeConfig = {
    [TOAST_TYPES.SUCCESS]: {
      icon: CheckCircleIcon,
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-700",
      iconColor: "text-green-500 dark:text-green-400",
      textColor: "text-green-800 dark:text-green-200",
    },
    [TOAST_TYPES.ERROR]: {
      icon: XCircleIcon,
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-700",
      iconColor: "text-red-500 dark:text-red-400",
      textColor: "text-red-800 dark:text-red-200",
    },
    [TOAST_TYPES.WARNING]: {
      icon: ExclamationTriangleIcon,
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-700",
      iconColor: "text-yellow-500 dark:text-yellow-400",
      textColor: "text-yellow-800 dark:text-yellow-200",
    },
    [TOAST_TYPES.INFO]: {
      icon: InformationCircleIcon,
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      iconColor: "text-blue-500 dark:text-blue-400",
      textColor: "text-blue-800 dark:text-blue-200",
    },
  };

  const config = typeConfig[type] || typeConfig[TOAST_TYPES.INFO];
  const Icon = customIcon || config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={`
        relative p-4 rounded-lg shadow-lg border backdrop-blur-sm
        ${config.bgColor} ${config.borderColor}
      `}
    >
      {/* Content */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 ${config.iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          {title && (
            <div className={`font-semibold mb-1 ${config.textColor}`}>
              {title}
            </div>
          )}
          <div className={`text-sm ${config.textColor}`}>{message}</div>

          {/* Action Button */}
          {action && (
            <div className="mt-2">
              <button
                onClick={action.onClick}
                className={`
                  text-xs font-medium underline hover:no-underline transition-colors
                  ${config.iconColor}
                `}
              >
                {action.label}
              </button>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => onRemove(id)}
          className={`
            flex-shrink-0 p-1 rounded transition-colors
            ${config.textColor} hover:bg-black/10 dark:hover:bg-white/10
          `}
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar (for timed toasts) */}
      {toast.duration > 0 && (
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: toast.duration / 1000, ease: "linear" }}
          className={`absolute bottom-0 left-0 h-1 rounded-b-lg ${config.iconColor.replace(
            "text-",
            "bg-"
          )}`}
        />
      )}
    </motion.div>
  );
};

// PropTypes
ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "top-center",
    "bottom-right",
    "bottom-left",
    "bottom-center",
  ]),
  maxToasts: PropTypes.number,
};

ToastContainer.propTypes = {
  position: PropTypes.string.isRequired,
  toasts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

Toast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(TOAST_TYPES)).isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    duration: PropTypes.number,
    action: PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
    icon: PropTypes.elementType,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

// Default Props
ToastProvider.defaultProps = {
  position: "top-right",
  maxToasts: 5,
};

export default Toast;
export { TOAST_TYPES };
