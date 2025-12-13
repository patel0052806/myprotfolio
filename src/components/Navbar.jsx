
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 p-6 flex justify-center">
      <nav className="glass px-2 py-2 rounded-full flex gap-1 shadow-lg shadow-black/50">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className="relative px-4 md:px-6 py-2 text-sm font-medium transition-colors z-10 hover:text-white text-slate-400">
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-slate-800 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={isActive ? "text-cyan-400" : ""}>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
