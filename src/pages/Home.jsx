
import PageTransition from '../components/PageTransition';
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <PageTransition className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      
      {/* Profile Image with Glow */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <img 
          src="/profile.jpg" 
          alt="Taufik" 
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-slate-800"
          onError={(e) => {e.target.src='https://via.placeholder.com/200'}} 
        />
      </div>

      <h2 className="text-cyan-400 font-mono mb-4 text-sm tracking-widest">FULL STACK MERN DEVELOPER</h2>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        Taufik <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Patel</span>
      </h1>
      <p className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed">
        I build accessible, pixel-perfect, and performant web experiences. 
        Currently pursuing BCA at VNSGU and crafting modern solutions.
      </p>

      <div className="flex gap-4 mb-12">
        <SocialBtn href="https://github.com/patel0052806?tab=repositories" icon={<Github />} />
        <SocialBtn href="https://www.linkedin.com/in/taufik-patel-984372315" icon={<Linkedin />} />
        <SocialBtn href="https://www.instagram.com/pateltaufik__005" icon={<Instagram />} />
      </div>

      <div className="flex gap-4">
        <Link to="/resume" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition flex items-center gap-2">
          My Resume <ArrowRight size={18} />
        </Link>
        <Link to="/contact" className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full transition">
          Contact Me
        </Link>
      </div>
    </PageTransition>
  );
}

function SocialBtn({ href, icon }) {
  return (
    <a href={href} target="_blank" className="p-3 bg-slate-800/50 rounded-full hover:bg-cyan-500 hover:text-white transition-all hover:scale-110 border border-slate-700">
      {icon}
    </a>
  );
}
