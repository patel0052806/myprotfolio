import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Github, ExternalLink, Folder, Code2, Globe, Database } from 'lucide-react';

export default function Projects() {
  
  // UPDATED DATA: Matches your Resume & New PHP Project
  // No need for axios/localhost. This runs everywhere perfectly.
  const projects = [
    { 
      _id: 1, 
      title: 'Real-Time Chat Application', 
      desc: 'A seamless real-time messaging platform built with Core PHP and MySQL. Features include secure login/signup, AJAX-based dynamic message fetching, and a responsive UI.', 
      tags: ['PHP', 'MySQL', 'AJAX', 'CSS'], 
      link: 'https://chatappbytaufik.my-style.in/', 
      github: 'https://github.com/patel0052806/chat-app',
      icon: <Globe className="text-purple-400" />
    },
    { 
      _id: 2, 
      title: 'Crowdfunding Platform', 
      desc: 'Scalable MERN stack system for campaign creation and donations. Includes JWT Authentication, secure REST API backend, and a modern Tailwind CSS interface.', 
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'], 
      link: 'https://crowdfunding-frontend-jet.vercel.app/', 
      github: 'https://github.com/patel0052806',
      icon: <Code2 className="text-cyan-400" />
    },
    { 
      _id: 3, 
      title: 'Crowdfunding Website (PHP)', 
      desc: 'Dynamic crowdfunding site with relational database architecture. Includes a comprehensive Admin Dashboard for managing funds and campaigns.', 
      tags: ['PHP', 'MySQL', 'Bootstrap'], 
      link: 'https://taufik-crowdfunding.infinityfree.me/', 
      github: 'https://github.com/patel0052806',
      icon: <Database className="text-emerald-400" />
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <PageTransition className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-20">
      
      {/* Header Section */}
      <div className="mb-16">
        <h2 className="text-cyan-400 font-mono mb-2">03. My Work</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
      </div>
      
      {/* Projects Grid with Animation */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div 
            key={project._id} 
            variants={item}
            className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

            {/* Card Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors">
                    {project.icon || <Folder className="w-6 h-6 text-cyan-400" />}
                </div>
                <div className="flex gap-4">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={20}/>
                        </a>
                    )}
                    {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <ExternalLink size={20}/>
                        </a>
                    )}
                </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-[calc(100%-80px)]">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    {project.tags && project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded-md border border-cyan-900/30">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageTransition>
  );
}