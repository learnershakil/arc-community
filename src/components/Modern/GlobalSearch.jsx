import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
  TagIcon,
  UserIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Mock data - in a real app, this would come from an API
const searchData = [
  {
    id: 1,
    title: "React Hooks Complete Guide",
    type: "tutorial",
    category: "Frontend",
    url: "/tutorials/react-hooks",
    description: "Comprehensive guide to React Hooks with practical examples",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 2,
    title: "Full Stack Web Development Bootcamp",
    type: "bootcamp",
    category: "Programs",
    url: "/bootcamps/fullstack",
    description: "12-week intensive bootcamp covering frontend and backend",
    tags: ["Bootcamp", "Full Stack", "Web Development"],
  },
  {
    id: 3,
    title: "Sarah Chen - Senior Developer",
    type: "member",
    category: "Community",
    url: "/members/sarah-chen",
    description: "Senior React Developer at TechCorp, Mentor",
    tags: ["React", "Mentor", "Senior"],
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    type: "tutorial",
    category: "Backend",
    url: "/tutorials/nodejs-api",
    description: "Learn to build scalable APIs with Express and Node.js",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    id: 5,
    title: "DevOps Fundamentals",
    type: "bootcamp",
    category: "Programs",
    url: "/bootcamps/devops",
    description: "Master Docker, Kubernetes, and CI/CD pipelines",
    tags: ["DevOps", "Docker", "Kubernetes"],
  },
];

const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  const categories = [
    { id: "all", name: "All", icon: MagnifyingGlassIcon },
    { id: "tutorials", name: "Tutorials", icon: DocumentTextIcon },
    { id: "bootcamps", name: "Bootcamps", icon: AcademicCapIcon },
    { id: "members", name: "Members", icon: UserIcon },
    { id: "docs", name: "Docs", icon: CodeBracketIcon },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "tutorial":
        return DocumentTextIcon;
      case "bootcamp":
        return AcademicCapIcon;
      case "member":
        return UserIcon;
      default:
        return CodeBracketIcon;
    }
  };

  // Load recent searches from localStorage
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem("learners-arc-recent-searches");
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
      // Focus input when opened
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    const timer = setTimeout(() => {
      const filtered = searchData.filter((item) => {
        const matchesQuery =
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          );

        const matchesCategory =
          selectedCategory === "all" ||
          item.type === selectedCategory ||
          item.category.toLowerCase() === selectedCategory;

        return matchesQuery && matchesCategory;
      });

      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, selectedCategory]);

  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) return;

    // Save to recent searches
    const newRecentSearches = [
      searchQuery,
      ...recentSearches.filter((s) => s !== searchQuery),
    ].slice(0, 5);

    setRecentSearches(newRecentSearches);
    localStorage.setItem(
      "learners-arc-recent-searches",
      JSON.stringify(newRecentSearches)
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "Enter" && query.trim()) {
      handleSearch(query);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Search Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl mx-4 glass-card rounded-2xl border border-terminal-green/20 shadow-2xl"
        >
          {/* Search Header */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-700">
            <MagnifyingGlassIcon className="w-6 h-6 text-terminal-green" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search tutorials, bootcamps, members..."
              className="flex-1 bg-transparent text-foreground-primary placeholder-foreground-muted focus:outline-none text-lg"
            />
            <button
              onClick={onClose}
              className="p-2 text-foreground-muted hover:text-foreground-primary transition-colors rounded-lg hover:bg-white/10"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 p-4 border-b border-gray-700 overflow-x-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-terminal-green/20 text-terminal-green border border-terminal-green/30"
                      : "text-foreground-muted hover:text-foreground-primary hover:bg-white/10"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-6 h-6 border-2 border-terminal-green border-t-transparent rounded-full animate-spin" />
              </div>
            ) : query.trim() && results.length === 0 ? (
              <div className="text-center py-12">
                <MagnifyingGlassIcon className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
                <p className="text-foreground-muted">
                  No results found for &ldquo;{query}&rdquo;
                </p>
              </div>
            ) : query.trim() ? (
              <div className="p-4">
                {results.map((result) => {
                  const IconComponent = getTypeIcon(result.type);
                  return (
                    <Link
                      key={result.id}
                      to={result.url}
                      onClick={() => {
                        handleSearch(query);
                        onClose();
                      }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-terminal-green/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-terminal-green" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground-primary group-hover:text-terminal-green transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-sm text-foreground-muted mt-1">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-terminal-green bg-terminal-green/10 px-2 py-1 rounded">
                            {result.category}
                          </span>
                          {result.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-foreground-muted bg-gray-700 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              // Recent searches and suggestions
              <div className="p-4">
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground-primary mb-3 flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      Recent Searches
                    </h3>
                    <div className="space-y-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <ClockIcon className="w-4 h-4 text-foreground-muted" />
                          <span className="text-foreground-secondary group-hover:text-foreground-primary">
                            {search}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-foreground-primary mb-3 flex items-center gap-2">
                    <TagIcon className="w-4 h-4" />
                    Popular Searches
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "React Hooks",
                      "Node.js",
                      "DevOps",
                      "Python",
                      "Docker",
                      "JavaScript",
                    ].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="text-left p-2 rounded-lg hover:bg-white/5 transition-colors text-foreground-muted hover:text-foreground-primary"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Footer */}
          <div className="flex items-center justify-between p-4 border-t border-gray-700 text-xs text-foreground-muted">
            <div className="flex items-center gap-4">
              <span>
                Press <kbd className="px-2 py-1 bg-gray-700 rounded">↵</kbd> to
                search
              </span>
              <span>
                Press <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>{" "}
                to close
              </span>
            </div>
            <span>Powered by Learners Arc Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

GlobalSearch.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GlobalSearch;
