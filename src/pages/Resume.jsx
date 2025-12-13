import PageTransition from '../components/PageTransition';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <PageTransition className="min-h-screen pt-28 px-4 md:px-8 max-w-5xl mx-auto pb-20">
      
      {/* HEADER ACTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-bold text-white border-l-4 border-cyan-400 pl-4">Resume</h1>
        <a 
          href="/resume.pdf" 
          download="Taufik_Patel_Resume.pdf"
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-full font-bold text-white hover:scale-105 transition shadow-lg shadow-cyan-500/20"
        >
          <Download size={20} /> Download PDF
        </a>
      </div>

      {/* RESUME PAPER CONTAINER */}
      <div className="glass p-8 md:p-12 rounded-2xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
        
        {/* HEADER SECTION */}
        <div className="border-b border-slate-700 pb-8 mb-8 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">TAUFIK ABDULLAH PATEL</h2>
            <p className="text-cyan-400 text-lg font-mono tracking-widest uppercase">Full Stack Developer</p>
          </div>
          <div className="text-slate-400 text-sm space-y-2 text-right md:text-left">
            <p className="flex items-center gap-2 md:justify-end"><Mail size={14}/> pateltaufik266@gmail.com</p>
            <p className="flex items-center gap-2 md:justify-end"><Phone size={14}/> +91 82005 18738</p>
            <p className="flex items-center gap-2 md:justify-end"><MapPin size={14}/> Mankan, Karjan, Vadodara</p>
            <div className="flex gap-4 md:justify-end pt-2">
                <a href="https://github.com/patel0052806" target="_blank" className="hover:text-cyan-400"><Github size={18}/></a>
                <a href="https://linkedin.com/in/taufik-patel-984372315" target="_blank" className="hover:text-cyan-400"><Linkedin size={18}/></a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN (SKILLS & EDUCATION) */}
          <div className="md:col-span-1 space-y-8">
            
            <section>
              <h3 className="text-lg font-bold text-white uppercase border-b border-cyan-500/30 pb-2 mb-4">Education</h3>
              <div className="space-y-6">
                
                {/* BCA */}
                <div>
                    <h4 className="text-slate-200 font-semibold">Bachelor of Computer Applications</h4>
                    <p className="text-cyan-400 text-xs font-mono mb-2">2023 - 2026 Expected</p>
                    <p className="text-slate-500 text-sm mb-3">M.K. Institute, Bharuch (VNSGU)</p>
                    
                    {/* Marks Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-800/50 p-3 rounded border border-slate-700 text-slate-400">
                        <span>Sem 1: 6.91</span>
                        <span>Sem 2: 7.27</span>
                        <span>Sem 3: 6.73</span>
                        <span>Sem 4: 6.36</span>
                        <span className="col-span-2 text-cyan-400 font-bold border-t border-slate-600 pt-1 mt-1 text-center">Sem 5: 7.18 SGPA</span>
                    </div>
                </div>

                {/* 12th */}
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <h4 className="text-slate-200 font-semibold">HSC (12th Grade)</h4>
                        <span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded font-bold">64%</span>
                    </div>
                    <p className="text-cyan-400 text-xs font-mono mb-1">2023</p>
                    <p className="text-slate-500 text-sm">M.M. High School, Ikher</p>
                </div>

                {/* 10th */}
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <h4 className="text-slate-200 font-semibold">SSC (10th Grade)</h4>
                        <span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded font-bold">69%</span>
                    </div>
                    <p className="text-slate-500 text-sm">Secondary School</p>
                </div>

              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white uppercase border-b border-cyan-500/30 pb-2 mb-4">Technical Skills</h3>
              <div className="space-y-4 text-sm">
                <div>
                    <span className="text-cyan-400 block font-semibold mb-1">Frontend</span>
                    <p className="text-slate-400">HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind</p>
                </div>
                <div>
                    <span className="text-cyan-400 block font-semibold mb-1">Backend</span>
                    <p className="text-slate-400">PHP, Node.js, Express.js</p>
                </div>
                <div>
                    <span className="text-cyan-400 block font-semibold mb-1">Database</span>
                    <p className="text-slate-400">MySQL, MongoDB</p>
                </div>
                <div>
                    <span className="text-cyan-400 block font-semibold mb-1">Tools</span>
                    <p className="text-slate-400">Git, GitHub, VS Code, Postman</p>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (PROJECTS & DETAILS) */}
          <div className="md:col-span-2 space-y-8">
            
            <section>
              <h3 className="text-lg font-bold text-white uppercase border-b border-cyan-500/30 pb-2 mb-4">Projects</h3>
              
              <div className="space-y-6">
                
                {/* Project 1: Chat App (Updated) */}
                <div className="relative pl-6 border-l border-slate-700">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-200">Real-Time Chat Application</h4>
                    <span className="inline-block bg-purple-900/30 text-purple-400 text-xs px-2 py-0.5 rounded mb-2">PHP + MySQL</span>
                    <ul className="list-disc ml-4 text-slate-400 text-sm space-y-1 mt-2 mb-3">
                        <li>Built a robust real-time messaging platform using <strong>Core PHP</strong> and <strong>MySQL</strong>.</li>
                        <li>Implemented secure user authentication (Login/Signup) and dynamic message retrieval.</li>
                        <li>Designed a responsive UI ensuring smooth experience across devices.</li>
                    </ul>
                    <div className="flex gap-4 text-sm">
                         <a href="https://chatappbytaufik.my-style.in/" target="_blank" className="flex items-center gap-1 text-cyan-400 hover:text-white transition"><ExternalLink size={14}/> Live Demo</a>
                         <a href="https://github.com/patel0052806/chat-app" target="_blank" className="flex items-center gap-1 text-slate-400 hover:text-white transition"><Github size={14}/> GitHub Repo</a>
                    </div>
                </div>

                {/* Project 2: MERN Crowdfunding */}
                <div className="relative pl-6 border-l border-slate-700">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-200">Crowdfunding Platform</h4>
                    <span className="inline-block bg-cyan-900/30 text-cyan-400 text-xs px-2 py-0.5 rounded mb-2">MERN Stack</span>
                    <ul className="list-disc ml-4 text-slate-400 text-sm space-y-1 mt-2 mb-3">
                        <li>Developed a full-stack crowdfunding system allowing users to create campaigns and make donations.</li>
                        <li>Implemented secure user authentication (JWT) and a responsive UI using Tailwind CSS.</li>
                    </ul>
                    <div className="flex gap-4 text-sm">
                        <a href="https://crowdfunding-frontend-jet.vercel.app/" target="_blank" className="flex items-center gap-1 text-cyan-400 hover:text-white transition"><ExternalLink size={14}/> Live Demo</a>
                    </div>
                </div>

                {/* Project 3: PHP Crowdfunding */}
                <div className="relative pl-6 border-l border-slate-700">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-200">Crowdfunding Website (PHP)</h4>
                    <span className="inline-block bg-emerald-900/30 text-emerald-400 text-xs px-2 py-0.5 rounded mb-2">PHP + MySQL</span>
                    <ul className="list-disc ml-4 text-slate-400 text-sm space-y-1 mt-2 mb-3">
                        <li>Created a dynamic crowdfunding site with a relational database backend.</li>
                        <li>Includes a comprehensive Admin panel for managing campaigns.</li>
                    </ul>
                    <div className="flex gap-4 text-sm">
                        <a href="https://taufik-crowdfunding.infinityfree.me/" target="_blank" className="flex items-center gap-1 text-cyan-400 hover:text-white transition"><ExternalLink size={14}/> Live Demo</a>
                    </div>
                </div>

              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white uppercase border-b border-cyan-500/30 pb-2 mb-4">Areas of Interest & Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-2">Interests</h4>
                    <p className="text-slate-400 text-sm">Full Stack Development, Database Management, System Architecture.</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-2">Soft Skills</h4>
                    <p className="text-slate-400 text-sm">Problem Solving, Teamwork, Fast Learner, Self-Motivated.</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}