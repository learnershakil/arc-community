import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  EyeIcon,
  CodeBracketIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  TagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui";
import { CodeSnippet } from "../Interactive";

const DeveloperShowcase = ({
  projects,
  title = "Featured Projects",
  showCode = true,
}) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const defaultProjects = [
    {
      id: 1,
      title: "Community Learning Platform",
      description:
        "A modern web application for peer-to-peer learning with real-time collaboration features.",
      image: "/assets/images/project1.jpg",
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/learners-arc/platform",
      demo: "https://platform.learners-arc.dev",
      stars: 247,
      forks: 54,
      language: "JavaScript",
      lastUpdate: "2024-01-15",
      status: "Active",
      code: `// Real-time collaboration feature
import { io } from 'socket.io-client';

const CollaborationService = {
  socket: null,
  
  connect(roomId) {
    this.socket = io('/collaboration');
    this.socket.emit('join-room', roomId);
  },
  
  shareCode(code) {
    this.socket.emit('code-update', {
      code,
      timestamp: Date.now()
    });
  },
  
  onCodeUpdate(callback) {
    this.socket.on('code-update', callback);
  }
};`,
      highlights: [
        "Real-time code collaboration",
        "Peer review system",
        "Learning analytics",
        "Mobile-responsive design",
      ],
    },
    {
      id: 2,
      title: "AI-Powered Code Review Bot",
      description:
        "Intelligent code review automation using machine learning to provide instant feedback on code quality.",
      image: "/assets/images/project2.jpg",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "PostgreSQL"],
      github: "https://github.com/learners-arc/code-reviewer",
      demo: "https://reviewer.learners-arc.dev",
      stars: 892,
      forks: 156,
      language: "Python",
      lastUpdate: "2024-01-20",
      status: "Active",
      code: `# AI Code Review Engine
import tensorflow as tf
from transformers import AutoModel, AutoTokenizer

class CodeReviewer:
    def __init__(self):
        self.model = AutoModel.from_pretrained('microsoft/codebert-base')
        self.tokenizer = AutoTokenizer.from_pretrained('microsoft/codebert-base')
    
    def analyze_code(self, code_snippet):
        inputs = self.tokenizer(code_snippet, return_tensors="pt")
        outputs = self.model(**inputs)
        
        # Extract semantic features
        features = outputs.last_hidden_state.mean(dim=1)
        
        # Generate review suggestions
        suggestions = self.generate_suggestions(features)
        return suggestions`,
      highlights: [
        "ML-powered code analysis",
        "Automated suggestions",
        "Integration with GitHub",
        "Performance optimization tips",
      ],
    },
    {
      id: 3,
      title: "DevOps Automation Pipeline",
      description:
        "Complete CI/CD pipeline with automated testing, deployment, and monitoring for cloud applications.",
      image: "/assets/images/project3.jpg",
      technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
      github: "https://github.com/learners-arc/devops-pipeline",
      demo: "https://pipeline.learners-arc.dev",
      stars: 634,
      forks: 89,
      language: "YAML",
      lastUpdate: "2024-01-18",
      status: "Active",
      code: `# Kubernetes Deployment Configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: learners-arc-app
  labels:
    app: learners-arc
spec:
  replicas: 3
  selector:
    matchLabels:
      app: learners-arc
  template:
    metadata:
      labels:
        app: learners-arc
    spec:
      containers:
      - name: app
        image: learners-arc/app:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"`,
      highlights: [
        "Zero-downtime deployments",
        "Auto-scaling capabilities",
        "Monitoring & alerting",
        "Infrastructure as code",
      ],
    },
  ];

  const projectList = projects || defaultProjects;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectList.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + projectList.length) % projectList.length
    );
  };

  const getTechColor = (tech) => {
    const colors = {
      React: "bg-blue-500",
      Vue: "bg-green-500",
      Angular: "bg-red-500",
      "Node.js": "bg-green-600",
      Python: "bg-yellow-500",
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-600",
      Docker: "bg-blue-400",
      Kubernetes: "bg-purple-500",
      AWS: "bg-orange-500",
      MongoDB: "bg-green-500",
      PostgreSQL: "bg-blue-700",
    };
    return colors[tech] || "bg-gray-500";
  };

  const currentProjectData = projectList[currentProject];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Explore innovative projects built by our community members using
          cutting-edge technologies
        </motion.p>
      </div>

      {/* Main Project Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Project Image & Info */}
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <CodeBracketIcon className="w-24 h-24 text-gray-400 dark:text-gray-600" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <Button
                variant="primary"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={() => window.open(currentProjectData.demo, "_blank")}
              >
                <EyeIcon className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={() => window.open(currentProjectData.github, "_blank")}
              >
                <CodeBracketIcon className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentProjectData.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4" />
                  {currentProjectData.stars}
                </div>
                <div className="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  {currentProjectData.forks}
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {currentProjectData.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProjectData.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTechColor(
                    tech
                  )}`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              {currentProjectData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {highlight}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Code Preview */}
        {showCode && (
          <motion.div
            key={`code-${currentProject}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <CodeSnippet
              code={currentProjectData.code}
              language={currentProjectData.language.toLowerCase()}
              title={`${currentProjectData.title} - Code Preview`}
              interactive={true}
              showLineNumbers={true}
            />
          </motion.div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Button variant="outline" onClick={prevProject} className="p-2">
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProject
                  ? "bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" onClick={nextProject} className="p-2">
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer group relative p-6 rounded-2xl border transition-all duration-300 ${
              index === currentProject
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <TagIcon className="w-3 h-3" />
                {project.language}
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-3 h-3" />
                  {project.stars}
                </div>
                <div className="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                  {project.forks}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CalendarIcon className="w-3 h-3" />
                {new Date(project.lastUpdate).toLocaleDateString()}
              </div>
            </div>

            {/* Hover glow effect */}
            <AnimatePresence>
              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

DeveloperShowcase.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      github: PropTypes.string.isRequired,
      demo: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      forks: PropTypes.number.isRequired,
      language: PropTypes.string.isRequired,
      lastUpdate: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  title: PropTypes.string,
  showCode: PropTypes.bool,
};

DeveloperShowcase.defaultProps = {
  projects: null,
  title: "Featured Projects",
  showCode: true,
};

export default DeveloperShowcase;
