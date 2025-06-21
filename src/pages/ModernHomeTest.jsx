import { useEffect } from "react";
import { motion } from "framer-motion";
// import ModernNav from "../components/Modern/ModernNav";
import LocomotiveScroll from "locomotive-scroll";

const ModernHome = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    try {
      const locomotiveScroll = new LocomotiveScroll();
      return () => {
        locomotiveScroll.destroy();
      };
    } catch (error) {
      console.warn("LocomotiveScroll initialization failed:", error);
    }
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-slate-900 text-white"
    >
      {/* Simple Navigation for Testing */}
      <nav className="bg-slate-800 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-400">Learners Arc</h1>
          <div className="space-x-4">
            <button className="text-gray-300 hover:text-white">About</button>
            <button className="text-gray-300 hover:text-white">Team</button>
            <button className="text-gray-300 hover:text-white">Contact</button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
              Join
            </button>
          </div>
        </div>
      </nav>

      {/* Simple Hero for Testing */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-400">Learners Arc</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Community for Developers, Hackers & Builders
        </p>
        <div className="space-x-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Join Community
          </button>
          <button className="px-8 py-4 border border-gray-600 hover:bg-gray-800 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Test Footer */}
      <footer className="py-20 px-6 text-center bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Learners Arc
            </span>
          </div>
          <p className="text-gray-400 mb-8">
            Building the future of tech education through community-driven
            learning.
          </p>
        </div>
      </footer>
    </motion.main>
  );
};

export default ModernHome;
