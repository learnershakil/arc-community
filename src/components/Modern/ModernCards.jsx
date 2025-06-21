import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Card, Button, Badge } from "../ui";
import {
  CodeBracketIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ModernCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const courses = [
    {
      id: 1,
      title: "Full Stack Development",
      description:
        "Master modern web development with React, Node.js, and cloud technologies.",
      icon: CodeBracketIcon,
      gradient: "from-blue-500 to-purple-600",
      price: "$299",
      duration: "12 weeks",
      level: "Intermediate",
      students: "2,847",
      rating: 4.9,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description:
        "Learn Python, TensorFlow, and build intelligent applications.",
      icon: CpuChipIcon,
      gradient: "from-green-500 to-teal-600",
      price: "$399",
      duration: "16 weeks",
      level: "Advanced",
      students: "1,923",
      rating: 4.8,
      tags: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Create stunning user interfaces and experiences that users love.",
      icon: PaintBrushIcon,
      gradient: "from-pink-500 to-rose-600",
      price: "$249",
      duration: "10 weeks",
      level: "Beginner",
      students: "3,241",
      rating: 4.9,
      tags: ["Figma", "Design Systems", "Prototyping"],
    },
    {
      id: 4,
      title: "Data Science",
      description:
        "Analyze complex data and extract meaningful insights for business.",
      icon: ChartBarIcon,
      gradient: "from-orange-500 to-red-600",
      price: "$349",
      duration: "14 weeks",
      level: "Intermediate",
      students: "1,567",
      rating: 4.7,
      tags: ["Python", "R", "SQL"],
    },
    {
      id: 5,
      title: "Cloud Architecture",
      description:
        "Design and deploy scalable applications on AWS, Azure, and GCP.",
      icon: CloudIcon,
      gradient: "from-cyan-500 to-blue-600",
      price: "$449",
      duration: "18 weeks",
      level: "Advanced",
      students: "892",
      rating: 4.8,
      tags: ["AWS", "Docker", "Kubernetes"],
    },
    {
      id: 6,
      title: "Cybersecurity",
      description:
        "Protect digital assets and learn ethical hacking techniques.",
      icon: ShieldCheckIcon,
      gradient: "from-indigo-500 to-purple-600",
      price: "$379",
      duration: "15 weeks",
      level: "Advanced",
      students: "1,234",
      rating: 4.9,
      tags: ["Penetration Testing", "Security", "Networking"],
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

  return (
    <section className="py-24 px-4 bg-neutral-950 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6"
          >
            <RocketLaunchIcon className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-medium">
              Featured Courses
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Join thousands of students learning cutting-edge technologies with
            our expert-designed courses. Build real projects and accelerate your
            career in tech.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <ModernCourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="group">
            <span>View All Courses</span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/* eslint-disable react/prop-types */
const ModernCourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          },
        },
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer perspective-1000"
    >
      <Card className="h-full bg-neutral-900/80 border-neutral-800 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
        {/* Card Header */}
        <div
          className={`h-32 bg-gradient-to-br ${course.gradient} relative overflow-hidden`}
        >
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute top-4 left-4">
            <course.icon className="w-8 h-8 text-white" />
          </div>

          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30"
            >
              {course.level}
            </Badge>
          </div>

          {/* Floating particles */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: Math.random() * 200,
                  y: Math.random() * 100,
                  opacity: 0,
                }}
                animate={{
                  y: isHovered ? -50 : 0,
                  opacity: isHovered ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: isHovered ? Infinity : 0,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
            {course.title}
          </h3>

          <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-neutral-400 mb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <UserGroupIcon className="w-4 h-4" />
                {course.students}
              </span>
              <span>⭐ {course.rating}</span>
            </div>
            <span>{course.duration}</span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-white">
                {course.price}
              </span>
            </div>
            <Button
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            transform: "translateZ(-1px)",
          }}
        />
      </Card>
    </motion.div>
  );
};

export default ModernCards;
