import { motion } from "framer-motion";
import ThemeToggle from "../components/ui/ThemeToggle";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  UsersIcon,
  SparklesIcon,
  RocketLaunchIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const stats = [
    { label: "Active Members", value: "2,500+", icon: UsersIcon },
    { label: "Bootcamps Hosted", value: "25+", icon: AcademicCapIcon },
    { label: "Projects Built", value: "500+", icon: CodeBracketIcon },
    { label: "Success Stories", value: "150+", icon: SparklesIcon },
  ];

  const values = [
    {
      title: "Community First",
      description:
        "We believe in the power of collaborative learning and peer support in the developer journey.",
      icon: UsersIcon,
    },
    {
      title: "Learning by Building",
      description:
        "Hands-on experience through real projects, hackathons, and intensive bootcamps.",
      icon: CodeBracketIcon,
    },
    {
      title: "Growth Mindset",
      description:
        "Fostering continuous learning, experimentation, and pushing boundaries in technology.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Inclusive Environment",
      description:
        "Creating a welcoming space for developers of all backgrounds and experience levels.",
      icon: HeartIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <motion.section
        className="py-20 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building the Future of Tech Learning
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Learners Arc is a thriving community of developers, hackers, and
            builders who learn together, build together, and grow together
            through intensive bootcamps and collaborative projects.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900/50 dark:to-primary-900/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-primary-800 dark:text-primary-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            We exist to democratize tech education by creating an environment
            where passionate learners can access world-class mentorship,
            collaborate on real projects, and accelerate their journey from
            beginner to professional developer.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Through our intensive bootcamps, mentorship programs, and
            collaborative projects, we&apos;re not just teaching code—we&apos;re
            building the next generation of tech innovators.
          </motion.p>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16 text-primary-800 dark:text-primary-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:border-primary-500/30 transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <value.icon className="h-12 w-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-primary-800 dark:text-primary-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-primary-600 to-accent-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            Join thousands of developers who are accelerating their careers
            through community-driven learning.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Apply for Membership
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
