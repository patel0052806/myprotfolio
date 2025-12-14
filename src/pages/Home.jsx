import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Sparkles, Code2, Zap, Star, Rocket } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'FULL STACK DEVELOPER',
    'MERN STACK EXPERT',
    'UI/UX ENTHUSIAST',
    'PROBLEM SOLVER'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles
  const Particles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: [null, Math.random() * -200 - 100],
            opacity: [null, 0]
          }}
          transition={{ 
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {i % 3 === 0 ? <Sparkles className="w-4 h-4 text-cyan-400" /> : 
           i % 3 === 1 ? <Code2 className="w-3 h-3 text-purple-400" /> :
           <Star className="w-3 h-3 text-blue-400" />}
        </motion.div>
      ))}
    </div>
  );

  // Grid background
  const GridBackground = () => (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      
      <GridBackground />
      <Particles />
      
      {/* Animated background blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0], 
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 50, 0], 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -100, 0], 
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto px-6 pt-20">
        
        {/* Profile section with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -180 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative mb-12 group"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full"
            style={{
              background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
              backgroundSize: "200% 200%",
              filter: "blur(20px)",
              opacity: 0.6
            }}
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400/50"
          />

          {/* Profile image container */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 15, rotateX: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-44 h-44 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75" />
              <img 
                src="/profile.jpg" 
                alt="Taufik" 
                className="relative w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                onError={(e) => {e.target.src='https://via.placeholder.com/256'}} 
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-2xl shadow-xl border-4 border-slate-900"
            >
              <Rocket className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-2xl shadow-xl border-4 border-slate-900"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Animated role text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 h-12 flex items-center"
        >
          <motion.div
            key={currentRole}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-mono text-sm md:text-lg tracking-widest font-black">
              {roles[currentRole]}
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>

        {/* Main headline with stagger effect */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-2"
          >
            <span className="inline-block text-white">
              Taufik
            </span>
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block">
              Patel
            </span>
            <motion.span
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-8 -right-8"
            >
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </motion.span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-3xl text-slate-300 text-lg md:text-2xl mb-12 leading-relaxed"
        >
          I craft{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
            accessible
          </span>
          ,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">
            pixel-perfect
          </span>
          , and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 font-bold">
            performant
          </span>
          {' '}web experiences. Currently pursuing BCA at VNSGU and building the future of the web.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-3 gap-6 mb-12 w-full max-w-2xl"
        >
          {[
            { num: '3+', label: 'Projects' },
            { num: '7.18', label: 'SGPA' },
            { num: '100%', label: 'Passion' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {stat.num}
              </div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex gap-4 mb-10"
        >
          {[
            { href: 'https://github.com/patel0052806?tab=repositories', icon: <Github size={24}/>, gradient: 'from-purple-500 to-pink-600' },
            { href: 'https://www.linkedin.com/in/taufik-patel-984372315', icon: <Linkedin size={24}/>, gradient: 'from-blue-500 to-cyan-600' },
            { href: 'https://www.instagram.com/pateltaufik__005', icon: <Instagram size={24}/>, gradient: 'from-pink-500 to-rose-600' }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500`} />
              <div className="relative p-4 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 text-slate-400 group-hover:text-white group-hover:border-slate-500 transition-all">
                {social.icon}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-white text-lg overflow-hidden shadow-2xl shadow-cyan-500/50"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-3">
              My Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-10 py-5 rounded-2xl font-bold text-white text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border-2 border-slate-700 group-hover:border-cyan-500 transition-all rounded-2xl" />
            <span className="relative">Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs font-mono">SCROLL DOWN</span>
            <motion.div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-slate-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}