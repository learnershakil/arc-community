import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Breadcrumb = ({ customPaths = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Custom path names for better display
  const defaultPathNames = {
    "": "Home",
    about: "About Us",
    team: "Our Team",
    "connect-us": "Contact",
    contact: "Contact",
    signin: "Sign In",
    login: "Login",
    signup: "Sign Up",
    apply: "Apply",
    membership: "Membership",
    "forgot-password": "Reset Password",
    blog: "Blog",
    bootcamps: "Bootcamps",
    programs: "Programs",
    community: "Community",
    docs: "Documentation",
    tutorials: "Tutorials",
    faq: "FAQ",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    "woc-register": "WoC Registration",
  };

  const pathNames = { ...defaultPathNames, ...customPaths };

  // Don't show breadcrumb on home page
  if (pathnames.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-4 px-6 bg-background-secondary/50 backdrop-blur-sm border-b border-gray-600/30"
    >
      <div className="container mx-auto">
        <motion.ol
          className="flex items-center space-x-2 text-sm"
          variants={containerVariants}
        >
          {/* Home Link */}
          <motion.li variants={itemVariants}>
            <Link
              to="/"
              className="flex items-center text-foreground-muted hover:text-terminal-green transition-colors group"
            >
              <HomeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="ml-1">Home</span>
            </Link>
          </motion.li>

          {/* Path segments */}
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName =
              pathNames[pathname] ||
              pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <motion.li
                key={pathname}
                variants={itemVariants}
                className="flex items-center"
              >
                <ChevronRightIcon className="w-4 h-4 text-foreground-muted mx-2" />
                {isLast ? (
                  <span className="text-terminal-green font-medium">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-foreground-muted hover:text-terminal-green transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </motion.nav>
  );
};

Breadcrumb.propTypes = {
  customPaths: PropTypes.object,
};

export default Breadcrumb;
