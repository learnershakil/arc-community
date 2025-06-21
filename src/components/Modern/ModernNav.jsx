import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Badge } from "../ui";
import ThemeToggle from "../ui/ThemeToggle";
import GlobalSearch from "./GlobalSearch";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ModernNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "home", label: "Home", href: "/", icon: HomeIcon },
    { id: "about", label: "About", href: "/about", icon: BookOpenIcon },
    { id: "team", label: "Team", href: "/team", icon: UsersIcon },
    {
      id: "woc",
      label: "Winter of Code",
      href: "/woc-register",
      icon: AcademicCapIcon,
      badge: "New",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
      icon: ChatBubbleLeftRightIcon,
    },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/10 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Learners <span className="gradient-text">Arc</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                      activeItem === item.id
                        ? "bg-white/10 text-white"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge variant="accent" size="sm">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>

                  {/* Active indicator */}
                  {activeItem === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary-400 rounded-full"
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </motion.button>
              <ThemeToggle />
              <Link to="/signin">
                <Button variant="ghost" size="md">
                  Sign In
                </Button>
              </Link>
              <Link to="/apply">
                <Button variant="gradient" size="md">
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden overflow-hidden"
              >
                <div className="py-6 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={mobileItemVariants}
                      custom={index}
                    >
                      <Link
                        to={item.href}
                        onClick={() => {
                          setActiveItem(item.id);
                          setIsOpen(false);
                        }}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          activeItem === item.id
                            ? "bg-white/10 text-white"
                            : "text-neutral-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {item.badge && (
                          <Badge variant="accent" size="sm">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA Buttons */}
                  <motion.div
                    variants={mobileItemVariants}
                    className="pt-4 space-y-3"
                  >
                    <Link to="/signin" className="block">
                      <Button
                        variant="ghost"
                        size="md"
                        className="w-full justify-center"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/apply" className="block">
                      <Button
                        variant="gradient"
                        size="md"
                        className="w-full justify-center"
                        onClick={() => setIsOpen(false)}
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Backdrop Blur for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Global Search */}
      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default ModernNav;
