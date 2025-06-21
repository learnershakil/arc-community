import { motion } from "framer-motion";

const SimpleTest = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">🚀 Learners Arc</h1>
        <p className="text-xl text-gray-300 mb-8">
          Community for Developers & Builders
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Join Community
          </button>
          <button className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SimpleTest;
