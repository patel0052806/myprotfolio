import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Globe, Code2, Database, Sparkles, Zap, Layers } from 'lucide-react';

export default function Projects() {
  
  const projects = [
    { 
      _id: 1, 
      title: 'Real-Time Chat Application', 
      desc: 'A seamless real-time messaging platform built with Core PHP and MySQL. Features include secure login/signup, AJAX-based dynamic message fetching, and a responsive UI.', 
      tags: ['PHP', 'MySQL', 'AJAX', 'CSS'], 
      link: 'https://chatappbytaufik.my-style.in/', 
      github: 'https://github.com/patel0052806/chat-app',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      color: '#a855f7'
    },
    { 
      _id: 2, 
      title: 'Gen-Z Decoder', 
      desc: 'Interactive web app that translates Gen-Z slang and modern internet terminology. Built with React and Node.js, featuring a comprehensive dictionary of trending words and phrases used by Gen-Z.', 
      tags: ['React', 'Node.js', 'Express', 'API'], 
      link: 'https://gen-z-decoder.vercel.app/', 
      github: 'https://github.com/patel0052806/gen-z-decoder',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      color: '#ec4899'
    },
    { 
      _id: 3, 
      title: 'Crowdfunding Platform', 
      desc: 'Scalable MERN stack system for campaign creation and donations. Includes JWT Authentication, secure REST API backend, and a modern Tailwind CSS interface.', 
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'], 
      link: 'https://crowdfunding-frontend-jet.vercel.app/', 
      github: 'https://github.com/patel0052806',
      icon: <Code2 className="w-6 h-6" />,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      color: '#06b6d4'
    },
    { 
      _id: 4, 
      title: 'Crowdfunding Website (PHP)', 
      desc: 'Dynamic crowdfunding site with relational database architecture. Includes a comprehensive Admin Dashboard for managing funds and campaigns.', 
      tags: ['PHP', 'MySQL', 'Bootstrap'], 
      link: 'https://taufik-crowdfunding.infinityfree.me/', 
      github: 'https://github.com/patel0052806',
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      color: '#10b981'
    },
  ];

  // Floating particles background
  const FloatingParticles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            opacity: [null, Math.random() * 0.5 + 0.2]
          }}
          transition={{ 
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: index * 0.15,
          duration: 0.6,
          ease: "easeOut"
        }}
        className="relative"
      >
        {/* Glowing border effect */}
        <div
          className="absolute -inset-0.5 rounded-3xl blur-xl"
          style={{
            background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`
          }}
        />
        
        {/* Main card */}
        <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden">
          
          {/* Gradient background */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}
          />
          
          {/* Mesh gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl" />
          
          {/* Icon */}
          <div 
            className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5`}
          >
            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center text-white">
              {project.icon}
            </div>
          </div>

          {/* Title */}
          <h3 
            className="text-2xl font-bold text-white mb-3 relative z-10"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-6 relative z-10 line-clamp-3">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + i * 0.1 }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 relative z-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-xl font-medium shadow-lg"
              >
                <Github size={18} />
                Code
              </a>
            )}
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium shadow-lg`}
              >
                <ExternalLink size={18} />
                Demo
              </a>
            )}
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
            <Sparkles className="w-full h-full" style={{ color: project.color }} />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 pt-32 px-6 max-w-7xl mx-auto pb-20">
        
        {/* Header */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full backdrop-blur-xl">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm font-semibold">Featured Work</span>
              <Layers className="w-5 h-5 text-purple-400" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6"
            style={{ backgroundSize: "200% 200%" }}
          >
            Epic Projects
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            Crafting digital experiences that push boundaries and redefine what's possible
          </motion.p>
          
          {/* Animated divider */}
          <motion.div 
            className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <a
              href="https://github.com/patel0052806"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl inline-flex items-center gap-3"
            >
              <Github className="w-5 h-5" />
              Explore More on GitHub
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
