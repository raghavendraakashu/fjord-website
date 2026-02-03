
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, LayoutPanelLeft, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Logic",
      description: "We write code that is readable, maintainable, and built to survive long-term scaling requirements."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Velocity",
      description: "Performance isn't an afterthought. We optimize for high-speed delivery and low-latency interaction."
    },
    {
      icon: <LayoutPanelLeft className="w-6 h-6" />,
      title: "Clarity",
      description: "Digital systems should be intuitive. We design structures that simplify complexity for the end user."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Stability",
      description: "Our engineering ensures your platform remains resilient under heavy concurrency and global demand."
    }
  ];

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Technical Philosophy</span>
            <h1 className="text-6xl md:text-[8rem] font-bold text-slate-950 mt-8 mb-12 tracking-tighter leading-[0.9]">Our <br />Approach.</h1>
            <p className="text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
              FJORD is an independent, remote-first web development team building modern websites and web applications. We prioritize engineering integrity over passing trends.
            </p>
          </motion.div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-48 items-start">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-slate-950 tracking-tight leading-tight">
              We work with founders and businesses to create fast, reliable, and scalable digital products without unnecessary complexity.
            </h2>
            <div className="space-y-8 text-slate-500 text-lg leading-relaxed font-light">
              <p>
                FJORD was established on the principle that digital products should be as resilient as they are intuitive. In a crowded marketplace, we prioritize structural excellence and technical depth to ensure long-term ROI.
              </p>
              <p>
                Operating as a remote-first engineering group, we serve clients who value focused quality. We reject bloated agency workflows in favor of a direct, expert-led partnership that ensures every line of code serves a specific business purpose.
              </p>
              <p>
                Our team specializes in React, high-performance backends, and modular UI engineering. We combine deep technical knowledge with a minimalist aesthetic to deliver outcomes that drive real technical growth.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, idx) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="p-10 bg-slate-50 rounded-[2.5rem] hover:bg-slate-950 hover:text-white transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-white text-slate-950 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-light">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
