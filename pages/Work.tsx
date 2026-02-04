
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';

export default function Work() {
  const imageReveal: Variants = {
    hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.2 },
    show: {
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const textFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Archives</span>
            <h1 className="text-6xl md:text-[8rem] font-bold text-slate-950 mt-8 mb-12 tracking-tighter leading-[0.9]">Work.</h1>
            <p className="text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
              Focused execution and digital outcomes for businesses that value structural integrity and high-performance engineering.
            </p>
          </motion.div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer"
            >
              {project.href && project.href.startsWith('http') ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} project in new tab`}
                  className="block"
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-10 bg-slate-50">
                    <motion.img
                      variants={imageReveal}
                      src={project.image}
                      alt={`Project: ${project.title} - ${project.category}`}
                      className="object-cover w-full h-full transition-transform duration-[3s] group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <motion.div variants={textFade} className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">{project.category}</span>
                      <h2 className="text-4xl font-bold mt-4 text-slate-950 group-hover:text-blue-600 transition-colors duration-500">{project.title}</h2>
                      <p className="text-slate-500 mt-6 max-w-sm text-lg font-light leading-relaxed">{project.description}</p>
                    </div>
                    <time className="text-slate-300 font-bold text-xs mt-1 tracking-widest">{project.year}</time>
                  </motion.div>
                </a>
              ) : project.slug ? (
                <Link to={`/work/${project.slug}`}>
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-10 bg-slate-50">
                    <motion.img
                      variants={imageReveal}
                      src={project.image}
                      alt={`Project: ${project.title} - ${project.category}`}
                      className="object-cover w-full h-full transition-transform duration-[3s] group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <motion.div variants={textFade} className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">{project.category}</span>
                      <h2 className="text-4xl font-bold mt-4 text-slate-950 group-hover:text-blue-600 transition-colors duration-500">{project.title}</h2>
                      <p className="text-slate-500 mt-6 max-w-sm text-lg font-light leading-relaxed">{project.description}</p>
                    </div>
                    <time className="text-slate-300 font-bold text-xs mt-1 tracking-widest">{project.year}</time>
                  </motion.div>
                </Link>
              ) : (
                <>
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-10 bg-slate-50">
                    <motion.img
                      variants={imageReveal}
                      src={project.image}
                      alt={`Project: ${project.title} - ${project.category}`}
                      className="object-cover w-full h-full transition-transform duration-[3s] group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <motion.div variants={textFade} className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">{project.category}</span>
                      <h2 className="text-4xl font-bold mt-4 text-slate-950 group-hover:text-blue-600 transition-colors duration-500">{project.title}</h2>
                      <p className="text-slate-500 mt-6 max-w-sm text-lg font-light leading-relaxed">{project.description}</p>
                    </div>
                    <time className="text-slate-300 font-bold text-xs mt-1 tracking-widest">{project.year}</time>
                  </motion.div>
                </>
              )}
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
}
