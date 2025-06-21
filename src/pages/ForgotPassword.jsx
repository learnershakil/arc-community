import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import ThemeToggle from "../components/ui/ThemeToggle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic email validation
    if (!email) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center p-4">
        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <motion.div
          className="max-w-md w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
            Check Your Email
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We&apos;ve sent password reset instructions to{" "}
            <strong>{email}</strong>. Check your inbox and follow the link to
            reset your password.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Didn&apos;t receive the email? Check your spam folder or try again
            in a few minutes.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
              }}
              className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Try Different Email
            </button>

            <Link
              to="/signin"
              className="w-full inline-block px-6 py-3 text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Back to Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center p-4">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-primary-500/10 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-accent-500/10 rounded-full"
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300/10 rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="max-w-md w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/20 dark:border-gray-700/20 p-8 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <KeyIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">
            Forgot Password?
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            No worries! Enter your email and we&apos;ll send you reset
            instructions.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-light-text dark:text-dark-text mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your email address"
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <motion.div
              className="text-red-600 dark:text-red-400 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending Instructions...
              </div>
            ) : (
              "Send Reset Instructions"
            )}
          </motion.button>
        </motion.form>

        {/* Back to Sign In */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/signin"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Sign In
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
