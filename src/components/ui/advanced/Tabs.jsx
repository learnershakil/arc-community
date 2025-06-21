import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const Tabs = ({
  tabs = [],
  defaultTab = 0,
  onChange,
  className = "",
  variant = "default",
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setActiveTab(index);
    onChange?.(index);
  };

  const variants = {
    default: {
      container: "border-b border-gray-200 dark:border-gray-700",
      tab: "px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
      activeTab: "text-primary-600 dark:text-primary-400",
      indicator: "h-0.5 bg-primary-600",
    },
    pills: {
      container: "bg-gray-100 dark:bg-gray-800 rounded-lg p-1",
      tab: "px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-md transition-colors",
      activeTab:
        "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm",
      indicator: "",
    },
    underline: {
      container: "",
      tab: "px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 border-b-2 border-transparent",
      activeTab:
        "text-primary-600 dark:text-primary-400 border-primary-600 dark:border-primary-400",
      indicator: "",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className={cn("w-full", className)} {...props}>
      {/* Tab Headers */}
      <div className={cn("flex relative", currentVariant.container)}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={cn(
              currentVariant.tab,
              activeTab === index && currentVariant.activeTab,
              "relative whitespace-nowrap focus:outline-none"
            )}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}

            {/* Badge */}
            {tab.badge && (
              <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 dark:bg-gray-700 rounded-full">
                {tab.badge}
              </span>
            )}
          </button>
        ))}

        {/* Moving indicator for default variant */}
        {variant === "default" && (
          <motion.div
            className={currentVariant.indicator}
            layoutId="activeTabIndicator"
            style={{
              position: "absolute",
              bottom: 0,
              left: `${(activeTab / tabs.length) * 100}%`,
              width: `${100 / tabs.length}%`,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[activeTab]?.content}
        </motion.div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.node,
      badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  defaultTab: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "pills", "underline"]),
};

export { Tabs };
export default Tabs;
