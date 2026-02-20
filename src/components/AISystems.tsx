import { motion } from 'framer-motion';
import { Cpu, Binary } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AISystems = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: "Hirevion",
            subtitle: "AI CV Analyzer & Talent Matching Platform",
            desc: "Intelligent CV analysis and talent matching system powered by AI for streamlined recruitment processes.",
            tech: "React, Python, OpenAI, NLP",
            image: "/projects/Hirevion.png"
        },
        {
            title: "LINKY",
            subtitle: "LinkedIn Profile Optimizer",
            desc: "An intelligent agent that analyzes profiles and generates high-converting content using LLMs.",
            tech: "React, Python, OpenAI",
            image: "/projects/linkyai.png"
        },
        {
            title: "PoliKey",
            subtitle: "ARCA Regulatory Compliance",
            desc: "Automated regulatory analysis system ensuring compliance with complex legal frameworks.",
            tech: "Python, RAG, Pinecone",
            image: "/projects/polikey.png"
        },
        {
            title: "CONFIG AI",
            subtitle: "Price Prediction System",
            desc: "Machine learning model for real-time market price analysis and predictive modeling.",
            tech: "Scikit-Learn, FastAPI",
            image: "/projects/configai.png"
        }
    ];

    const capabilities = [
        t('ai.cap_1'),
        t('ai.cap_2'),
        t('ai.cap_3'),
        t('ai.cap_4'),
        t('ai.cap_5'),
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase bg-secondary/10 px-3 py-1 rounded">
                            {t('ai.badge')}
                        </span>
                        <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                            {t('ai.title')}
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            {t('ai.subtitle')}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {capabilities.map(cap => (
                            <span key={cap} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-bold text-slate-500 uppercase tracking-wider">
                                {cap}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.6, 
                                delay: idx * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl h-full"
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-950 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 p-2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                            </div>

                            <div className="relative p-6">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Cpu className="w-12 h-12 text-white" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center text-secondary mb-3">
                                        <span className="text-[10px] font-bold tracking-widest uppercase border border-secondary/30 px-2 py-0.5 rounded mr-3">
                                            {t('ai.proj_prefix')} 0{idx + 1}
                                        </span>
                                        <div className="h-px flex-grow bg-secondary/20"></div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{project.title}</h3>
                                    <p className="text-secondary/80 text-[11px] font-medium mb-3">{project.subtitle}</p>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 border border-white/10 rounded-lg p-2">
                                        <Binary className="w-3 h-3 mr-2 text-secondary" />
                                        {t('ai.stack')}: {project.tech}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AISystems;
