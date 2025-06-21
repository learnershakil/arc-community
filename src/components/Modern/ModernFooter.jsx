import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  UsersIcon,
  HeartIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  DiscordIcon,
} from "../icons/SocialIcons";

const ModernFooter = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Bootcamps", href: "/bootcamps" },
    { name: "Community", href: "/community" },
  ];

  const programs = [
    { name: "Web Development", href: "/programs/web" },
    { name: "Mobile Apps", href: "/programs/mobile" },
    { name: "DevOps & Cloud", href: "/programs/devops" },
    { name: "AI & Machine Learning", href: "/programs/ai" },
  ];

  const resources = [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "FAQ", href: "/faq" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/learnersarc",
      icon: GitHubIcon,
    },
    {
      name: "Discord",
      href: "https://discord.gg/learnersarc",
      icon: DiscordIcon,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/learnersarc",
      icon: TwitterIcon,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/learnersarc",
      icon: LinkedInIcon,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="relative bg-black border-t border-terminal-green/20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative container mx-auto px-6 py-16"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-terminal-green/10 border border-terminal-green/30 flex items-center justify-center">
                <CodeBracketIcon className="w-6 h-6 text-terminal-green" />
              </div>
              <span className="text-2xl font-bold text-white">
                Learners <span className="text-terminal-green">Arc</span>
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Empowering the next generation of developers through hands-on
              learning, community collaboration, and real-world project
              experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-terminal-green">
                  2.5K+
                </div>
                <div className="text-xs text-gray-500">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terminal-green">
                  25+
                </div>
                <div className="text-xs text-gray-500">Bootcamps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terminal-green">
                  500+
                </div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-terminal-green" />
                <span>Remote-First Community</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-terminal-green" />
                <span>hello@learnersarc.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-terminal-green" />
              Community
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-terminal-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <AcademicCapIcon className="w-5 h-5 text-terminal-green" />
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-gray-400 hover:text-terminal-green transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CodeBracketIcon className="w-5 h-5 text-terminal-green" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-400 hover:text-terminal-green transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-12 pt-8 border-t border-gray-800"
        >
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card border border-terminal-green/20 flex items-center justify-center text-gray-400 hover:text-terminal-green hover:border-terminal-green/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>by the Learners Arc Community</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-terminal-green transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-terminal-green transition-colors"
            >
              Terms of Service
            </Link>
            <span>© 2025 Learners Arc</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ModernFooter;
