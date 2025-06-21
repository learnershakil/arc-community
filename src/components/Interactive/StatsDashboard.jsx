import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  UsersIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  TrophyIcon,
  FireIcon,
  ChartBarIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const StatsDashboard = ({
  stats,
  title = "Community Stats",
  animated = true,
  refreshInterval = null,
}) => {
  const [animatedStats, setAnimatedStats] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const defaultStats = {
    members: {
      value: 2847,
      label: "Active Members",
      icon: UsersIcon,
      color: "blue",
    },
    projects: {
      value: 156,
      label: "Projects Built",
      icon: CodeBracketIcon,
      color: "green",
    },
    sessions: {
      value: 892,
      label: "Learning Sessions",
      icon: AcademicCapIcon,
      color: "purple",
    },
    achievements: {
      value: 1247,
      label: "Achievements",
      icon: TrophyIcon,
      color: "yellow",
    },
    streaks: {
      value: 43,
      label: "Longest Streak",
      icon: FireIcon,
      color: "red",
    },
    hours: {
      value: 18429,
      label: "Learning Hours",
      icon: ClockIcon,
      color: "indigo",
    },
    countries: {
      value: 47,
      label: "Countries",
      icon: GlobeAltIcon,
      color: "cyan",
    },
    rating: {
      value: 4.8,
      label: "Community Rating",
      icon: ChartBarIcon,
      color: "pink",
    },
  };

  const currentStats = stats || defaultStats;

  // Animation for counting up numbers
  const animateNumber = (start, end, duration = 2000) => {
    return new Promise((resolve) => {
      let startTime = null;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);

        setAnimatedStats((prev) => ({
          ...prev,
          [start]: current,
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animate);
    });
  };

  // Initialize animated stats
  useEffect(() => {
    if (animated) {
      Object.entries(currentStats).forEach(([, stat]) => {
        animateNumber(0, stat.value);
      });
    } else {
      const staticStats = {};
      Object.entries(currentStats).forEach(([key, stat]) => {
        staticStats[key] = stat.value;
      });
      setAnimatedStats(staticStats);
    }
  }, [currentStats, animated]);

  // Auto refresh functionality
  useEffect(() => {
    if (refreshInterval) {
      const interval = setInterval(() => {
        setIsRefreshing(true);
        setTimeout(() => {
          setIsRefreshing(false);
          // Simulate new data
          Object.entries(currentStats).forEach(([, stat]) => {
            const variance = Math.floor(Math.random() * 10) - 5;
            animateNumber(stat.value, stat.value + variance);
          });
        }, 500);
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  }, [refreshInterval, currentStats]);

  const colorSchemes = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    yellow: "from-yellow-500 to-yellow-600",
    red: "from-red-500 to-red-600",
    indigo: "from-indigo-500 to-indigo-600",
    cyan: "from-cyan-500 to-cyan-600",
    pink: "from-pink-500 to-pink-600",
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time community metrics and achievements
          </p>
        </div>

        {refreshInterval && (
          <motion.div
            animate={isRefreshing ? { rotate: 360 } : {}}
            transition={{ duration: 1, ease: "linear" }}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <ChartBarIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(currentStats).map(([key, stat], index) => {
          const Icon = stat.icon;
          const animatedValue = animatedStats[key] || 0;

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    colorSchemes[stat.color]
                  } opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and value */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${
                        colorSchemes[stat.color]
                      } shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <motion.div
                      key={animatedValue}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.3 }}
                      className="text-right"
                    >
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {key === "rating"
                          ? animatedValue.toFixed(1)
                          : formatNumber(animatedValue)}
                        {key === "rating" && (
                          <span className="text-yellow-500 ml-1">★</span>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>

                  {/* Progress bar (optional) */}
                  <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          (animatedValue / stat.value) * 100,
                          100
                        )}%`,
                      }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${
                        colorSchemes[stat.color]
                      }`}
                    />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                    colorSchemes[stat.color]
                  } opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500 rounded-lg">
            <ChartBarIcon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Growth Insights
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-gray-600 dark:text-gray-400">
            <span className="font-medium text-green-600 dark:text-green-400">
              ↗ 23%
            </span>{" "}
            growth in active members this month
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            <span className="font-medium text-blue-600 dark:text-blue-400">
              ↗ 15%
            </span>{" "}
            increase in learning sessions
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            <span className="font-medium text-purple-600 dark:text-purple-400">
              ↗ 31%
            </span>{" "}
            more projects completed
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

StatsDashboard.propTypes = {
  stats: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
  animated: PropTypes.bool,
  refreshInterval: PropTypes.number,
};

StatsDashboard.defaultProps = {
  stats: null,
  title: "Community Stats",
  animated: true,
  refreshInterval: null,
};

export default StatsDashboard;
