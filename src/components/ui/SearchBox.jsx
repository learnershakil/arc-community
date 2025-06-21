import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
  CommandLineIcon,
  DocumentIcon,
  UserIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline";

const SearchBox = ({
  placeholder = "Search community...",
  data = [],
  onSearch,
  onSelect,
  className = "",
  showRecentSearches = true,
  maxResults = 10,
  categories = ["all", "members", "projects", "bootcamps", "resources"],
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [recentSearches, setRecentSearches] = useState([]);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Fuzzy search implementation
  const fuzzySearch = useCallback(
    (items, searchQuery) => {
      if (!searchQuery.trim()) return [];

      const query = searchQuery.toLowerCase();

      return items
        .map((item) => {
          const title = item.title?.toLowerCase() || "";
          const description = item.description?.toLowerCase() || "";
          const tags = item.tags?.join(" ").toLowerCase() || "";
          const searchText = `${title} ${description} ${tags}`;

          // Calculate relevance score
          let score = 0;

          // Exact matches get highest score
          if (title.includes(query)) score += 100;
          if (description.includes(query)) score += 50;
          if (tags.includes(query)) score += 30;

          // Fuzzy matching
          const words = query.split(" ");
          words.forEach((word) => {
            if (searchText.includes(word)) {
              score += 20;
            }
          });

          // Title starts with query gets bonus
          if (title.startsWith(query)) score += 50;

          return { ...item, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);
    },
    [maxResults]
  );

  // Filter results by category
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];

    let filtered = data;
    if (selectedCategory !== "all") {
      filtered = data.filter((item) => item.category === selectedCategory);
    }

    return fuzzySearch(filtered, query);
  }, [data, query, selectedCategory, fuzzySearch]);

  useEffect(() => {
    setResults(filteredResults);
  }, [filteredResults]);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem("learners-arc-recent-searches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        console.warn("Failed to load recent searches:", error);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    onSearch?.(value);
  };

  const handleSelect = (item) => {
    setQuery(item.title);
    setIsOpen(false);

    // Add to recent searches
    const updated = [
      item,
      ...recentSearches.filter((r) => r.id !== item.id),
    ].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem(
      "learners-arc-recent-searches",
      JSON.stringify(updated)
    );

    onSelect?.(item);
  };

  const handleRecentSelect = (search) => {
    setQuery(search.title);
    setIsOpen(false);
    onSelect?.(search);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("learners-arc-recent-searches");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getItemIcon = (category) => {
    switch (category) {
      case "members":
        return UserIcon;
      case "projects":
        return DocumentIcon;
      case "bootcamps":
        return CommandLineIcon;
      case "resources":
        return HashtagIcon;
      default:
        return DocumentIcon;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-2xl ${className}`}
    >
      {/* Search Input */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              inputRef.current?.focus();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <XMarkIcon className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm z-50 max-h-96 overflow-hidden"
          >
            {/* Categories */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="max-h-80 overflow-y-auto">
              {/* Search Results */}
              {query.trim() && results.length > 0 && (
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wider">
                    Search Results ({results.length})
                  </div>
                  {results.map((item) => {
                    const Icon = getItemIcon(item.category);
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => handleSelect(item)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                      >
                        <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white truncate">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {item.description}
                            </div>
                          )}
                          {item.tags && (
                            <div className="flex gap-1 mt-1">
                              {item.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-400 flex-shrink-0">
                          {item.category}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* No Results */}
              {query.trim() && results.length === 0 && (
                <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                  <MagnifyingGlassIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <div className="font-medium">No results found</div>
                  <div className="text-sm">Try adjusting your search terms</div>
                </div>
              )}

              {/* Recent Searches */}
              {!query.trim() &&
                showRecentSearches &&
                recentSearches.length > 0 && (
                  <div className="p-2">
                    <div className="flex items-center justify-between px-3 py-2">
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Recent Searches
                      </div>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                    {recentSearches.map((search) => {
                      const Icon = getItemIcon(search.category);
                      return (
                        <button
                          key={`recent-${search.id}`}
                          onClick={() => handleRecentSelect(search)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                        >
                          <ClockIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 dark:text-white truncate">
                              {search.title}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

              {/* Empty State */}
              {!query.trim() &&
                (!showRecentSearches || recentSearches.length === 0) && (
                  <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                    <MagnifyingGlassIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <div className="font-medium">Start typing to search</div>
                    <div className="text-sm">
                      Find members, projects, bootcamps, and more
                    </div>
                  </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  showRecentSearches: PropTypes.bool,
  maxResults: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string),
};

SearchBox.defaultProps = {
  placeholder: "Search community...",
  data: [],
  onSearch: null,
  onSelect: null,
  className: "",
  showRecentSearches: true,
  maxResults: 10,
  categories: ["all", "members", "projects", "bootcamps", "resources"],
};

export default SearchBox;
