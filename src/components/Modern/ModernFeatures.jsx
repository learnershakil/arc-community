import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button, Card, Badge } from "../ui";
import {
  Modal,
  Toast,
  LoadingState,
  FloatingInput,
  Toggle,
  Tabs,
} from "../ui/advanced";
import {
  SparklesIcon,
  CpuChipIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const ModernFeatures = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("courses");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: SparklesIcon,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths powered by advanced machine learning algorithms that adapt to your pace and style.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CpuChipIcon,
      title: "Cutting-edge Technology",
      description:
        "Learn with the latest technologies including React, Node.js, Python, AI/ML, and modern development tools.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GlobeAltIcon,
      title: "Global Community",
      description:
        "Connect with thousands of learners worldwide. Share projects, get feedback, and collaborate on real-world solutions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: AcademicCapIcon,
      title: "Expert Mentorship",
      description:
        "Get guidance from industry professionals working at top tech companies like Google, Meta, and Microsoft.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: UserGroupIcon,
      title: "Project-Based Learning",
      description:
        "Build real-world projects that matter. From startup MVPs to enterprise solutions, gain practical experience.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: RocketLaunchIcon,
      title: "Career Acceleration",
      description:
        "Fast-track your career with our comprehensive placement program, resume reviews, and interview preparation.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const stats = [
    { label: "Active Learners", value: "15,000+", change: "+23%" },
    { label: "Courses Completed", value: "50,000+", change: "+45%" },
    { label: "Success Rate", value: "94%", change: "+2%" },
    { label: "Industry Partners", value: "200+", change: "+18%" },
  ];

  const tabs = [
    { id: "courses", label: "Courses" },
    { id: "projects", label: "Projects" },
    { id: "community", label: "Community" },
    { id: "careers", label: "Careers" },
  ];

  const handleDemo = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setShowToast(true);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <Badge variant="primary" size="lg" className="mb-6">
            ✨ Modern Learning Experience
          </Badge>
          <h2 className="text-6xl font-bold text-display mb-6">
            Features That <span className="gradient-text">Transform</span>
            <br />
            Your Learning Journey
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Experience the future of education with our cutting-edge platform
            designed for modern developers and tech enthusiasts.
          </p>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card variant="glass" className="p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Try Our Advanced Components
                </h3>
                <p className="text-neutral-400">
                  Experience the modern UI/UX that powers our platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Button
                    variant="gradient"
                    onClick={() => setShowModal(true)}
                    className="w-full"
                  >
                    Open Modern Modal
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={handleDemo}
                    loading={loading}
                    className="w-full"
                  >
                    {loading ? "Processing..." : "Show Toast Demo"}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Dark Mode</span>
                    <Toggle checked={darkMode} onChange={setDarkMode} />
                  </div>

                  <FloatingInput label="Your Email" type="email" required />
                </div>
              </div>

              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                variant="pills"
              />
            </div>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" hover={true} className="p-8 h-full group">
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-400 hover:text-primary-300"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-400 mb-2">{stat.label}</div>
                <div className="text-success-400 text-sm font-medium">
                  {stat.change} this month
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card variant="gradient" className="p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-xl text-neutral-200 leading-relaxed">
                  Join thousands of learners who are already transforming their
                  careers with our modern learning platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg">
                  Explore Courses
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="text-lg bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="flex justify-center items-center gap-6 text-neutral-300">
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-5 h-5 text-red-400" />
                  <span>Loved by 10,000+ learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <LightBulbIcon className="w-5 h-5 text-yellow-400" />
                  <span>Industry-proven curriculum</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Modal Demo */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Modern Modal Component"
        size="md"
      >
        <div className="space-y-6">
          <p className="text-neutral-300">
            This is a demonstration of our advanced modal component with
            backdrop blur, smooth animations, and modern design patterns.
          </p>

          <div className="space-y-4">
            <FloatingInput label="Full Name" required />
            <FloatingInput label="Email Address" type="email" required />
            <FloatingInput label="Message" />
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="gradient">Submit</Button>
          </div>
        </div>
      </Modal>

      {/* Toast Demo */}
      {showToast && (
        <Toast
          message="Component demo completed successfully!"
          type="success"
          onClose={() => setShowToast(false)}
          position="top-right"
        />
      )}
    </section>
  );
};

export default ModernFeatures;
