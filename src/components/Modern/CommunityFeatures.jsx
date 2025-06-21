import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  UsersIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  SparklesIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const CommunityFeatures = () => {
  const features = [
    {
      icon: CodeBracketIcon,
      title: "Open Source Projects",
      description:
        "Collaborate on real-world projects and contribute to the developer ecosystem",
      color: "text-terminal-500",
      bgColor: "bg-terminal-500/10",
      borderColor: "border-terminal-500/30",
      features: [
        "GitHub integration",
        "Code reviews",
        "Project mentorship",
        "Portfolio building",
      ],
    },
    {
      icon: UsersIcon,
      title: "Peer Learning",
      description:
        "Learn together with developers from diverse backgrounds and skill levels",
      color: "text-cyber-blue",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      features: [
        "Study groups",
        "Knowledge sharing",
        "Pair programming",
        "Community challenges",
      ],
    },
    {
      icon: RocketLaunchIcon,
      title: "Career Acceleration",
      description:
        "Fast-track your career with industry connections and professional development",
      color: "text-cyber-purple",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      features: [
        "Job referrals",
        "Resume reviews",
        "Interview prep",
        "Industry networking",
      ],
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "24/7 Community Support",
      description:
        "Get help anytime from our active community of developers and mentors",
      color: "text-cyber-pink",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      features: [
        "Discord community",
        "Live Q&A sessions",
        "Expert mentorship",
        "Peer support",
      ],
    },
    {
      icon: AcademicCapIcon,
      title: "Skill Development",
      description:
        "Master cutting-edge technologies through hands-on bootcamps and workshops",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      features: [
        "Expert-led bootcamps",
        "Hands-on workshops",
        "Certification paths",
        "Skill assessments",
      ],
    },
    {
      icon: GlobeAltIcon,
      title: "Global Network",
      description:
        "Connect with developers worldwide and build lasting professional relationships",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      features: [
        "International community",
        "Cross-cultural projects",
        "Global events",
        "Remote collaboration",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-terminal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-background-code border border-terminal-500 rounded-full px-6 py-3 mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-terminal-500" />
            <span className="text-terminal-500 font-mono text-sm">
              $ community --features
            </span>
            <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground-primary mb-4">
            Why Developers <span className="cyber-text">Choose Us</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            More than just a learning platform - we&apos;re a thriving ecosystem
            where developers grow, collaborate, and build the future together.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`
                relative p-8 rounded-2xl border ${feature.borderColor} ${feature.bgColor}
                backdrop-blur-sm hover:shadow-2xl transition-all duration-300
                group cursor-pointer overflow-hidden
              `}
            >
              {/* Glow effect on hover */}
              <div
                className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br from-transparent via-transparent to-${
                  feature.color.split("-")[1]
                }-500/5
              `}
              />

              {/* Icon */}
              <div
                className={`
                relative w-16 h-16 rounded-xl ${feature.bgColor} border ${feature.borderColor}
                flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
              `}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-foreground-primary mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>

                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground-muted"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${feature.color.replace(
                          "text",
                          "bg"
                        )}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated corner accent */}
              <div
                className={`
                absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40
                bg-gradient-to-bl ${feature.color.replace(
                  "text",
                  "from"
                )} to-transparent
                transition-opacity duration-300
              `}
                style={{
                  clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Community CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-background-code to-background-tertiary rounded-3xl p-12 border border-gray-800 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0 bg-gradient-to-r from-terminal-500 to-cyber-blue"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), 
                                      radial-gradient(circle at 75% 75%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)`,
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Icons */}
              <div className="flex justify-center gap-4 mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-12 h-12 bg-terminal-500/20 rounded-full flex items-center justify-center"
                >
                  <HeartIcon className="w-6 h-6 text-terminal-500" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center"
                >
                  <LightBulbIcon className="w-6 h-6 text-cyber-blue" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                  className="w-12 h-12 bg-cyber-purple/20 rounded-full flex items-center justify-center"
                >
                  <RocketLaunchIcon className="w-6 h-6 text-cyber-purple" />
                </motion.div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
                Ready to <span className="terminal-text">Transform</span> Your
                Career?
              </h3>

              <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have accelerated their careers
                through our community. Your journey to becoming an elite
                developer starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-terminal-500 to-terminal-600 hover:from-terminal-600 hover:to-terminal-700 text-black font-semibold px-8 py-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5" />
                    Join the Community
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    Start Learning
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityFeatures;
