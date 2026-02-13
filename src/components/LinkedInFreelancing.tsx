import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Zap, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollSection from './animations/ScrollSection';

const GrowthCard = ({ num }: { num: number }) => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const isClickable = num === 3;
    const subtitle = t(`linkedin.example_${num}_subtitle`);

    const imageMap: Record<number, string[]> = {
        1: ["/projects/creation_contenu.png"],
        2: [],
        3: ["/projects/growth_visibilite.png", "/projects/sdf.jpeg"]
    };

    const images = imageMap[num] || [];
    const hasImage = images.length > 0;
    const isCarousel = images.length > 1;

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const CardContent = (
        <motion.div
            whileHover={isClickable ? { y: -5 } : {}}
            className={`bg-slate-50 rounded-2xl border border-slate-100 transition-all h-full group overflow-hidden ${isClickable ? 'hover:bg-white hover:shadow-xl cursor-pointer' : ''}`}
        >
            {hasImage && (
                <div className="bg-slate-100 flex items-center justify-center relative h-72 border-b border-slate-100 overflow-hidden p-6">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeIndex}
                            src={images[activeIndex]}
                            alt={t(`linkedin.example_${num}_title`)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain"
                        />
                    </AnimatePresence>

                    {isCarousel && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-primary hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-primary hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                {images.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIndex ? 'bg-secondary w-4' : 'bg-slate-300'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    <div className="absolute top-4 right-4 z-10">
                        <div className={`px-3 py-1 bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold rounded-full border border-slate-100 transition-colors ${isClickable ? 'group-hover:bg-secondary group-hover:text-white group-hover:border-secondary' : ''}`}>
                            {t(`linkedin.example_${num}_res`)}
                        </div>
                    </div>
                </div>
            )}
            <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{t('linkedin.growth_case')} 0{num}</div>
                    {!hasImage && (
                        <div className={`px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full transition-colors ${isClickable ? 'group-hover:bg-secondary group-hover:text-white' : ''}`}>
                            {t(`linkedin.example_${num}_res`)}
                        </div>
                    )}
                </div>
                <h4 className={`text-xl font-bold text-primary mb-1 transition-colors ${isClickable ? 'group-hover:text-secondary' : ''}`}>
                    {t(`linkedin.example_${num}_title`)}
                </h4>
                {subtitle && subtitle !== `linkedin.example_${num}_subtitle` && (
                    <p className="text-secondary/80 text-xs font-semibold mb-3">{subtitle}</p>
                )}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {t(`linkedin.example_${num}_desc`)}
                </p>
                <div className="pt-6 border-t border-slate-200 flex items-center text-primary font-bold text-xs uppercase">
                    {t('linkedin.view_cta')} <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${isClickable ? 'group-hover:translate-x-1' : ''}`} />
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="animate h-full">
            {isClickable ? (
                <a
                    href="https://www.linkedin.com/company/gagtools/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                >
                    {CardContent}
                </a>
            ) : (
                <div className="h-full">
                    {CardContent}
                </div>
            )}
        </div>
    );
};

const LinkedInFreelancing = () => {
    const { t } = useLanguage();

    const strategies = [
        {
            title: t('linkedin.strat_1_title'),
            desc: t('linkedin.strat_1_desc'),
            icon: Users,
        },
        {
            title: t('linkedin.strat_2_title'),
            desc: t('linkedin.strat_2_desc'),
            icon: Zap,
        },
        {
            title: t('linkedin.strat_3_title'),
            desc: t('linkedin.strat_3_desc'),
            icon: Target,
        },
        {
            title: t('linkedin.strat_4_title'),
            desc: t('linkedin.strat_4_desc'),
            icon: TrendingUp,
        }
    ];

    const steps = [
        t('linkedin.step_1'),
        t('linkedin.step_2'),
        t('linkedin.step_3'),
        t('linkedin.step_4')
    ];

    return (
        <section id="linkedin-freelancing" className="py-24 border-y border-slate-200">
            <ScrollSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="animate">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase bg-secondary/10 px-3 py-1 rounded">
                                {t('linkedin.badge')}
                            </span>
                        </div>
                        <h2 className="animate mt-4 text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                            {t('linkedin.title')}
                        </h2>
                        <p className="animate mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            {t('linkedin.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strategies.map((item) => (
                            <div key={item.title} className="animate">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full"
                                >
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                                        <item.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Process Line */}
                    <div className="animate">
                        <div className="mt-24 pt-10 border-t border-slate-200">
                            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-12">
                                {steps.map((step, idx) => (
                                    <div key={step} className="flex items-center gap-4 lg:gap-12">
                                        <div className="flex flex-col items-center">
                                            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">
                                                {t('linkedin.step')} 0{idx + 1}
                                            </div>
                                            <div className="text-lg font-bold text-primary">{step}</div>
                                        </div>
                                        {idx < steps.length - 1 && (
                                            <ArrowRight className="hidden lg:block w-5 h-5 text-slate-300" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Work Examples Section */}
                    <div className="mt-24">
                        <div className="text-center mb-12 animate">
                            <h3 className="text-3xl font-extrabold text-primary mb-4">{t('linkedin.examples_title')}</h3>
                            <p className="text-slate-500 max-w-2xl mx-auto">{t('linkedin.examples_subtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((num) => (
                                <GrowthCard key={num} num={num} />
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollSection>
        </section>
    );
};

export default LinkedInFreelancing;
