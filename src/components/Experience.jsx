import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import data from '../data.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">Experience</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        My professional journey and internships.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-start mb-8 gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex-shrink-0 flex items-center justify-center shadow-elevation mr-4">
                                <Briefcase size={20} className="text-accent" />
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-2xl font-bold text-primary drop-shadow-sm">{exp.role}</h3>
                                    {exp.duration && (
                                        <span className="text-accent text-sm font-medium mt-2 md:mt-0 md:ml-4 px-3 py-1 bg-accent/10 rounded-full border border-accent/20 whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-secondary font-semibold text-lg mb-4 tracking-wide">{exp.company}</h4>
                                {Array.isArray(exp.description) ? (
                                    <ul className="list-disc list-outside ml-5 text-slate-400 leading-relaxed text-md font-light space-y-2 mb-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-slate-400 leading-relaxed text-md font-light mb-4">
                                        {exp.description}
                                    </p>
                                )}
                                {exp.links && (
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {exp.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm px-3 py-1 rounded-full bg-surface border border-accent/30 text-secondary hover:bg-accent/10 hover:text-accent transition-colors"
                                            >
                                                {link.name}
                                                <ExternalLink size={14} className="ml-1.5" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
