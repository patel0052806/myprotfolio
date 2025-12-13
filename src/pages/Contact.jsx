import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "pateltaufik266@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition className="min-h-screen pt-32 px-6 max-w-5xl mx-auto pb-20">
        
        {/* HEADER */}
        <div className="text-center mb-16">
            <h2 className="text-cyan-400 font-mono mb-2">04. What's Next?</h2>
            <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                I am currently open to new opportunities. Whether you have a project in mind, 
                a question, or just want to say hi, feel free to connect!
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div className="space-y-6">
                
                {/* Email Card (Interactive) */}
                <div 
                    onClick={handleCopy}
                    className="glass p-8 rounded-2xl group cursor-pointer hover:bg-slate-800/50 transition duration-300 relative overflow-hidden border border-slate-700/50 hover:border-cyan-500/50"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition">
                        {copied ? <Check className="text-emerald-400" /> : <Copy className="text-slate-400 group-hover:text-cyan-400"/>}
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-cyan-900/20 text-cyan-400 rounded-full">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-200">Email</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-1">Click to copy address</p>
                    <p className="text-xl md:text-2xl font-bold text-white break-all">{email}</p>
                    {copied && <span className="text-xs text-emerald-400 absolute bottom-4 right-8 font-mono">Copied to clipboard!</span>}
                </div>

                {/* Location & Phone Stack */}
                <div className="grid gap-6">
                    <ContactCard 
                        icon={<MapPin className="text-purple-400"/>} 
                        title="Location" 
                        value="Mankan, Karjan, Vadodara" 
                        sub="Open to relocation"
                    />
                    <ContactCard 
                        icon={<Phone className="text-emerald-400"/>} 
                        title="Phone" 
                        value="+91 82005 18738" 
                        sub="Mon-Sat, 9am - 6pm"
                    />
                </div>
            </div>

            {/* RIGHT COLUMN: SOCIAL CONNECT GRID */}
            <div className="glass p-8 rounded-2xl flex flex-col justify-center space-y-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-2">Social Connect</h3>
                
                {/* WhatsApp Button (Direct Chat) */}
                <a 
                    href="https://wa.me/918200518738" 
                    target="_blank"
                    className="group flex items-center justify-between p-4 bg-emerald-900/20 hover:bg-emerald-900/40 border border-emerald-900/50 hover:border-emerald-500 rounded-xl transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <MessageCircle size={28} className="text-emerald-400" />
                        <div>
                            <h4 className="font-bold text-emerald-100">WhatsApp</h4>
                            <p className="text-xs text-emerald-400/70">Chat instantly</p>
                        </div>
                    </div>
                    <ExternalLink size={20} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"/>
                </a>

                {/* LinkedIn Button */}
                <a 
                    href="https://www.linkedin.com/in/taufik-patel-984372315" 
                    target="_blank"
                    className="group flex items-center justify-between p-4 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-900/50 hover:border-blue-500 rounded-xl transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <Linkedin size={28} className="text-blue-400" />
                        <div>
                            <h4 className="font-bold text-blue-100">LinkedIn</h4>
                            <p className="text-xs text-blue-400/70">Let's connect professionally</p>
                        </div>
                    </div>
                    <ExternalLink size={20} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"/>
                </a>

                {/* GitHub Button */}
                <a 
                    href="https://github.com/patel0052806" 
                    target="_blank"
                    className="group flex items-center justify-between p-4 bg-slate-800/40 hover:bg-slate-800 border border-slate-700 hover:border-slate-400 rounded-xl transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <Github size={28} className="text-slate-200" />
                        <div>
                            <h4 className="font-bold text-slate-100">GitHub</h4>
                            <p className="text-xs text-slate-400">View my code & repos</p>
                        </div>
                    </div>
                    <ExternalLink size={20} className="text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"/>
                </a>

            </div>
        </div>
    </PageTransition>
  );
}

function ContactCard({ icon, title, value, sub }) {
    return (
        <div className="glass p-6 rounded-2xl flex items-center gap-5 border border-slate-700/50 hover:border-slate-500 transition duration-300">
            <div className="p-3 bg-slate-800 rounded-full">{icon}</div>
            <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-0.5">{title}</p>
                <p className="text-slate-200 font-bold text-lg">{value}</p>
                {sub && <p className="text-slate-500 text-xs mt-1">{sub}</p>}
            </div>
        </div>
    )
}