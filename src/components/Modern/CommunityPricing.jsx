import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  RocketLaunchIcon,
  StarIcon,
  CodeBracketIcon,
  UsersIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui";

const CommunityPricing = () => {
  const [billingCycle, setBillingCycle] = useState("weekly");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: "free",
      name: "Free Community",
      description: "Perfect for getting started with our developer community",
      price: { weekly: 0, monthly: 0 },
      color: "terminal",
      gradient: "from-terminal-500 to-terminal-600",
      popular: false,
      icon: CodeBracketIcon,
      features: [
        "Access to community forums",
        "Basic coding challenges",
        "Open source project browsing",
        "Community Discord access",
        "Weekly community events",
        "Basic learning resources",
        "Peer-to-peer help",
        "Project showcase posting",
      ],
      limitations: [
        "No 1-on-1 mentoring",
        "No premium bootcamps",
        "No career services",
        "No certification",
      ],
    },
    {
      id: "pro",
      name: "Pro Developer",
      description:
        "Advanced features for serious developers looking to level up",
      price: { weekly: 29, monthly: 99 },
      color: "cyber-blue",
      gradient: "from-cyber-blue to-blue-600",
      popular: true,
      icon: RocketLaunchIcon,
      features: [
        "Everything in Free tier",
        "Weekly 1-on-1 mentoring sessions",
        "Access to premium bootcamps",
        "Code review services",
        "Priority community support",
        "Advanced project templates",
        "Industry networking events",
        "Resume review & feedback",
        "Interview preparation",
        "Career guidance sessions",
      ],
      limitations: ["Standard mentoring schedule", "Limited bootcamp access"],
    },
    {
      id: "elite",
      name: "Elite Pass",
      description: "Premium experience for developers who want it all",
      price: { weekly: 59, monthly: 199 },
      color: "cyber-purple",
      gradient: "from-cyber-purple to-purple-600",
      popular: false,
      icon: StarIcon,
      features: [
        "Everything in Pro tier",
        "Unlimited 1-on-1 mentoring",
        "Access to ALL bootcamps",
        "Direct line to industry experts",
        "Personalized learning paths",
        "Priority job placement assistance",
        "Exclusive industry connections",
        "Custom project development",
        "Leadership training programs",
        "Entrepreneurship guidance",
        "Exclusive Elite community access",
        "Annual in-person meetups",
      ],
      limitations: [],
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

  const cardVariants = {
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
    <section className="py-20 bg-background-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-terminal-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

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
              $ pricing --community
            </span>
            <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground-primary mb-4">
            Choose Your <span className="cyber-text">Developer Journey</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8">
            From free community access to elite mentorship. Level up your skills
            with weekly sessions designed for modern developers.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${
                billingCycle === "weekly"
                  ? "text-foreground-primary"
                  : "text-foreground-muted"
              }`}
            >
              Weekly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "weekly" ? "monthly" : "weekly"
                )
              }
              className={`
                relative w-14 h-8 rounded-full transition-colors duration-300
                ${
                  billingCycle === "monthly" ? "bg-terminal-500" : "bg-gray-700"
                }
              `}
            >
              <div
                className={`
                absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300
                ${
                  billingCycle === "monthly" ? "translate-x-7" : "translate-x-1"
                }
              `}
              />
            </button>
            <span
              className={`text-sm ${
                billingCycle === "monthly"
                  ? "text-foreground-primary"
                  : "text-foreground-muted"
              }`}
            >
              Monthly
              <span className="ml-2 text-xs bg-terminal-500/20 text-terminal-500 px-2 py-1 rounded-full">
                Save 25%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`
                relative bg-background-secondary rounded-3xl border-2 p-8 transition-all duration-300
                ${
                  plan.popular
                    ? "border-terminal-500 shadow-glow"
                    : "border-gray-800 hover:border-gray-700"
                }
                ${hoveredPlan === plan.id ? "scale-105 shadow-2xl" : ""}
                group overflow-hidden
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-terminal-500 to-terminal-600 text-black px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`
                  w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient}
                  flex items-center justify-center
                `}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground-primary">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-foreground-muted ml-1">
                    /{billingCycle === "weekly" ? "week" : "month"}
                  </span>
                </div>
                {billingCycle === "monthly" && plan.price.monthly > 0 && (
                  <div className="text-sm text-foreground-muted mt-1">
                    ${(plan.price.monthly / 4).toFixed(0)}/week
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-foreground-primary font-semibold mb-4">
                  What&apos;s included:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon
                        className={`w-5 h-5 text-${plan.color} mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-foreground-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-foreground-muted font-semibold mb-3 text-sm">
                      Not included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XMarkIcon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-muted text-xs">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className={`
                  w-full bg-gradient-to-r ${
                    plan.gradient
                  } text-white font-semibold py-3 rounded-lg
                  transition-all duration-300 hover:scale-105 hover:shadow-glow
                  ${plan.popular ? "shadow-glow" : ""}
                `}
              >
                {plan.price[billingCycle] === 0
                  ? "Join Free"
                  : `Start ${plan.name}`}
              </Button>

              {/* Background Glow Effect */}
              <div
                className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br from-transparent via-transparent to-${plan.color}/5
                pointer-events-none
              `}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-background-code to-background-tertiary rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-foreground-primary mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-foreground-secondary mb-6">
              Start with our free community access and upgrade anytime. All paid
              plans include a 7-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-terminal-500 text-terminal-500 hover:bg-terminal-500 hover:text-black"
              >
                <UsersIcon className="w-5 h-5 mr-2" />
                Join Free Community
              </Button>
              <Button className="bg-gradient-to-r from-cyber-blue to-blue-600 text-white">
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPricing;
