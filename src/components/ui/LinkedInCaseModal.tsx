import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, TrendingUp, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CaseStudy {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    fullDesc: string;
    result: string;
    images: string[];
    features: string[];
    metrics: { label: string; value: string }[];
    link?: string;
    date: string;
}

interface LinkedInCaseModalProps {
    caseStudy: CaseStudy | null;
    isOpen: boolean;
    onClose: () => void;
}

const LinkedInCaseModal = ({ caseStudy, isOpen, onClose }: LinkedInCaseModalProps) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

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

    const nextImage = () => {
        if (caseStudy && caseStudy.images.length > 0) {
            setActiveImageIndex((prev) => (prev + 1) % caseStudy.images.length);
        }
    };

    const prevImage = () => {
        if (caseStudy && caseStudy.images.length > 0) {
            setActiveImageIndex((prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length);
        }
    };

    if (!caseStudy) return null;

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
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="h-full overflow-y-auto">
                            {caseStudy.images.length > 0 && (
                                <div className="relative h-72 md:h-96 bg-slate-100 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={activeImageIndex}
                                            src={caseStudy.images[activeImageIndex]}
                                            alt={caseStudy.title}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full object-contain p-6"
                                        />
                                    </AnimatePresence>

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                    {caseStudy.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-primary hover:bg-white transition-all shadow-lg"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-primary hover:bg-white transition-all shadow-lg"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {caseStudy.images.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setActiveImageIndex(i)}
                                                        className={`w-2 h-2 rounded-full transition-all ${i === activeImageIndex ? 'bg-secondary w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                Growth Case 0{caseStudy.id}
                                            </span>
                                            <span className="flex items-center gap-1 text-white/80 text-xs">
                                                <Calendar className="w-3 h-3" />
                                                {caseStudy.date}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{caseStudy.title}</h2>
                                        <p className="text-secondary/90 text-sm font-medium mt-1">{caseStudy.subtitle}</p>
                                    </div>
                                </div>
                            )}

                            <div className="p-6 md:p-8 space-y-8">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                                        <TrendingUp className="w-4 h-4 text-secondary" />
                                        <span className="text-secondary font-bold text-sm">{caseStudy.result}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-4">Overview</h3>
                                    <p className="text-slate-600 leading-relaxed">{caseStudy.fullDesc}</p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {caseStudy.metrics.map((metric, idx) => (
                                        <motion.div
                                            key={metric.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100"
                                        >
                                            <div className="text-2xl font-extrabold text-secondary">{metric.value}</div>
                                            <div className="text-xs text-slate-500 mt-1">{metric.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div>
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {caseStudy.features.map((feature, idx) => (
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

                                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                                    {caseStudy.link && (
                                        <a
                                            href={caseStudy.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Live
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

export default LinkedInCaseModal;
export type { CaseStudy };
