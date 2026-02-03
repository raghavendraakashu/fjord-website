
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Zap } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-ultra text-[10px] mb-8 inline-block">Start a Project</span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-12 tracking-tighter">Let's build <br />integrity.</h1>
              <p className="text-xl text-slate-500 mb-20 leading-relaxed font-light">
                To discuss a project or collaboration, reach out to our engineering leads directly via email.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-ultra text-slate-400 mb-1">New Partnerships</h4>
                    <p className="text-lg font-bold text-slate-950 tracking-tight">fjord.build@gmail.com</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100">
              <form action="https://formspree.io/f/xkozlwld" method="POST" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-ultra text-slate-400">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium placeholder:text-slate-300"
                      placeholder="Your Identity"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-ultra text-slate-400">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium placeholder:text-slate-300"
                      placeholder="Electronic Mail"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-ultra text-slate-400">Service Required</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all appearance-none cursor-pointer font-medium text-slate-600">
                      <option>Web Application Development</option>
                      <option>Platform Engineering</option>
                      <option>Identity & UX Design</option>
                      <option>Technical Retainer</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300 italic text-xs">▼</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-ultra text-slate-400">Project Details</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium placeholder:text-slate-300"
                    placeholder="Please outline your technical requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-6 bg-slate-950 text-white font-bold uppercase tracking-ultra text-[11px] rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center group shadow-xl"
                >
                  Initiate Communication
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;
