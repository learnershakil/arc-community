import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  UserIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../components/ui";

const MembershipApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    linkedin: "",
    experience: "",
    techStack: [],
    interests: [],
    bio: "",
    portfolio: "",
    motivation: "",
    availableTime: "",
    membershipPlan: "free",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const techOptions = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "C++",
    "C#",
    "Swift",
    "Kotlin",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "DevOps",
    "Machine Learning",
    "AI",
    "Data Science",
    "Blockchain",
    "IoT",
  ];

  const interestOptions = [
    "Open Source",
    "Hackathons",
    "Mentoring",
    "Public Speaking",
    "Technical Writing",
    "Community Building",
    "Project Collaboration",
    "Learning & Development",
    "Networking",
    "Code Reviews",
  ];

  const membershipPlans = [
    {
      id: "free",
      name: "Free Community",
      price: "$0/month",
      features: ["Community Access", "Basic Resources", "Monthly Events"],
    },
    {
      id: "pro",
      name: "Pro Member",
      price: "$29/month",
      features: [
        "Everything in Free",
        "Weekly Sessions",
        "Priority Support",
        "1-on-1 Mentoring",
      ],
    },
    {
      id: "elite",
      name: "Elite Pass",
      price: "$99/month",
      features: [
        "Everything in Pro",
        "Daily Sessions",
        "Exclusive Bootcamps",
        "Direct Access to Experts",
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background-primary flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="bg-background-secondary rounded-2xl border border-terminal-500 p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 bg-terminal-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircleIcon className="w-8 h-8 text-black" />
            </motion.div>

            <h2 className="text-2xl font-bold text-foreground-primary mb-4">
              Application Submitted!
            </h2>

            <p className="text-foreground-secondary mb-6">
              Thank you for applying to join Learners Arc community. We&apos;ll
              review your application and get back to you within 2-3 business
              days.
            </p>

            <div className="space-y-3 text-sm text-foreground-muted">
              <p>✓ Application received</p>
              <p>✓ Email confirmation sent</p>
              <p>⏳ Under review</p>
            </div>

            <Link to="/" className="inline-block mt-6">
              <Button className="bg-gradient-to-r from-terminal-500 to-terminal-600 text-black">
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-primary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-terminal-500 transition-colors mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-background-code border border-terminal-500 rounded-full px-6 py-3 mb-6"
          >
            <UserIcon className="w-5 h-5 text-terminal-500" />
            <span className="text-terminal-500 font-mono text-sm">
              $ apply --membership
            </span>
            <div className="w-2 h-4 bg-terminal-500 animate-pulse ml-1" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground-primary mb-4">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-500 to-cyber-blue">
              Elite Community
            </span>
          </h1>

          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Apply for membership to connect with 15K+ developers, access
            exclusive bootcamps, and accelerate your career.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Basic Information */}
          <div className="bg-background-secondary rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-foreground-primary mb-6 flex items-center gap-2">
              <UserIcon className="w-6 h-6 text-terminal-500" />
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                  placeholder="https://github.com/username"
                />
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>
          </div>

          {/* Technical Background */}
          <div className="bg-background-secondary rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-foreground-primary mb-6 flex items-center gap-2">
              <CodeBracketIcon className="w-6 h-6 text-cyber-blue" />
              Technical Background
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Experience Level *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-3">
                  Tech Stack & Skills
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {techOptions.map((tech) => (
                    <label
                      key={tech}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.techStack.includes(tech)}
                        onChange={() => handleArrayChange("techStack", tech)}
                        className="w-4 h-4 text-terminal-500 bg-background-code border-gray-700 rounded focus:ring-terminal-500"
                      />
                      <span className="text-foreground-secondary text-sm">
                        {tech}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>

          {/* Community Interests */}
          <div className="bg-background-secondary rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-foreground-primary mb-6 flex items-center gap-2">
              <AcademicCapIcon className="w-6 h-6 text-cyber-purple" />
              Community Interests
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-foreground-primary font-semibold mb-3">
                  What interests you most?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() =>
                          handleArrayChange("interests", interest)
                        }
                        className="w-4 h-4 text-terminal-500 bg-background-code border-gray-700 rounded focus:ring-terminal-500"
                      />
                      <span className="text-foreground-secondary text-sm">
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Available Time per Week
                </label>
                <select
                  name="availableTime"
                  value={formData.availableTime}
                  onChange={handleInputChange}
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors"
                >
                  <option value="">Select your availability</option>
                  <option value="1-5">1-5 hours</option>
                  <option value="5-10">5-10 hours</option>
                  <option value="10-20">10-20 hours</option>
                  <option value="20+">20+ hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Personal Statement */}
          <div className="bg-background-secondary rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-foreground-primary mb-6 flex items-center gap-2">
              <DocumentTextIcon className="w-6 h-6 text-cyber-pink" />
              Personal Statement
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Tell us about yourself *
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors resize-none"
                  placeholder="Share your background, interests, and what you're currently working on..."
                />
              </div>

              <div>
                <label className="block text-foreground-primary font-semibold mb-2">
                  Why do you want to join Learners Arc? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-background-code border border-gray-700 rounded-lg px-4 py-3 text-foreground-primary focus:border-terminal-500 focus:outline-none transition-colors resize-none"
                  placeholder="What are your goals and how do you see yourself contributing to our community?"
                />
              </div>
            </div>
          </div>

          {/* Membership Plan */}
          <div className="bg-background-secondary rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-foreground-primary mb-6 flex items-center gap-2">
              <BriefcaseIcon className="w-6 h-6 text-yellow-500" />
              Membership Plan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipPlans.map((plan) => (
                <motion.label
                  key={plan.id}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    cursor-pointer p-6 rounded-xl border-2 transition-all duration-300
                    ${
                      formData.membershipPlan === plan.id
                        ? "border-terminal-500 bg-terminal-500/10"
                        : "border-gray-700 hover:border-gray-600"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="membershipPlan"
                    value={plan.id}
                    checked={formData.membershipPlan === plan.id}
                    onChange={handleInputChange}
                    className="sr-only"
                  />

                  <div className="text-center">
                    <h4 className="text-lg font-bold text-foreground-primary mb-2">
                      {plan.name}
                    </h4>
                    <div className="text-2xl font-bold text-terminal-500 mb-4">
                      {plan.price}
                    </div>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-terminal-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`
                bg-gradient-to-r from-terminal-500 to-terminal-600 hover:from-terminal-600 hover:to-terminal-700 
                text-black font-semibold px-12 py-4 rounded-lg transition-all duration-300
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Submitting Application...
                </span>
              ) : (
                "Submit Application"
              )}
            </Button>

            <p className="text-foreground-muted text-sm mt-4">
              By submitting this application, you agree to our community
              guidelines and terms of service.
            </p>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default MembershipApplication;
