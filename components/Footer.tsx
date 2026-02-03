
import React from 'react';
import { Link } from 'react-router-dom';
import LogoMark from './LogoMark.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-8">
              <LogoMark size={40} />
              <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">FJORD</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm font-light">
              Engineering the high-performance digital future. Remote-first and globally distributed, FJORD delivers technical excellence from India to the world.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-950 mb-8 text-[10px] uppercase tracking-[0.3em]">Studio</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <li><Link to="/work" className="hover:text-blue-600 transition-colors">Archives</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">Approach</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Inquiry</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors text-slate-200 pointer-events-none">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-950 mb-8 text-[10px] uppercase tracking-[0.3em]">Connect</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <li><a href="mailto:fjord.build@gmail.com?subject=Project Inquiry — FJORD" className="hover:text-blue-600 transition-colors">Email</a></li>
              <li><a href="https://instagram.com/fjord_build" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} FJORD DIGITAL ENGINEERING.
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-slate-950 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-950 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
