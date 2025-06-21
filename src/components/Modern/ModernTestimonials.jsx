import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MagneticElement,
  FloatingElement,
  useParallax,
} from "../../lib/animations.jsx";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { Badge } from "../ui";

const ModernTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { ref: parallaxRef, y: parallaxY } = useParallax(0.3);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "Google",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "The AI-powered learning paths completely transformed my career. I went from a beginner to landing my dream job at Google in just 8 months.",
      rating: 5,
      course: "Full Stack Development",
      achievement: "Got hired at Google",
      salary: "$165k",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Data Scientist",
      company: "Meta",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      content:
        "The mentorship program is incredible. Having industry experts guide you through real projects makes all the difference.",
      rating: 5,
      course: "Data Science & ML",
      achievement: "Promoted to Senior DS",
      salary: "$180k",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "UI/UX Designer",
      company: "Microsoft",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      content:
        "The design courses here are cutting-edge. I learned skills that even senior designers at my company didn't know.",
      rating: 5,
      course: "UI/UX Design",
      achievement: "Lead Designer role",
      salary: "$140k",
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Cloud Architect",
      company: "Amazon",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      content:
        "The hands-on projects with real AWS infrastructure gave me confidence to tackle enterprise-level challenges.",
      rating: 5,
      course: "Cloud Architecture",
      achievement: "Senior Architect",
      salary: "$200k",
    },
    {
      id: 5,
      name: "Emily Johnson",
      role: "Cybersecurity Engineer",
      company: "Tesla",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      content:
        "The ethical hacking labs are amazing! I got certified and immediately started working on securing autonomous vehicle systems.",
      rating: 5,
      course: "Cybersecurity",
      achievement: "Security Engineer",
      salary: "$155k",
    },
  ];

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
      scale: 0.8,
      rotateY: -30,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: 30,
    },
    visible: {
      x: "0",
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exitRight: {
      x: "100%",
      opacity: 0,
      scale: 0.8,
      rotateY: -30,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    exitLeft: {
      x: "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: 30,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement intensity={1.5} delay={3}>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="mb-6 text-primary-400 border-primary-500/30"
            >
              ⭐ Student Success Stories
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Careers
            <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Transformed
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-lg max-w-3xl mx-auto"
          >
            Join thousands of students who have transformed their careers and
            are now working at top tech companies around the world.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative h-96 md:h-80 perspective-1000">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit={direction > 0 ? "exitLeft" : "exitRight"}
                className="absolute inset-0 w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <TestimonialCard
                  testimonial={testimonials[currentTestimonial]}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <MagneticElement strength={0.2}>
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full border border-neutral-700 hover:border-primary-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeftIcon className="w-5 h-5 text-white" />
              </motion.button>
            </MagneticElement>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary-500 w-8"
                      : "bg-neutral-600 hover:bg-neutral-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <MagneticElement strength={0.2}>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full border border-neutral-700 hover:border-primary-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </motion.button>
            </MagneticElement>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: "Average Salary Increase", value: "180%", prefix: "+" },
            { label: "Job Placement Rate", value: "94%", prefix: "" },
            { label: "Career Transitions", value: "12K", prefix: "+" },
            {
              label: "Student Satisfaction",
              value: "4.9",
              prefix: "",
              suffix: "/5",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* eslint-disable react/prop-types */
const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden"
      whileHover={{
        borderColor: "rgba(59, 130, 246, 0.5)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary-500/30" />
      </div>

      {/* Content */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>

        <blockquote className="text-lg text-neutral-200 leading-relaxed mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            {testimonial.course}
          </Badge>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
            {testimonial.achievement}
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
            {testimonial.salary}
          </Badge>
        </div>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.div className="relative" whileHover={{ scale: 1.1 }}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full border-2 border-primary-500/30"
          />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-neutral-900" />
        </motion.div>

        <div>
          <h4 className="text-white font-semibold text-lg">
            {testimonial.name}
          </h4>
          <p className="text-neutral-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ModernTestimonials;
