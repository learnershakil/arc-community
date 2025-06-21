import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Button, Badge } from "../ui";

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 42 },
    { id: "tutorials", name: "Tutorials", count: 18 },
    { id: "announcements", name: "Announcements", count: 8 },
    { id: "success-stories", name: "Success Stories", count: 12 },
    { id: "tech-insights", name: "Tech Insights", count: 6 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern React Applications with TypeScript",
      excerpt:
        "Learn advanced patterns and best practices for building scalable React applications using TypeScript.",
      author: "Sarah Chen",
      date: "2025-06-20",
      readTime: "8 min read",
      category: "tutorials",
      tags: ["React", "TypeScript", "Frontend"],
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 2,
      title: "Community Spotlight: From Bootcamp to Senior Developer",
      excerpt:
        "Meet Alex Rodriguez, who went from our Web Development Bootcamp to landing a senior role at a Fortune 500 company.",
      author: "Dev Team",
      date: "2025-06-19",
      readTime: "5 min read",
      category: "success-stories",
      tags: ["Success Story", "Career"],
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 3,
      title: "Introducing Our New AI & Machine Learning Track",
      excerpt:
        "Exciting news! We're launching a comprehensive AI/ML track with hands-on projects and industry mentorship.",
      author: "Learners Arc Team",
      date: "2025-06-18",
      readTime: "3 min read",
      category: "announcements",
      tags: ["AI", "ML", "Announcement"],
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 4,
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "Explore emerging trends, new frameworks, and technologies that are shaping the future of web development.",
      author: "Tech Insights Team",
      date: "2025-06-17",
      readTime: "12 min read",
      category: "tech-insights",
      tags: ["Web Development", "Trends", "2025"],
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 5,
      title: "Mastering Docker for Modern Development Workflows",
      excerpt:
        "Complete guide to containerization, from basics to advanced orchestration with Docker and Kubernetes.",
      author: "DevOps Team",
      date: "2025-06-16",
      readTime: "15 min read",
      category: "tutorials",
      tags: ["Docker", "DevOps", "Containers"],
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 6,
      title: "June Bootcamp Cohort Graduation: 98% Job Placement Rate",
      excerpt:
        "Celebrating our latest graduates with an impressive 98% job placement rate within 3 months of completion.",
      author: "Career Services",
      date: "2025-06-15",
      readTime: "4 min read",
      category: "announcements",
      tags: ["Graduation", "Success", "Statistics"],
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-12 rounded-xl bg-terminal-green/10 border border-terminal-green/30 flex items-center justify-center">
              <TagIcon className="w-6 h-6 text-terminal-green" />
            </div>
            <h2 className="text-4xl font-bold text-foreground-primary">
              Latest <span className="cyber-text">Insights</span>
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground-secondary max-w-3xl mx-auto"
          >
            Stay updated with the latest tutorials, community news, and tech
            insights from our vibrant developer community.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === category.id
                  ? "border-terminal-green bg-terminal-green/10 text-terminal-green"
                  : "border-gray-600 text-foreground-secondary hover:border-terminal-green/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <Badge className="ml-2" variant="cyber" size="xs">
                {category.count}
              </Badge>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "all" && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl glass-card border border-terminal-green/20 p-8">
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="cyber" size="sm">
                  Featured
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground-muted">
                      <UserIcon className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground-muted">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground-muted">
                      <ClockIcon className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground-primary mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-foreground-secondary mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="glass" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="gradient" size="lg" className="group">
                    Read Article
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden border border-gray-600">
                    <div className="w-full h-full bg-gradient-to-br from-terminal-green/20 to-cyber-blue/20 flex items-center justify-center">
                      <div className="text-foreground-muted">
                        Featured Image
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden border border-gray-600 hover:border-terminal-green/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gradient-to-br from-terminal-green/10 to-cyber-blue/10 flex items-center justify-center border-b border-gray-600">
                <div className="text-foreground-muted">Blog Image</div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-foreground-muted">
                  <div className="flex items-center gap-1">
                    <UserIcon className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground-primary mb-3 group-hover:text-terminal-green transition-colors">
                  {post.title}
                </h3>

                <p className="text-foreground-secondary mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="glass" size="xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground-muted flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </span>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-terminal-green hover:text-terminal-green/80 font-medium text-sm flex items-center gap-1 group/link"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Posts */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All Posts
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
