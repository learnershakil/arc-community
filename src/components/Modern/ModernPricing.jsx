import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MagneticElement,
  FloatingElement,
  useParallax,
} from "../../lib/animations.jsx";
import { Button, Badge } from "../ui";
import {
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const ModernPricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { ref: parallaxRef, y: parallaxY } = useParallax(0.2);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for beginners starting their coding journey",
      monthlyPrice: 29,
      yearlyPrice: 290,
      icon: RocketLaunchIcon,
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "Access to 3 courses",
        "Basic project templates",
        "Community forum access",
        "Email support",
        "Progress tracking",
        "Mobile app access",
      ],
      limitations: [
        "No 1-on-1 mentorship",
        "Limited career services",
        "No certification",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      description: "For serious learners ready to advance their careers",
      monthlyPrice: 79,
      yearlyPrice: 790,
      icon: StarIcon,
      gradient: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "Access to ALL courses",
        "Premium project templates",
        "Priority community access",
        "Live chat support",
        "Advanced progress analytics",
        "Mobile + desktop apps",
        "1-on-1 mentor sessions (2/month)",
        "Career guidance",
        "Interview preparation",
        "Code review sessions",
      ],
      limitations: ["Limited certification exams"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Ultimate package for professionals and teams",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      icon: StarIcon,
      gradient: "from-yellow-500 to-orange-500",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited mentor sessions",
        "Personal career coach",
        "Custom learning paths",
        "Team collaboration tools",
        "Unlimited certifications",
        "Priority job placement",
        "Direct industry connections",
        "Exclusive masterclasses",
        "Portfolio review service",
        "Salary negotiation support",
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
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getPrice = (plan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <section className="py-24 px-4 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        ref={parallaxRef}
        style={{ y: parallaxY }}
        className="absolute inset-0"
      >
        <FloatingElement intensity={1} delay={0}>
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement intensity={1.5} delay={4}>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        </FloatingElement>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={cardVariants}>
            <Badge
              variant="outline"
              className="mb-6 text-primary-400 border-primary-500/30"
            >
              💎 Pricing Plans
            </Badge>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Choose Your
            <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-neutral-400 text-lg max-w-3xl mx-auto mb-8"
          >
            Unlock your potential with our flexible pricing plans designed for
            every stage of your development journey.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center bg-neutral-900/80 border border-neutral-800 rounded-full p-1 backdrop-blur-sm"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-primary-500 text-white shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Yearly
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white border-green-400 text-xs">
                Save 20%
              </Badge>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              getPrice={getPrice}
              getSavings={getSavings}
              hoveredPlan={hoveredPlan}
              setHoveredPlan={setHoveredPlan}
              variants={cardVariants}
              index={index}
            />
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Questions? We&apos;ve got answers.
          </h3>
          <p className="text-neutral-400 mb-6">
            Can&apos;t find what you&apos;re looking for? Contact our support
            team.
          </p>
          <MagneticElement strength={0.1}>
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </MagneticElement>
        </motion.div>
      </div>
    </section>
  );
};

/* eslint-disable react/prop-types */
const PricingCard = ({
  plan,
  billingCycle,
  getPrice,
  getSavings,
  hoveredPlan,
  setHoveredPlan,
  variants,
  index,
}) => {
  const isHovered = hoveredPlan === plan.id;
  const price = getPrice(plan);

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setHoveredPlan(plan.id)}
      onMouseLeave={() => setHoveredPlan(null)}
      className={`relative group cursor-pointer transform-gpu ${
        plan.popular ? "lg:scale-105 lg:-mt-4" : ""
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-4 py-1">
            <SparklesIcon className="w-4 h-4 mr-1" />
            Most Popular
          </Badge>
        </motion.div>
      )}

      <motion.div
        className={`h-full bg-neutral-900/80 backdrop-blur-sm border rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${
          plan.popular
            ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
            : isHovered
            ? "border-primary-500/50 shadow-xl shadow-primary-500/10"
            : "border-neutral-800 hover:border-neutral-700"
        }`}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-500`}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${plan.gradient}`}
            >
              <plan.icon className="w-6 h-6 text-white" />
            </div>
            {billingCycle === "yearly" && getSavings(plan) > 0 && (
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                Save ${getSavings(plan)}
              </Badge>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-neutral-400 text-sm mb-6">{plan.description}</p>

          {/* Pricing */}
          <div className="mb-8">
            <motion.div
              key={`${plan.id}-${billingCycle}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-baseline gap-2"
            >
              <span className="text-4xl font-bold text-white">${price}</span>
              <span className="text-neutral-400">
                /{billingCycle === "monthly" ? "month" : "year"}
              </span>
            </motion.div>
            {billingCycle === "yearly" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-green-400 mt-1"
              >
                ${(price / 12).toFixed(0)}/month when paid annually
              </motion.p>
            )}
          </div>

          {/* CTA Button */}
          <MagneticElement strength={0.1}>
            <Button
              className={`w-full mb-8 ${
                plan.popular
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  : "bg-primary-500 hover:bg-primary-600"
              }`}
              size="lg"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2"
              >
                Get Started
                <motion.span
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.span>
            </Button>
          </MagneticElement>

          {/* Features List */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
              What&apos;s included:
            </h4>

            {plan.features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * featureIndex }}
                className="flex items-center gap-3 text-sm"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-neutral-300">{feature}</span>
              </motion.div>
            ))}

            {plan.limitations.map((limitation, limitIndex) => (
              <motion.div
                key={limitation}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 * (plan.features.length + limitIndex),
                }}
                className="flex items-center gap-3 text-sm"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center">
                  <XMarkIcon className="w-3 h-3 text-red-400" />
                </div>
                <span className="text-neutral-500 line-through">
                  {limitation}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${
              plan.popular ? "#a855f7" : "#3b82f6"
            }, transparent)`,
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            rotate: [0, 360],
          }}
          transition={{
            opacity: { duration: 0.3 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ModernPricing;
