import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const benefits = [
    "🚀 Weekly coding challenges and solutions",
    "💡 Exclusive tutorials from industry experts",
    "📈 Early access to new bootcamp announcements",
    "🎯 Curated job opportunities from our partners",
    "🤝 Invites to exclusive community events",
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-terminal-green/10 to-cyber-blue/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-terminal-green rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl font-bold text-foreground-primary mb-4">
              Welcome to the Community! 🎉
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              You&apos;re now part of an exclusive group of developers who get
              the best content first. Check your inbox for a welcome email with
              exclusive resources!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-terminal-green/20 text-terminal-green rounded-lg text-sm">
                ✅ Weekly Newsletters
              </span>
              <span className="px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-lg text-sm">
                ✅ Exclusive Content
              </span>
              <span className="px-4 py-2 bg-cyber-purple/20 text-cyber-purple rounded-lg text-sm">
                ✅ Early Access
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-terminal-green/5 to-cyber-blue/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-terminal-green/10 border border-terminal-green/30 flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-terminal-green" />
                </div>
                <SparklesIcon className="w-8 h-8 text-cyber-blue animate-pulse" />
              </div>

              <h2 className="text-4xl font-bold text-foreground-primary mb-6">
                Stay Ahead of the <span className="cyber-text">Curve</span>
              </h2>

              <p className="text-xl text-foreground-secondary mb-8">
                Join{" "}
                <span className="text-terminal-green font-semibold">
                  15,000+
                </span>{" "}
                developers who get exclusive access to cutting-edge tutorials,
                bootcamp updates, and career opportunities.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-foreground-secondary"
                  >
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-terminal-green/20"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground-primary mb-2">
                  Get Weekly Updates
                </h3>
                <p className="text-foreground-secondary">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 bg-background-primary border border-gray-600 rounded-lg focus:outline-none focus:border-terminal-green transition-colors text-foreground-primary placeholder-foreground-muted"
                    required
                  />
                  <EnvelopeIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </div>
                  ) : (
                    "Join 15K+ Developers"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-foreground-muted">
                  By subscribing, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-terminal-green hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms"
                    className="text-terminal-green hover:underline"
                  >
                    Terms of Service
                  </a>
                </p>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center gap-8 text-sm text-foreground-muted">
                  <div className="text-center">
                    <div className="text-lg font-bold text-terminal-green">
                      15K+
                    </div>
                    <div>Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyber-blue">
                      4.9★
                    </div>
                    <div>Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyber-purple">
                      Weekly
                    </div>
                    <div>Updates</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
