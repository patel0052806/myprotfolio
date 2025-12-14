import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, MessageCircle, ExternalLink, Send, Sparkles, Zap, Heart } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "pateltaufik266@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Floating particles
  const Particles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <Particles />
      
      {/* Animated background blobs */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto pb-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full backdrop-blur-xl">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm font-semibold">04. What's Next?</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6"
          >
            Get In Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            I am currently open to new opportunities. Whether you have a project in mind, 
            a question, or just want to say hi, feel free to connect!
          </motion.p>
          
          {/* Animated divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column - Contact Details */}
          <div className="space-y-6">
            
            {/* Email Card with Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              onClick={handleCopy}
              className="relative group cursor-pointer"
            >
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 transition-opacity" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl" />
                
                {/* Copy icon */}
                <div className="absolute top-6 right-6 transition-all">
                  {copied ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/30"
                    >
                      <Check size={16} />
                      <span className="text-xs font-mono">Copied!</span>
                    </motion.div>
                  ) : (
                    <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                      <Copy size={20} />
                    </div>
                  )}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Email</h3>
                      <p className="text-slate-400 text-sm">Click to copy address</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-cyan-400 break-all">{email}</p>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-white font-bold text-lg">Mankan, Karjan, Vadodara</p>
                    <p className="text-slate-400 text-sm mt-1">Open to relocation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Phone</p>
                    <p className="text-white font-bold text-lg">+91 82005 18738</p>
                    <p className="text-slate-400 text-sm mt-1">Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Social Connect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="relative"
          >
            {/* Glowing border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
            
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 flex flex-col justify-center space-y-6 h-full">
              <div className="mb-2">
                <div className="flex items-center gap-3 mb-2">
                  <Send className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Social Connect</h3>
                </div>
                <p className="text-slate-400 text-sm">Choose your preferred platform</p>
              </div>
              
              {/* WhatsApp */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                href="https://wa.me/918200518738" 
                target="_blank"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-between p-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-emerald-500/20 group-hover:bg-emerald-500/30 rounded-xl transition-all duration-300">
                      <MessageCircle className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-100 text-lg">WhatsApp</h4>
                      <p className="text-xs text-emerald-400/70">Chat instantly</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 relative z-10" />
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                href="https://www.linkedin.com/in/taufik-patel-984372315" 
                target="_blank"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-between p-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-xl transition-all duration-300">
                      <Linkedin className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-100 text-lg">LinkedIn</h4>
                      <p className="text-xs text-blue-400/70">Let's connect professionally</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 relative z-10" />
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                href="https://github.com/patel0052806" 
                target="_blank"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-500/30 to-slate-400/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-between p-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-500/50 rounded-xl overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-slate-700/50 group-hover:bg-slate-700/80 rounded-xl transition-all duration-300">
                      <Github className="w-7 h-7 text-slate-200" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 text-lg">GitHub</h4>
                      <p className="text-xs text-slate-400">View my code & repos</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 relative z-10" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by Taufik Patel</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}