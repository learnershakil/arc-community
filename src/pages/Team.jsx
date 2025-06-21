import { motion } from "framer-motion";
import ThemeToggle from "../components/ui/ThemeToggle";
import {
  BuildingStorefrontIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const Team = () => {
  const founders = [
    {
      name: "Shakil Ahmed",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer passionate about building communities that accelerate learning through collaboration.",
      skills: ["React", "Node.js", "Python", "DevOps"],
      icon: CodeBracketIcon,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Alex Chen",
      role: "Co-Founder & Technical Mentor",
      bio: "Former FAANG engineer dedicated to mentoring the next generation of developers.",
      skills: ["System Design", "ML/AI", "Cloud Architecture"],
      icon: CpuChipIcon,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const mentors = [
    {
      name: "Sarah Rodriguez",
      role: "Senior Frontend Mentor",
      expertise: "React, Vue, Modern CSS",
      icon: BuildingStorefrontIcon,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "David Kumar",
      role: "Backend Architecture Mentor",
      expertise: "Microservices, Databases, API Design",
      icon: CloudIcon,
      gradient: "from-orange-500 to-red-600",
    },
    {
      name: "Emily Watson",
      role: "DevOps & Cloud Mentor",
      expertise: "AWS, Docker, Kubernetes, CI/CD",
      icon: CpuChipIcon,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      name: "Michael Thompson",
      role: "Data Science Mentor",
      expertise: "Machine Learning, Python, Analytics",
      icon: BeakerIcon,
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const achievements = [
    { label: "Years of Combined Experience", value: "50+" },
    { label: "Students Mentored", value: "1,000+" },
    { label: "Successful Career Transitions", value: "300+" },
    { label: "Open Source Contributors", value: "25+" },
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
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Passionate developers, experienced mentors, and industry experts
            dedicated to accelerating your journey in technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section
        className="py-16 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16 text-primary-800 dark:text-primary-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
              >
                <div
                  className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center`}
                >
                  <founder.icon className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary-800 dark:text-primary-300">
                  {founder.name}
                </h3>
                <div className="text-lg text-primary-600 dark:text-primary-400 mb-4 font-medium">
                  {founder.role}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {founder.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Stats */}
      <motion.section
        className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900/50 dark:to-primary-900/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mentors Section */}
      <motion.section
        className="py-20 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16 text-primary-800 dark:text-primary-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            Expert Mentors
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:border-primary-500/30 transition-all duration-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${mentor.gradient} flex items-center justify-center`}
                >
                  <mentor.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary-800 dark:text-primary-300">
                  {mentor.name}
                </h3>
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-3 font-medium">
                  {mentor.role}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {mentor.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Team CTA */}
      <motion.section
        className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-primary-600 to-accent-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            Want to Join Our Team?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            We&apos;re always looking for passionate educators and industry
            experts to help shape the next generation of developers.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Become a Mentor
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Team;
