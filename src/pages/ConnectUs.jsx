import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ui/ThemeToggle";

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-6 sm:p-8 lg:p-12">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Page Title with animation */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-primary-600 dark:text-primary-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Connect with Us
      </motion.h1>

      {/* Social Media Links with animation */}
      <motion.div
        className="social-links text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-xl sm:text-2xl font-medium mb-4 text-primary-600 dark:text-primary-400">
          Follow Us
        </h2>
        <ul className="flex flex-wrap justify-center gap-8">
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="mailto:contact@learnersarc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Form Section with animation */}
      <motion.div
        className="contact-form bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-primary-800/20 shadow-lg p-6 sm:p-8 lg:p-10 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-medium mb-6 text-center text-primary-600 dark:text-primary-400">
          Submit Your Query
        </h2>
        {formSubmitted && (
          <motion.div
            className="text-green-600 dark:text-green-400 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p>Thank you for reaching out! We&apos;ll get back to you soon.</p>
          </motion.div>
        )}
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.2 }}
          >
            <label
              htmlFor="name"
              className="block text-base sm:text-lg mb-2 text-light-text dark:text-dark-text"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-light-text dark:text-dark-text"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.2 }}
          >
            <label
              htmlFor="email"
              className="block text-base sm:text-lg mb-2 text-light-text dark:text-dark-text"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-light-text dark:text-dark-text"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.2 }}
          >
            <label
              htmlFor="message"
              className="block text-base sm:text-lg mb-2 text-light-text dark:text-dark-text"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-light-text dark:text-dark-text"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 text-white text-lg sm:text-xl rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ConnectUs;
