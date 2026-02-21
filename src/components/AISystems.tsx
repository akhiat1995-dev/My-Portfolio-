import { motion } from 'framer-motion';
import { Cpu, Binary, Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectModal, { type Project } from './ui/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const AISystems = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const decor1Ref = useRef<HTMLDivElement>(null);
    const decor2Ref = useRef<HTMLDivElement>(null);
    const decor3Ref = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    useGSAP(
        () => {
            if (decor1Ref.current) {
                gsap.to(decor1Ref.current, {
                    y: -120,
                    x: 50,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (decor2Ref.current) {
                gsap.to(decor2Ref.current, {
                    y: -60,
                    x: -30,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (decor3Ref.current) {
                gsap.to(decor3Ref.current, {
                    y: -100,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                });
            }
        },
        { scope: sectionRef }
    );

    const projects: Project[] = [
        {
            id: 'hirevion',
            title: "Hirevion",
            subtitle: "AI CV Analyzer & Talent Matching Platform",
            desc: "Intelligent CV analysis and talent matching system powered by AI for streamlined recruitment processes.",
            fullDesc: "Hirevion is an advanced AI-powered platform designed to revolutionize the recruitment process. It leverages Natural Language Processing and Machine Learning to automatically analyze CVs, extract key information, and match candidates with job requirements. The system helps HR teams reduce time-to-hire by 60% while improving candidate quality through intelligent filtering.",
            tech: "React, Python, OpenAI, NLP",
            techStack: ["React", "TypeScript", "Python", "FastAPI", "OpenAI GPT-4", "Pinecone", "PostgreSQL", "Docker"],
            image: "/projects/Hirevion.png",
            features: [
                "Automatic CV parsing and data extraction",
                "AI-powered skill matching algorithms",
                "Real-time candidate ranking system",
                "Custom job requirement templates",
                "Analytics dashboard for HR insights",
                "Multi-language CV support"
            ],
            date: "2024",
            link: "#",
            github: "#"
        },
        {
            id: 'linky',
            title: "LINKY",
            subtitle: "LinkedIn Profile Optimizer",
            desc: "An intelligent agent that analyzes profiles and generates high-converting content using LLMs.",
            fullDesc: "LINKY is an intelligent LinkedIn optimization agent that analyzes user profiles and generates personalized, high-converting content. Using advanced LLMs, it provides actionable recommendations for headlines, about sections, and experience descriptions. The tool has helped over 500+ professionals increase their profile views by an average of 300%.",
            tech: "React, Python, OpenAI",
            techStack: ["React", "Next.js", "Python", "OpenAI GPT-4", "LangChain", "Supabase", "Tailwind CSS", "Vercel"],
            image: "/projects/linkyai.png",
            features: [
                "Comprehensive profile analysis",
                "AI-generated headline suggestions",
                "About section content generation",
                "Keyword optimization for search",
                "Profile strength scoring",
                "A/B testing for content variations"
            ],
            date: "2024",
            link: "#",
            github: "#"
        },
        {
            id: 'polikey',
            title: "PoliKey",
            subtitle: "ARCA Regulatory Compliance",
            desc: "Automated regulatory analysis system ensuring compliance with complex legal frameworks.",
            fullDesc: "PoliKey is a sophisticated regulatory compliance system built for financial institutions. It uses RAG (Retrieval-Augmented Generation) to analyze complex legal documents and provide instant compliance assessments. The system processes thousands of regulatory updates daily and alerts users to relevant changes that affect their operations.",
            tech: "Python, RAG, Pinecone",
            techStack: ["Python", "FastAPI", "LangChain", "Pinecone", "OpenAI", "PostgreSQL", "Redis", "Kubernetes"],
            image: "/projects/polikey.png",
            features: [
                "Real-time regulatory document analysis",
                "Automated compliance checking",
                "Risk assessment scoring",
                "Regulatory change notifications",
                "Audit trail generation",
                "Multi-jurisdiction support"
            ],
            date: "2024",
            link: "#"
        },
        {
            id: 'configai',
            title: "CONFIG AI",
            subtitle: "Price Prediction System",
            desc: "Machine learning model for real-time market price analysis and predictive modeling.",
            fullDesc: "CONFIG AI is a powerful price prediction system that uses ensemble machine learning models to forecast market prices with high accuracy. The system processes real-time market data, identifies patterns, and generates predictions for various asset classes. It includes a comprehensive dashboard for visualization and automated alert systems for price movements.",
            tech: "Scikit-Learn, FastAPI",
            techStack: ["Python", "Scikit-Learn", "XGBoost", "TensorFlow", "FastAPI", "Redis", "PostgreSQL", "Docker", "Grafana"],
            image: "/projects/configai.png",
            features: [
                "Real-time price prediction",
                "Multi-asset class support",
                "Ensemble model predictions",
                "Historical data analysis",
                "Custom alert configurations",
                "API for third-party integration"
            ],
            date: "2023",
            link: "#"
        }
    ];

    const capabilities = [
        t('ai.cap_1'),
        t('ai.cap_2'),
        t('ai.cap_3'),
        t('ai.cap_4'),
        t('ai.cap_5'),
    ];

    const openModal = (project: Project, index: number) => {
        setSelectedProject(project);
        setSelectedProjectIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
                <div ref={decor1Ref} className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div ref={decor2Ref} className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                <div ref={decor3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/50 rounded-full blur-[60px] pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: idx * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover={{ y: -10 }}
                                onClick={() => openModal(project, idx)}
                                className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl h-full cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden bg-slate-950 flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 p-2"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                    
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <Expand className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
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

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 border border-white/10 rounded-lg p-2">
                                                <Binary className="w-3 h-3 mr-2 text-secondary" />
                                                {t('ai.stack')}: {project.tech.split(',')[0]}
                                            </div>
                                            <span className="text-[10px] text-slate-500 group-hover:text-secondary transition-colors">
                                                Click to view
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
                projectIndex={selectedProjectIndex}
            />
        </>
    );
};

export default AISystems;
