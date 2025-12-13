
import { useState, useEffect } from 'react';
import axios from 'axios';
import PageTransition from '../components/PageTransition';
import { Github, ExternalLink, Folder } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  
  // Static data for fallback
  const staticProjects = [
    { _id: 1, title: 'Crowdfunding Platform', desc: 'Full-stack system with campaigns & donations. User auth & secure backend.', tags: ['MERN', 'Auth', 'Tailwind'], link: 'https://crowdfunding-frontend-jet.vercel.app/', github: 'https://github.com/patel0052806' },
    { _id: 2, title: 'Real-Time Chat App', desc: 'Real-time messaging with WebSocket, Authentication & message persistence.', tags: ['React', 'Socket.io', 'Node'], link: '#', github: 'https://github.com/patel0052806' },
    { _id: 3, title: 'PHP Crowdfunding', desc: 'Dynamic site with MySQL database and Admin panel.', tags: ['PHP', 'MySQL'], link: 'https://taufik-crowdfunding.infinityfree.me/', github: 'https://github.com/patel0052806' },
  ];

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(res => {
          if(res.data.length > 0) setProjects(res.data);
          else setProjects(staticProjects);
      })
      .catch(() => setProjects(staticProjects));
  }, []);

  return (
    <PageTransition className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-12 border-b border-slate-800 pb-4">Featured Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="glass p-8 rounded-2xl group hover:-translate-y-2 transition duration-300 flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-cyan-400" />
                <div className="flex gap-4">
                    {project.github && <a href={project.github} target="_blank" className="text-slate-400 hover:text-white"><Github size={20}/></a>}
                    {project.link && <a href={project.link} target="_blank" className="text-slate-400 hover:text-white"><ExternalLink size={20}/></a>}
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
            
            <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags && project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-cyan-300">#{tag}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
