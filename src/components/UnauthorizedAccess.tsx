import { motion } from 'framer-motion';
import { AlertCircle, Lock } from 'lucide-react';

export default function UnauthorizedAccess() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 bg-center bg-cover mix-blend-overlay"></div>
      </div>

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-2xl w-full text-center space-y-8"
      >
        {/* Animated Circle with Alert Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 mx-auto"
        >
          <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-blue-500 opacity-20"></div>
          <div className="absolute inset-0 rounded-full border-r-4 border-b-4 border-purple-500 opacity-20 rotate-45"></div>
          <div className="absolute inset-0 rounded-full border-b-4 border-l-4 border-pink-500 opacity-20 rotate-90"></div>
          <AlertCircle className="w-full h-full text-red-500 animate-pulse" />
        </motion.div>

        {/* Title with Animated Gradient Text */}
        <h1 className="text-5xl font-bold">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"
          >
            Access Denied
          </motion.span>
        </h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4 relative"
        >
          <p className="text-xl font-semibold text-gray-300">
            Your IP is not authorized to view this content.
          </p>
          <p className="text-lg text-gray-400">
            Please use the provided OVPN file from Learners ARC to gain access.
          </p>
          <div className="absolute inset-0 blur-3xl bg-blue-500/10 scale-150 animate-pulse"></div>
        </motion.div>

        {/* Lock Icon with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative group"
        >
          <Lock className="w-12 h-12 mx-auto text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
          <div className="absolute inset-0 blur-xl bg-purple-500/30 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </motion.div>

      {/* Background Border Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      </div>

      {/* Footer with Copyright */}
      <motion.div
        className="absolute bottom-4 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Learners ARC
      </motion.div>
    </div>
  );
}
