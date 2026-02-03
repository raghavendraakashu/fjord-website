
import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PROJECTS, SERVICES, PROCESS } from '../constants.tsx';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const foregroundOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const maskReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  const imageReveal: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.1 },
    show: { 
      clipPath: "inset(0 0% 0 0)", 
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen pt-40 pb-24 mesh-gradient flex items-center overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] flex items-end justify-center"
        >
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M200 800L720 300L1240 800H200Z" fill="currentColor" />
            <path d="M-100 800L400 450L900 800H-100Z" fill="currentColor" />
            <path d="M800 800L1150 550L1500 800H800Z" fill="currentColor" />
            <rect x="0" y="750" width="1440" height="2" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.div style={{ y: foregroundY, opacity: foregroundOpacity }} className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-5xl">
            <motion.div variants={containerVariants} initial="hidden" animate="show">
              <header className="overflow-hidden mb-6">
                <motion.span variants={maskReveal} className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600">
                  Engineering high-performance digital products
                </motion.span>
              </header>
              
              <div className="overflow-hidden mb-10">
                <motion.h1 variants={maskReveal} className="text-6xl md:text-[8rem] font-bold tracking-tighter text-slate-950 leading-[0.9] text-balanced">
                  Digital <br />
                  <span className="text-slate-300">Engineering.</span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-2xl"
              >
                <p className="text-xl md:text-2xl text-slate-500 mb-6 leading-relaxed font-light">
                  FJORD is an independent, remote-first web development team. We build and design high-performance web applications for partners that value precision and scalability.
                </p>
                
                {/* Emotional Hook */}
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-14">
                  Focused on <span className="text-blue-600">engineering integrity</span> and technical craftsmanship.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8">
                  <Link to="/contact" className="px-12 py-6 bg-slate-950 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center group shadow-2xl shadow-slate-200">
                    Initiate Project
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/work" className="px-12 py-6 border border-slate-200 text-slate-950 font-semibold rounded-full hover:bg-slate-50 transition-all flex items-center justify-center">
                    View Work
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Signal Ribbon */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale contrast-125">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em]">High-performance engineering</span>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Security-first approach</span>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Optimized UI Blueprints</span>
             <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-[0.4em]">Structural integrity by default</span>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-48 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
            <div className="lg:col-span-6">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
                Core Competencies
              </motion.span>
              <motion.h2 
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold text-slate-950 mt-8 tracking-tighter"
              >
                Technical Excellence <br />In Every Line.
              </motion.h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-slate-500 text-xl leading-relaxed font-light">
                We believe in direct partnership. FJORD collaborates with visionary founders to engineer web systems that prioritize longevity and technical ROI over passing trends.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group p-12 bg-slate-50 rounded-[3rem] hover:bg-slate-950 hover:text-white transition-all duration-700"
              >
                <div className="w-12 h-12 bg-white text-slate-950 rounded-2xl flex items-center justify-center mb-12 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 tracking-tight">{service.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed font-light">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Methodology</span>
            <h2 className="text-4xl md:text-7xl font-bold text-slate-950 mt-8 tracking-tighter">A Focused Approach.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PROCESS.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-6xl font-black text-slate-200/50 block mb-8">{step.number}</span>
                <h3 className="text-xl font-bold text-slate-950 mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-48 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">Selected Projects</span>
              <h2 className="text-5xl md:text-8xl font-bold mt-8 tracking-tighter text-slate-100">Archives.</h2>
              <p className="text-slate-400 mt-6 max-w-sm text-sm font-light tracking-wide italic">
                A selection of systems we’ve engineered with precision.
              </p>
            </motion.div>
            <Link to="/work" className="hidden md:flex items-center text-white/40 font-semibold hover:text-white transition-colors tracking-tight text-sm mt-8 md:mt-0">
              Explore All <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <motion.div variants={imageReveal} className="relative aspect-[14/10] overflow-hidden rounded-[3rem] mb-12 bg-slate-900 shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                </motion.div>
                <div className="flex justify-between items-start">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} 
                      whileInView={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5 + (idx * 0.2) }}
                      className="max-w-md"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold">{project.category}</span>
                        <h3 className="text-4xl font-bold mt-4 mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-500">{project.title}</h3>
                        <p className="text-slate-400 text-lg font-light leading-relaxed">{project.description}</p>
                    </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-60 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="text-5xl md:text-[9rem] font-bold text-slate-950 mb-16 tracking-tighter leading-[0.85]">
              Build for <br /><span className="text-slate-300">Longevity.</span>
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl mb-20 max-w-xl mx-auto font-light leading-relaxed">
              We partner with forward-thinking leaders to engineer long-term technical integrity. Inquiries open for new partnerships.
            </p>
            <Link to="/contact" className="inline-flex px-14 py-7 bg-slate-950 text-white font-bold rounded-full hover:scale-105 transition-all duration-500 items-center shadow-2xl group">
              Initiate Project
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
