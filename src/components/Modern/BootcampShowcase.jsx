import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RocketLaunchIcon,
  CalendarIcon,
  UsersIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  ClockIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui";

const BootcampShowcase = () => {
  const [currentBootcamp, setCurrentBootcamp] = useState(0);

  const bootcamps = [
    {
      id: 1,
      title: "Winter of Code 2025",
      subtitle: "Our Flagship Bootcamp",
      status: "Upcoming",
      statusColor: "bg-terminal-500",
      duration: "8 Weeks",
      participants: "500+ Developers",
      startDate: "Jan 15, 2025",
      description:
        "Join our most popular bootcamp where you'll build real-world projects, contribute to open source, and learn from industry experts.",
      technologies: ["React", "Node.js", "Python", "Docker", "AWS"],
      highlights: [
        "Real-world project experience",
        "Open source contributions",
        "1-on-1 mentorship",
        "Industry networking",
        "Certificate of completion",
      ],
      image: "/api/placeholder/600/400",
      registrationFee: "Free",
      gradient: "from-terminal-500 to-terminal-600",
    },
    {
      id: 2,
      title: "Full Stack Mastery",
      subtitle: "End-to-End Development",
      status: "Enrolling",
      statusColor: "bg-cyber-blue",
      duration: "12 Weeks",
      participants: "200+ Developers",
      startDate: "Feb 1, 2025",
      description:
        "Master the complete web development stack from frontend to backend, including deployment and DevOps practices.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Kubernetes",
      ],
      highlights: [
        "Production-ready applications",
        "DevOps & deployment",
        "Database optimization",
        "API development",
        "Performance tuning",
      ],
      image: "/api/placeholder/600/400",
      registrationFee: "$199",
      gradient: "from-cyber-blue to-blue-600",
    },
    {
      id: 3,
      title: "AI/ML Engineering",
      subtitle: "Machine Learning in Production",
      status: "Starting Soon",
      statusColor: "bg-cyber-purple",
      duration: "10 Weeks",
      participants: "150+ Engineers",
      startDate: "Mar 1, 2025",
      description:
        "Learn to build, deploy, and scale machine learning models in production environments with MLOps best practices.",
      technologies: [
        "Python",
        "TensorFlow",
        "MLflow",
        "Kubernetes",
        "Prometheus",
      ],
      highlights: [
        "MLOps pipeline design",
        "Model deployment",
        "Performance monitoring",
        "Data engineering",
        "Production scaling",
      ],
      image: "/api/placeholder/600/400",
      registrationFee: "$299",
      gradient: "from-cyber-purple to-purple-600",
    },
    {
      id: 4,
      title: "DevOps Mastery",
      subtitle: "Infrastructure & Automation",
      status: "Planning",
      statusColor: "bg-cyber-pink",
      duration: "6 Weeks",
      participants: "100+ Engineers",
      startDate: "Apr 1, 2025",
      description:
        "Master modern DevOps practices, cloud infrastructure, and automation tools to streamline development workflows.",
      technologies: ["Docker", "Kubernetes", "Terraform", "Jenkins", "AWS"],
      highlights: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Monitoring & logging",
        "Security best practices",
      ],
      image: "/api/placeholder/600/400",
      registrationFee: "$249",
      gradient: "from-cyber-pink to-pink-600",
    },
  ];

  const nextBootcamp = () => {
    setCurrentBootcamp((prev) => (prev + 1) % bootcamps.length);
  };

  const prevBootcamp = () => {
    setCurrentBootcamp(
      (prev) => (prev - 1 + bootcamps.length) % bootcamps.length
    );
  };

  const currentData = bootcamps[currentBootcamp];

  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-terminal-500/10 to-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyber-purple/10 to-cyber-pink/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

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
            <RocketLaunchIcon className="w-5 h-5 text-terminal-500" />
            <span className="text-terminal-500 font-mono text-sm">
              $ bootcamp --showcase
            </span>
            <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground-primary mb-4">
            Level Up with <span className="cyber-text">Bootcamps</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Join our intensive bootcamps designed by industry experts. Build
            real projects, contribute to open source, and accelerate your
            career.
          </p>
        </motion.div>

        {/* Bootcamp Showcase */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
            <button
              onClick={prevBootcamp}
              className="w-12 h-12 bg-background-secondary border border-gray-700 hover:border-terminal-500 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow"
            >
              <ChevronLeftIcon className="w-6 h-6 text-foreground-secondary" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
            <button
              onClick={nextBootcamp}
              className="w-12 h-12 bg-background-secondary border border-gray-700 hover:border-terminal-500 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow"
            >
              <ChevronRightIcon className="w-6 h-6 text-foreground-secondary" />
            </button>
          </div>

          {/* Main Bootcamp Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBootcamp}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-background-secondary rounded-3xl border border-gray-800 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Content */}
                <div className="p-8 lg:p-12">
                  {/* Status Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`${currentData.statusColor} text-black px-4 py-2 rounded-full text-sm font-semibold`}
                    >
                      {currentData.status}
                    </div>
                    <div className="text-foreground-muted text-sm">
                      {currentData.subtitle}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground-primary mb-4">
                    {currentData.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground-secondary text-lg mb-6 leading-relaxed">
                    {currentData.description}
                  </p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-terminal-500" />
                      <span className="text-foreground-secondary">
                        {currentData.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-5 h-5 text-cyber-blue" />
                      <span className="text-foreground-secondary">
                        {currentData.participants}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-cyber-purple" />
                      <span className="text-foreground-secondary">
                        {currentData.startDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="w-5 h-5 text-cyber-pink" />
                      <span className="text-foreground-secondary font-semibold">
                        {currentData.registrationFee}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-foreground-primary font-semibold mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-background-code border border-gray-700 px-3 py-1 rounded-lg text-sm text-foreground-secondary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-foreground-primary font-semibold mb-3">
                      What you&apos;ll learn:
                    </h4>
                    <ul className="space-y-2">
                      {currentData.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-foreground-secondary"
                        >
                          <div className="w-2 h-2 bg-terminal-500 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className={`bg-gradient-to-r ${currentData.gradient} text-white font-semibold px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300`}
                    >
                      <span className="flex items-center gap-2">
                        <AcademicCapIcon className="w-5 h-5" />
                        {currentData.registrationFee === "Free"
                          ? "Register Free"
                          : "Enroll Now"}
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-700 text-foreground-secondary hover:border-terminal-500 hover:text-terminal-500 px-8 py-3 rounded-lg transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <CodeBracketIcon className="w-5 h-5" />
                        View Curriculum
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative bg-gradient-to-br from-background-tertiary to-background-code p-8 lg:p-12 flex items-center justify-center">
                  {/* Code snippet mockup */}
                  <div className="w-full max-w-md">
                    <div className="bg-background-code border border-gray-700 rounded-lg overflow-hidden shadow-xl">
                      <div className="bg-background-secondary px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="text-foreground-muted text-sm ml-4 font-mono">
                          bootcamp.js
                        </span>
                      </div>
                      <div className="p-4 font-mono text-sm space-y-2">
                        <div className="text-gray-500">{`// ${currentData.title}`}</div>
                        <div className="text-cyber-blue">
                          const bootcamp = &#123;
                        </div>
                        <div className="ml-4 text-terminal-500">
                          name: &quot;{currentData.title}&quot;,
                        </div>
                        <div className="ml-4 text-terminal-500">
                          duration: &quot;{currentData.duration}&quot;,
                        </div>
                        <div className="ml-4 text-terminal-500">
                          status: &quot;{currentData.status}&quot;,
                        </div>
                        <div className="ml-4 text-terminal-500">
                          tech:{" "}
                          {JSON.stringify(currentData.technologies.slice(0, 3))}
                          ,
                        </div>
                        <div className="text-cyber-blue">&#125;;</div>
                        <div className="text-gray-500 mt-4">{`// Ready to start?`}</div>
                        <div className="text-cyber-purple">
                          bootcamp.join();
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bootcamp Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {bootcamps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBootcamp(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBootcamp
                    ? "bg-terminal-500 shadow-glow"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Bootcamps CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="border-2 border-terminal-500 text-terminal-500 hover:bg-terminal-500 hover:text-black px-8 py-3 rounded-lg transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <RocketLaunchIcon className="w-5 h-5" />
              View All Bootcamps
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BootcampShowcase;
