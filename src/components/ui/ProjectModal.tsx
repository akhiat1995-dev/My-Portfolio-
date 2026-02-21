import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    fullDesc: string;
    tech: string;
    techStack: string[];
    image: string;
    features: string[];
    link?: string;
    github?: string;
    date: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    projectIndex: number;
}

const ProjectModal = ({ project, isOpen, onClose, projectIndex }: ProjectModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-primary/90 backdrop-blur-md"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="h-full overflow-y-auto">
                            <div className="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-8"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full border border-secondary/30">
                                            Project 0{projectIndex + 1}
                                        </span>
                                        <span className="flex items-center gap-1 text-white/60 text-xs">
                                            <Calendar className="w-3 h-3" />
                                            {project.date}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">{project.title}</h2>
                                    <p className="text-secondary/90 text-sm font-medium mt-1">{project.subtitle}</p>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-8">
                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
                                        <Layers className="w-5 h-5 text-secondary" />
                                        Overview
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.fullDesc}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {project.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100"
                                            >
                                                <div className="w-2 h-2 mt-1.5 rounded-full bg-secondary flex-shrink-0" />
                                                <span className="text-sm text-slate-700">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
                                        <Cpu className="w-5 h-5 text-secondary" />
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="px-4 py-2 bg-primary/5 text-primary text-xs font-bold rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Live
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary/20 rounded-full font-bold text-sm hover:border-primary transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            Source Code
                                        </a>
                                    )}
                                    <button
                                        onClick={onClose}
                                        className="flex-1 md:flex-none px-6 py-3 text-slate-500 hover:text-primary transition-colors font-medium text-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
export type { Project };
