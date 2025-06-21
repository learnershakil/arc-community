import { useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollPerformance } from "../hooks/useScrollPerformance";
import ModernNav from "../components/Modern/ModernNav";
import CommunityHero from "../components/Modern/EnhancedCommunityHero";
import CommunityStats from "../components/Modern/CommunityStats";
import BootcampShowcase from "../components/Modern/BootcampShowcase";
import CommunityFeatures from "../components/Modern/CommunityFeatures";
import CommunityPricing from "../components/Modern/CommunityPricing";
import ModernTestimonials from "../components/Modern/ModernTestimonials";
import BlogSection from "../components/Modern/BlogSection";
import NewsletterSignup from "../components/Modern/NewsletterSignup";
import ModernFooter from "../components/Modern/ModernFooter";
import {
  StatsDashboard,
  DeveloperShowcase,
  ContributionGraph,
  TerminalAnimation,
} from "../components/Interactive";

const ModernHome = () => {
  // Initialize scroll performance optimizations
  useScrollPerformance();

  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    // Optimize scroll performance
    const optimizeScrollPerformance = () => {
      // Add CSS for hardware acceleration and smooth scrolling
      const style = document.createElement("style");
      style.textContent = `
        * {
          scroll-behavior: smooth;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Optimize animations for better scroll performance */
        .motion-section {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Smooth scroll optimization */
        :root {
          scroll-padding-top: 80px;
        }
      `;
      document.head.appendChild(style);
    };

    optimizeScrollPerformance();

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-background-primary text-foreground-primary"
      style={{ willChange: "auto" }}
    >
      {/* Navigation */}
      <ModernNav />

      {/* Hero Section */}
      <CommunityHero />

      {/* Community Stats Section */}
      <CommunityStats />

      {/* Interactive Stats Dashboard */}
      <section className="container mx-auto px-6 py-20 motion-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <StatsDashboard
            title="Community Metrics Dashboard"
            animated={true}
            refreshInterval={30000}
          />
        </motion.div>
      </section>

      {/* Developer Showcase Section */}
      <section className="bg-background-secondary py-20 motion-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <DeveloperShowcase
              title="Community Projects Showcase"
              showCode={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Bootcamp Showcase Section */}
      <BootcampShowcase />

      {/* Community Features Section */}
      <CommunityFeatures />

      {/* Community Pricing Section */}
      <CommunityPricing />

      {/* Terminal Animation Section */}
      <section className="container mx-auto px-6 py-20 motion-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground-primary mb-4">
              Get Started in <span className="cyber-text">Minutes</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Watch how easy it is to join our community and start your learning
              journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TerminalAnimation
              title="Quick Start Guide"
              autoPlay={true}
              loop={false}
              typingSpeed={100}
            />
          </div>
        </motion.div>
      </section>

      {/* Contribution Graph Section */}
      <section className="bg-background-secondary py-20 motion-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground-primary mb-4">
                Community <span className="cyber-text">Activity</span>
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                See the incredible learning momentum of our community members
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ContributionGraph
                title="Learning Activity Heatmap"
                colorScheme="github"
                showTooltip={true}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <ModernTestimonials />

      {/* Upcoming Community Features */}
      <section className="container mx-auto px-6 py-32 text-center bg-background-secondary motion-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-background-code border border-terminal-500 rounded-full px-6 py-3 mb-6"
          >
            <span className="text-terminal-500 font-mono text-sm">
              $ roadmap --upcoming
            </span>
            <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
          </motion.div>

          <h2 className="text-5xl font-bold text-foreground-primary">
            Community <span className="cyber-text">Roadmap</span>
          </h2>
          <p className="text-xl text-foreground-secondary leading-relaxed">
            We&apos;re constantly evolving to serve our developer community
            better. Here&apos;s what&apos;s coming next in our journey together.
          </p>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Community Forums",
                description:
                  "Dedicated spaces for tech discussions, Q&A, and knowledge sharing",
                status: "Q1 2025",
                icon: "💬",
                color: "terminal-500",
              },
              {
                title: "Project Marketplace",
                description:
                  "Connect with teams, find collaborators, and showcase your work",
                status: "Q2 2025",
                icon: "🚀",
                color: "cyber-blue",
              },
              {
                title: "AI Code Review",
                description:
                  "Get instant feedback on your code with AI-powered reviews",
                status: "Q3 2025",
                icon: "🤖",
                color: "cyber-purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background-tertiary p-8 rounded-2xl border border-gray-800 hover:border-terminal-500 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary group-hover:text-terminal-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary">
                    {feature.description}
                  </p>
                  <div
                    className={`inline-block px-3 py-1 bg-${feature.color}/20 text-${feature.color} text-sm rounded-full border border-${feature.color}/30`}
                  >
                    {feature.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <ModernTestimonials />

      {/* Blog Section */}
      <BlogSection />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <ModernFooter />
    </motion.main>
  );
};

export default ModernHome;
