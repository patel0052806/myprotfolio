import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe, Cpu, Database, Code2, Sparkles, Zap, Rocket, Award, BookOpen } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiJavascript,
} from 'react-icons/si';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Floating particles
  const Particles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            opacity: [null, Math.random() * 0.5]
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

  const SkillCard = ({ title, icon, gradient, skills, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative group"
    >
      {/* Glowing border */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500`} />
      
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-3xl`} />
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        {/* Skills list */}
        <div className="space-y-3 relative z-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 + i * 0.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 group/skill cursor-default"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors">
                {skill.name}
              </span>
              {hoveredSkill === skill.name && (
                <motion.div
                  layoutId="skillHighlight"
                  className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 rounded-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <Particles />
      
      {/* Animated background blobs */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 pt-32 px-6 max-w-7xl mx-auto pb-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              About Me
            </h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Bio & Education */}
          <div className="space-y-8">
            
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-6 h-6 text-cyan-400" />
                    <h2 className="text-2xl font-bold text-white">Who I Am</h2>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    Hello! I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
                      Taufik
                    </span>
                    , a passionate full-stack developer from{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">
                      Vadodara, Gujarat
                    </span>
                    .
                  </p>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I love building modern web apps with clean UI, strong backend, and scalable architecture. 
                    I focus on writing code that not only works — but{' '}
                    <span className="text-cyan-400 font-semibold italic">feels premium</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education Timeline</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />
                
                <div className="space-y-8">
                  {/* BCA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50" />
                    <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">Bachelor of Computer Applications</h4>
                        <Award className="w-5 h-5 text-cyan-400" />
                      </div>
                      <p className="text-cyan-400 font-mono text-sm mb-2">2023 – 2026 (Expected)</p>
                      <p className="text-slate-400">M.K. Institute of Computer Studies, Bharuch (VNSGU)</p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '70%' }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                          />
                        </div>
                        <span className="text-cyan-400 text-sm font-bold">70% Complete</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* 12th */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50" />
                    <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-bold text-white mb-2">Higher Secondary (12th – Commerce)</h4>
                      <p className="text-purple-400 font-mono text-sm mb-2">2023</p>
                      <p className="text-slate-400">M.M. High School, Ikher</p>
                      <div className="mt-3 inline-flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 text-sm font-semibold">Completed</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 mb-2"
            >
              <Code2 className="w-6 h-6 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
            </motion.div>

            <SkillCard
              title="Frontend"
              icon={<Globe className="w-6 h-6 text-white" />}
              gradient="from-cyan-500 to-blue-600"
              skills={[
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
                { name: "JavaScript ES6+", icon: <SiJavascript className="text-yellow-400" /> },
              ]}
              delay={0.8}
            />

            <SkillCard
              title="Backend"
              icon={<Cpu className="w-6 h-6 text-white" />}
              gradient="from-purple-500 to-pink-600"
              skills={[
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-slate-200" /> },
                { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
              ]}
              delay={0.9}
            />

            <SkillCard
              title="Database"
              icon={<Database className="w-6 h-6 text-white" />}
              gradient="from-emerald-500 to-teal-600"
              skills={[
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
              ]}
              delay={1}
            />

            <SkillCard
              title="Tools & Others"
              icon={<Code2 className="w-6 h-6 text-white" />}
              gradient="from-orange-500 to-red-600"
              skills={[
                { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
                { name: "VS Code", icon: "💻" },
                { name: "Postman", icon: "🚀" },
              ]}
              delay={1.1}
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Learning', value: '2+', gradient: 'from-cyan-500 to-blue-600' },
            { label: 'Projects Built', value: '3+', gradient: 'from-purple-500 to-pink-600' },
            { label: 'Technologies', value: '10+', gradient: 'from-emerald-500 to-teal-600' },
            { label: 'Coffee Cups', value: '∞', gradient: 'from-orange-500 to-red-600' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 text-center">
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}