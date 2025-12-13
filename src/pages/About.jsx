
import PageTransition from '../components/PageTransition';
import { Code2, Database, Globe, Cpu } from 'lucide-react';

export default function About() {
  return (
    <PageTransition className="min-h-screen pt-32 px-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-12 border-b border-slate-800 pb-4">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column: Bio & Education */}
        <div className="space-y-8">
            <div className="glass p-8 rounded-2xl">
                <p className="text-slate-300 text-lg leading-relaxed">
                    Hello! I'm Taufik, a passionate developer from <span className="text-cyan-400">Vadodara, Gujarat</span>. 
                    I enjoy creating things that live on the internet. My interest in web development 
                    started back in high school and has grown into a full-fledged career path.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Education Timeline</h3>
                <div className="border-l-2 border-cyan-500/30 pl-6 space-y-8 ml-2">
                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20"></span>
                        <h4 className="text-lg font-bold text-slate-200">Bachelor of Computer Applications</h4>
                        <p className="text-sm text-cyan-400">2023 - 2026 (Expected)</p>
                        <p className="text-slate-500">M.K. Institute of Computer Studies, Bharuch (VNSGU)</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20"></span>
                        <h4 className="text-lg font-bold text-slate-200">Higher Secondary (12th)</h4>
                        <p className="text-sm text-cyan-400">2023</p>
                        <p className="text-slate-500">M.M. High School, Ikher | Commerce</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Skills */}
        <div className="grid grid-cols-1 gap-6">
            <SkillCard title="Frontend" icon={<Globe className="text-cyan-400"/>} skills={["React.js", "Tailwind CSS", "HTML5", "JavaScript (ES6+)"]} />
            <SkillCard title="Backend" icon={<Cpu className="text-purple-400"/>} skills={["Node.js", "Express.js", "PHP", "REST APIs"]} />
            <SkillCard title="Database" icon={<Database className="text-emerald-400"/>} skills={["MongoDB", "MySQL"]} />
            <SkillCard title="Tools" icon={<Code2 className="text-orange-400"/>} skills={["Git & GitHub", "VS Code", "Postman"]} />
        </div>
      </div>
    </PageTransition>
  );
}

function SkillCard({ title, icon, skills }) {
    return (
        <div className="glass p-6 rounded-2xl hover:bg-slate-800/50 transition">
            <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800 rounded-md text-xs font-mono text-slate-300 border border-slate-700">
                        {s}
                    </span>
                ))}
            </div>
        </div>
    )
}
