import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  CodeBracketIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';
import { Button } from '../components/ui';
import ThemeToggle from '../components/ui/ThemeToggle';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login here
      console.log('Login successful:', formData);
    }, 2000);
  };

  const socialLogins = [
    {
      name: 'GitHub',
      icon: '🐙',
      color: 'bg-gray-800 hover:bg-gray-700',
      description: 'Continue with your developer profile'
    },
    {
      name: 'Discord',
      icon: '💬',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      description: 'Join our community instantly'
    },
    {
      name: 'Google',
      icon: '🚀',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Quick and secure access'
    }
  ];

  return (
    <div className="min-h-screen bg-background-primary relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-terminal-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-500/20 font-mono text-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: -100,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {
              [
                'const dev = true;',
                'npm run build',
                'git commit -m "✨"',
                'docker-compose up',
                'yarn install',
                'sudo make install'
              ][Math.floor(Math.random() * 6)]
            }
          </motion.div>
        ))}
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-background-secondary/80 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-gradient-to-r from-terminal-500 to-cyber-blue rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <CodeBracketIcon className="w-8 h-8 text-white" />
            </motion.div>

            <h1 className="text-3xl font-bold text-foreground-primary mb-2">
              Welcome Back, Developer
            </h1>
            <p className="text-foreground-secondary">
              Sign in to access your community dashboard
            </p>
          </div>

          {/* Terminal Style Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-background-code rounded-lg border border-gray-700 p-4 mb-6"
          >
            <div className="flex items-center gap-2 text-terminal-500 font-mono text-sm">
              <CommandLineIcon className="w-4 h-4" />
              <span>$ auth --login --user="developer"</span>
              <div className="w-2 h-4 bg-terminal-500 animate-terminal-blink ml-1" />
            </div>
          </motion.div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-foreground-primary font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    w-full pl-10 pr-4 py-3 bg-background-code border rounded-lg
                    text-foreground-primary font-mono focus:outline-none transition-all duration-300
                    ${errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'border-gray-700 focus:border-terminal-500 focus:ring-1 focus:ring-terminal-500'
                    }
                  `}
                  placeholder="developer@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-foreground-primary font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`
                    w-full pl-10 pr-12 py-3 bg-background-code border rounded-lg
                    text-foreground-primary font-mono focus:outline-none transition-all duration-300
                    ${errors.password 
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'border-gray-700 focus:border-terminal-500 focus:ring-1 focus:ring-terminal-500'
                    }
                  `}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground-muted hover:text-foreground-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-right"
            >
              <Link
                to="/forgot-password"
                className="text-terminal-500 hover:text-terminal-400 text-sm transition-colors"
              >
                Forgot your password?
              </Link>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-terminal-500 to-terminal-600 hover:from-terminal-600 hover:to-terminal-700 text-black font-semibold py-3 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  'Sign In to Community'
                )}
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="my-8"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background-secondary text-foreground-muted font-mono">
                  or continue with
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Login Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="space-y-3"
          >
            {socialLogins.map((social, index) => (
              <motion.button
                key={social.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                  ${social.color} text-white font-medium
                  hover:shadow-lg border border-transparent hover:border-white/10
                `}
              >
                <span className="text-xl">{social.icon}</span>
                <div className="flex-1 text-left">
                  <div>Continue with {social.name}</div>
                  <div className="text-xs opacity-75">{social.description}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center mt-8 pt-6 border-t border-gray-800"
          >
            <p className="text-foreground-muted text-sm">
              New to our community?{' '}
              <Link to="/" className="text-terminal-500 hover:text-terminal-400 transition-colors">
                Explore as Guest
              </Link>
            </p>
            <p className="text-foreground-dim text-xs mt-2">
              By signing in, you agree to our community guidelines
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
