import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

const Dropdown = ({
  trigger,
  children,
  position = "bottom-left",
  className = "",
  contentClassName = "",
  disabled = false,
  closeOnClick = true,
  arrow = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (
      triggerRef.current &&
      !triggerRef.current.contains(event.target) &&
      contentRef.current &&
      !contentRef.current.contains(event.target)
    ) {
      closeDropdown();
    }
  }, []);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let x = 0,
      y = 0;

    switch (position) {
      case "bottom-left":
        x = triggerRect.left;
        y = triggerRect.bottom + 8;
        break;
      case "bottom-right":
        x = triggerRect.right - contentRect.width;
        y = triggerRect.bottom + 8;
        break;
      case "top-left":
        x = triggerRect.left;
        y = triggerRect.top - contentRect.height - 8;
        break;
      case "top-right":
        x = triggerRect.right - contentRect.width;
        y = triggerRect.top - contentRect.height - 8;
        break;
      case "left":
        x = triggerRect.left - contentRect.width - 8;
        y = triggerRect.top;
        break;
      case "right":
        x = triggerRect.right + 8;
        y = triggerRect.top;
        break;
      default:
        break;
    }

    // Adjust for viewport boundaries
    if (x < 8) x = 8;
    if (x + contentRect.width > viewport.width - 8) {
      x = viewport.width - contentRect.width - 8;
    }
    if (y < 8) y = 8;
    if (y + contentRect.height > viewport.height - 8) {
      y = viewport.height - contentRect.height - 8;
    }

    setDropdownPosition({ x, y });
  }, [position]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeDropdown();
      });

      // Calculate position after component mounts
      setTimeout(calculatePosition, 0);
      window.addEventListener("scroll", calculatePosition);
      window.addEventListener("resize", calculatePosition);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [isOpen, handleClickOutside, calculatePosition]);

  const handleContentClick = (event) => {
    if (closeOnClick) {
      closeDropdown();
    }
    event.stopPropagation();
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Trigger */}
      <div
        ref={triggerRef}
        onClick={toggleDropdown}
        className={`cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {trigger}
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm min-w-32 ${contentClassName}`}
            style={{
              left: dropdownPosition.x,
              top: dropdownPosition.y,
            }}
            onClick={handleContentClick}
          >
            {arrow && (
              <div
                className="absolute w-2 h-2 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"
                style={{
                  [position.includes("bottom") ? "top" : "bottom"]: "-4px",
                  [position.includes("left") ? "left" : "right"]: "12px",
                }}
              />
            )}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Dropdown Item Component
const DropdownItem = ({
  children,
  onClick,
  disabled = false,
  selected = false,
  icon,
  className = "",
  variant = "default",
}) => {
  const handleClick = (event) => {
    if (disabled) return;
    onClick?.(event);
  };

  const variantClasses = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-700",
    danger:
      "hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400",
    success:
      "hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 dark:text-green-400",
  };

  return (
    <motion.div
      whileHover={{ x: 2 }}
      onClick={handleClick}
      className={`
        flex items-center gap-3 px-4 py-2 text-sm cursor-pointer transition-colors
        ${disabled ? "opacity-50 cursor-not-allowed" : variantClasses[variant]}
        ${
          selected
            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            : "text-gray-700 dark:text-gray-300"
        }
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {selected && <CheckIcon className="w-4 h-4 text-blue-500" />}
    </motion.div>
  );
};

// Dropdown Divider Component
const DropdownDivider = () => (
  <div className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
);

// Dropdown Header Component
const DropdownHeader = ({ children, className = "" }) => (
  <div
    className={`px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${className}`}
  >
    {children}
  </div>
);

// Select Dropdown Component
const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select option...",
  disabled = false,
  className = "",
  multiple = false,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = multiple
    ? options.filter((option) => value?.includes(option.value))
    : options.find((option) => option.value === value);

  const handleSelect = (option) => {
    if (multiple) {
      const newValue = value?.includes(option.value)
        ? value.filter((v) => v !== option.value)
        : [...(value || []), option.value];
      onChange?.(newValue);
    } else {
      onChange?.(option.value);
      setIsOpen(false);
    }
  };

  const displayValue =
    multiple && selectedOption?.length > 0
      ? `${selectedOption.length} selected`
      : selectedOption?.label || placeholder;

  const trigger = (
    <div
      className={`
      flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 
      border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer
      hover:border-gray-400 dark:hover:border-gray-500 transition-colors
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className}
    `}
    >
      <span
        className={`${
          !selectedOption
            ? "text-gray-500 dark:text-gray-400"
            : "text-gray-900 dark:text-white"
        }`}
      >
        {displayValue}
      </span>
      <ChevronDownIcon
        className={`w-4 h-4 text-gray-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  );

  return (
    <Dropdown
      trigger={trigger}
      isOpen={isOpen}
      onToggle={setIsOpen}
      disabled={disabled}
      closeOnClick={!multiple}
      contentClassName="max-h-60 overflow-y-auto"
    >
      {searchable && (
        <div className="p-2 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-1 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {filteredOptions.length === 0 ? (
        <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
          No options found
        </div>
      ) : (
        filteredOptions.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleSelect(option)}
            selected={
              multiple ? value?.includes(option.value) : value === option.value
            }
            disabled={option.disabled}
          >
            {option.label}
          </DropdownItem>
        ))
      )}
    </Dropdown>
  );
};

// PropTypes
Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "bottom-left",
    "bottom-right",
    "top-left",
    "top-right",
    "left",
    "right",
  ]),
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disabled: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  arrow: PropTypes.bool,
};

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "danger", "success"]),
};

DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  searchable: PropTypes.bool,
};

// Default props
Dropdown.defaultProps = {
  position: "bottom-left",
  className: "",
  contentClassName: "",
  disabled: false,
  closeOnClick: true,
  arrow: false,
};

DropdownItem.defaultProps = {
  onClick: null,
  disabled: false,
  selected: false,
  icon: null,
  className: "",
  variant: "default",
};

DropdownHeader.defaultProps = {
  className: "",
};

Select.defaultProps = {
  options: [],
  value: null,
  onChange: null,
  placeholder: "Select option...",
  disabled: false,
  className: "",
  multiple: false,
  searchable: false,
};

export default Dropdown;
export { DropdownItem, DropdownDivider, DropdownHeader, Select };
