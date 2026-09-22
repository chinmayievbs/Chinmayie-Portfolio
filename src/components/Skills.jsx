import React from 'react';
import { motion } from 'framer-motion';
import data from '../data.json';

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent">Technical Skills</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        Here are the technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="bg-surface rounded-2xl p-8 border border-surface/20 transition-all duration-500 max-w-5xl mx-auto space-y-12 relative z-10">
                    {Object.entries(data.skills).map(([category, skills], categoryIndex) => (
                        <div key={categoryIndex} className="bg-surface rounded-2xl p-6 border border-surface/20 transition-all duration-500">
                            <motion.h3 className="text-accent text-2xl font-bold mb-4 border-b border-accent/30 pb-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-slate-100 mb-6 border-l-4 border-purple-500 pl-4 tracking-wide drop-shadow-sm"
                            >
                                {category}
                            </motion.h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 bg-surface rounded-full border border-accent/30 text-secondary font-medium hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
