import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, Code, Briefcase, GraduationCap, Sparkles, Zap } from 'lucide-react';

export default function Resume() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <Particles />
      
      {/* Animated background blobs */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 pt-28 px-4 md:px-8 max-w-6xl mx-auto pb-20">
        
        {/* Header with download button */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-2 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full" />
            <div>
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Resume</h1>
              <p className="text-slate-400 text-sm mt-1">Professional Background & Expertise</p>
            </div>
          </div>
          
          <motion.a 
            href="/resume.pdf" 
            download="Taufik_Patel_Resume.pdf"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="group flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-cyan-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity" />
            <Download size={22} className="relative z-10" />
            <span className="relative z-10">Download PDF</span>
          </motion.a>
        </motion.div>

        {/* Main resume container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glowing border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl -z-10" />
            
            {/* Header section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-b border-slate-700/50 pb-8 mb-10"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <motion.h2 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight"
                  >
                    TAUFIK ABDULLAH PATEL
                  </motion.h2>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                    <p className="text-cyan-400 text-lg font-mono tracking-widest uppercase">Full Stack Developer</p>
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-slate-400 text-sm space-y-2.5"
                >
                  <p className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-800 rounded-lg"><Mail size={14} className="text-cyan-400" /></div>
                    pateltaufik266@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-800 rounded-lg"><Phone size={14} className="text-cyan-400" /></div>
                    +91 82005 18738
                  </p>
                  <p className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-800 rounded-lg"><MapPin size={14} className="text-cyan-400" /></div>
                    Mankan, Karjan, Vadodara
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a href="https://github.com/patel0052806" target="_blank" className="p-2 bg-slate-800 rounded-lg text-slate-400 transition-all">
                      <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/taufik-patel-984372315" target="_blank" className="p-2 bg-slate-800 rounded-lg text-slate-400 transition-all">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Left column */}
              <div className="md:col-span-1 space-y-8">
                
                {/* Education */}
                <motion.section
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* BCA */}
                    <div className="relative pl-6 border-l-2 border-cyan-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900" />
                      <h4 className="text-slate-200 font-bold mb-1">Bachelor of Computer Applications</h4>
                      <p className="text-cyan-400 text-xs font-mono mb-2">2023 - 2026 Expected</p>
                      <p className="text-slate-500 text-sm mb-4">M.K. Institute, Bharuch (VNSGU)</p>
                      
                      <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 mb-3">
                          <span className="flex justify-between"><span>Sem 1:</span><strong className="text-slate-300">6.91</strong></span>
                          <span className="flex justify-between"><span>Sem 2:</span><strong className="text-slate-300">7.27</strong></span>
                          <span className="flex justify-between"><span>Sem 3:</span><strong className="text-slate-300">6.73</strong></span>
                          <span className="flex justify-between"><span>Sem 4:</span><strong className="text-slate-300">6.36</strong></span>
                        </div>
                        <div className="pt-3 border-t border-slate-700">
                          <div className="flex justify-between items-center">
                            <span className="text-cyan-400 font-bold text-sm">Sem 5 SGPA</span>
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">7.18</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 12th */}
                    <div className="relative pl-6 border-l-2 border-cyan-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-slate-200 font-bold">HSC (12th Grade)</h4>
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-bold">64%</span>
                      </div>
                      <p className="text-cyan-400 text-xs font-mono mb-1">2023</p>
                      <p className="text-slate-500 text-sm">M.M. High School, Ikher</p>
                    </div>

                    {/* 10th */}
                    <div className="relative pl-6 border-l-2 border-cyan-500/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900" />
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-slate-200 font-bold">SSC (10th Grade)</h4>
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">69%</span>
                      </div>
                      <p className="text-slate-500 text-sm">Secondary School</p>
                    </div>
                  </div>
                </motion.section>

                {/* Skills */}
                <motion.section
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">Technical Skills</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Frontend', skills: 'HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind', color: 'cyan' },
                      { title: 'Backend', skills: 'PHP, Node.js, Express.js', color: 'blue' },
                      { title: 'Database', skills: 'MySQL, MongoDB', color: 'purple' },
                      { title: 'Tools', skills: 'Git, GitHub, VS Code, Postman', color: 'pink' }
                    ].map((skill, i) => (
                      <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50"
                      >
                        <span className={`text-${skill.color}-400 font-bold block mb-2 text-sm`}>{skill.title}</span>
                        <p className="text-slate-400 text-sm leading-relaxed">{skill.skills}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </div>

              {/* Right column */}
              <div className="md:col-span-2 space-y-8">
                
                {/* Projects */}
                <motion.section
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">Featured Projects</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Project 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            <h4 className="text-xl font-bold text-white">Real-Time Chat Application</h4>
                          </div>
                          <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1.5 rounded-full font-mono border border-purple-500/30">PHP + MySQL</span>
                        </div>
                        <ul className="space-y-2 mb-4 text-slate-400 text-sm">
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" /> Built a robust real-time messaging platform using Core PHP and MySQL</li>
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" /> Implemented secure user authentication and dynamic message retrieval</li>
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" /> Designed a responsive UI ensuring smooth experience across devices</li>
                        </ul>
                        <div className="flex gap-3">
                          <a href="https://chatappbytaufik.my-style.in/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                          <a href="https://github.com/patel0052806/chat-app" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-400 rounded-lg text-sm font-medium">
                            <Github size={14} /> Code
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                            <h4 className="text-xl font-bold text-white">Crowdfunding Platform</h4>
                          </div>
                          <span className="bg-cyan-500/20 text-cyan-400 text-xs px-3 py-1.5 rounded-full font-mono border border-cyan-500/30">MERN Stack</span>
                        </div>
                        <ul className="space-y-2 mb-4 text-slate-400 text-sm">
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" /> Developed full-stack crowdfunding system for campaigns and donations</li>
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" /> Implemented secure JWT authentication and responsive UI with Tailwind CSS</li>
                        </ul>
                        <div className="flex gap-3">
                          <a href="https://crowdfunding-frontend-jet.vercel.app/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium border border-cyan-500/30">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <h4 className="text-xl font-bold text-white">Crowdfunding Website (PHP)</h4>
                          </div>
                          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-full font-mono border border-emerald-500/30">PHP + MySQL</span>
                        </div>
                        <ul className="space-y-2 mb-4 text-slate-400 text-sm">
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Created dynamic crowdfunding site with relational database backend</li>
                          <li className="flex gap-2"><Zap className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Includes comprehensive Admin panel for managing campaigns</li>
                        </ul>
                        <div className="flex gap-3">
                          <a href="https://taufik-crowdfunding.infinityfree.me/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">
                            <ExternalLink size=  {14} /> Live Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                {/* Interests & Skills */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">Interests & Soft Skills</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                      <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Areas of Interest
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Full Stack Development, Database Management, System Architecture</p>
                    </div>
                    <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                      <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Soft Skills
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">Problem Solving, Teamwork, Fast Learner, Self-Motivated</p>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}