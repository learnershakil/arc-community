import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ContributionGraph = ({
  data,
  weeks = 53,
  title = "Contribution Activity",
  showTooltip = true,
  colorScheme = "github",
}) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate contribution data if not provided
  const contributionData = useMemo(() => {
    if (data) return data;

    const generatedData = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - weeks * 7);

    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + week * 7 + day);

        // Generate realistic contribution patterns
        const isWeekend = day === 0 || day === 6;
        const randomFactor = Math.random();

        let level = 0;
        if (randomFactor > 0.7) level = Math.floor(randomFactor * 4) + 1;
        if (isWeekend && randomFactor > 0.9)
          level = Math.floor(randomFactor * 3) + 1;

        weekData.push({
          date: date.toISOString().split("T")[0],
          level: Math.min(level, 4),
          count: level * (Math.floor(Math.random() * 10) + 1),
        });
      }
      generatedData.push(weekData);
    }

    return generatedData;
  }, [data, weeks]);

  // Color schemes
  const colorSchemes = {
    github: {
      levels: [
        "bg-gray-100 dark:bg-gray-800",
        "bg-green-200 dark:bg-green-900",
        "bg-green-400 dark:bg-green-700",
        "bg-green-600 dark:bg-green-500",
        "bg-green-800 dark:bg-green-300",
      ],
    },
    blue: {
      levels: [
        "bg-gray-100 dark:bg-gray-800",
        "bg-blue-200 dark:bg-blue-900",
        "bg-blue-400 dark:bg-blue-700",
        "bg-blue-600 dark:bg-blue-500",
        "bg-blue-800 dark:bg-blue-300",
      ],
    },
    purple: {
      levels: [
        "bg-gray-100 dark:bg-gray-800",
        "bg-purple-200 dark:bg-purple-900",
        "bg-purple-400 dark:bg-purple-700",
        "bg-purple-600 dark:bg-purple-500",
        "bg-purple-800 dark:bg-purple-300",
      ],
    },
  };

  const currentColorScheme = colorSchemes[colorScheme] || colorSchemes.github;

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const getMonthLabels = () => {
    const months = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - weeks * 7);

    for (let week = 0; week < weeks; week += 4) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + week * 7);
      months.push({
        label: date.toLocaleDateString("en-US", { month: "short" }),
        week: week,
      });
    }

    return months;
  };

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {currentColorScheme.levels.map((color, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-sm ${color} border border-gray-200 dark:border-gray-700`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Graph Container */}
      <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        {/* Month labels */}
        <div className="flex mb-2">
          <div className="w-10"></div> {/* Space for day labels */}
          <div className="flex-1 relative">
            {getMonthLabels().map((month, index) => (
              <div
                key={index}
                className="absolute text-xs text-gray-500 dark:text-gray-400"
                style={{ left: `${(month.week / weeks) * 100}%` }}
              >
                {month.label}
              </div>
            ))}
          </div>
        </div>

        {/* Graph */}
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col gap-1 mr-2 mt-2">
            {dayLabels.map((day, index) => (
              <div
                key={day}
                className={`text-xs text-gray-500 dark:text-gray-400 h-3 flex items-center ${
                  index % 2 === 1 ? "opacity-100" : "opacity-0"
                }`}
                style={{ fontSize: "10px" }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="flex gap-1">
            {contributionData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm cursor-pointer border border-gray-200 dark:border-gray-700 ${
                      currentColorScheme.levels[day.level]
                    }`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: (weekIndex * 7 + dayIndex) * 0.002,
                      duration: 0.2,
                    }}
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => {
                      if (showTooltip) {
                        setHoveredCell({
                          date: day.date,
                          count: day.count,
                          level: day.level,
                        });
                      }
                    }}
                    onMouseLeave={() => setHoveredCell(null)}
                    onMouseMove={handleMouseMove}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div>
            Total contributions:{" "}
            {contributionData.flat().reduce((sum, day) => sum + day.count, 0)}
          </div>
          <div>Longest streak: {Math.floor(Math.random() * 50) + 10} days</div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && hoveredCell && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 10,
            transform: "translateY(-100%)",
          }}
        >
          <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg px-3 py-2 shadow-lg border border-gray-700 dark:border-gray-600">
            <div className="font-semibold">
              {hoveredCell.count} contributions
            </div>
            <div className="text-gray-300">
              {new Date(hoveredCell.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

ContributionGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  weeks: PropTypes.number,
  title: PropTypes.string,
  showTooltip: PropTypes.bool,
  colorScheme: PropTypes.oneOf(["github", "blue", "purple"]),
};

ContributionGraph.defaultProps = {
  data: null,
  weeks: 53,
  title: "Contribution Activity",
  showTooltip: true,
  colorScheme: "github",
};

export default ContributionGraph;
