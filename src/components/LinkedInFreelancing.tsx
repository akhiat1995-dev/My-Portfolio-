import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Zap, TrendingUp, ArrowRight, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollSection from './animations/ScrollSection';
import LinkedInCaseModal, { type CaseStudy } from './ui/LinkedInCaseModal';

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "LinkedIn Content Creation",
        subtitle: "Keywords & Topics Strategy",
        desc: "Creating LinkedIn content based on strategic keywords and high-demand topics, designed to maximize visibility, engagement, and organic reach.",
        fullDesc: "A comprehensive content strategy focused on identifying and leveraging high-demand keywords and trending topics on LinkedIn. This approach involved deep market research, competitor analysis, and audience behavior studies to create content that resonates with target audiences and maximizes organic reach. The strategy resulted in consistent viral posts and established thought leadership positioning.",
        result: "100k+ Impressions",
        images: ["/projects/creation_contenu.png"],
        features: [
            "Keyword research and trend analysis",
            "Content calendar optimization",
            "Engagement-optimized post formats",
            "Hashtag strategy implementation",
            "Audience segmentation targeting",
            "Performance tracking and optimization"
        ],
        metrics: [
            { label: "Impressions", value: "100k+" },
            { label: "Engagement Rate", value: "8.5%" },
            { label: "Followers Gained", value: "2.5k" },
            { label: "Viral Posts", value: "15+" }
        ],
        date: "2024"
    },
    {
        id: 2,
        title: "Optimized LinkedIn Profile",
        subtitle: "Section by Section Optimization",
        desc: "Complete LinkedIn profile optimization — headline, about, experience, and visuals — to improve clarity, credibility, and conversion.",
        fullDesc: "A full profile makeover designed to transform LinkedIn profiles into powerful personal branding assets. This service includes strategic headline crafting, compelling about section writing, experience optimization with quantifiable achievements, and visual element enhancement. Each section is optimized for both LinkedIn's search algorithm and human engagement.",
        result: "Premium Quality",
        images: [],
        features: [
            "SEO-optimized headline creation",
            "Compelling about/story section",
            "Achievement-focused experience entries",
            "Skills endorsement strategy",
            "Recommendation acquisition plan",
            "Visual branding consistency"
        ],
        metrics: [
            { label: "Profile Views", value: "+300%" },
            { label: "Connection Rate", value: "+150%" },
            { label: "Inbound Leads", value: "+200%" },
            { label: "Search Ranking", value: "Top 5%" }
        ],
        date: "2024"
    },
    {
        id: 3,
        title: "Strategic Growth & Visibility",
        subtitle: "Audience Development",
        desc: "Audience development from 0 to 40k through a structured content strategy focused on visibility, consistency, and sustainable growth.",
        fullDesc: "A complete audience development program that took a brand from zero to 40k+ followers through systematic content strategy, engagement tactics, and community building. This case study demonstrates the power of consistent value-driven content combined with strategic networking and engagement to build a thriving LinkedIn presence.",
        result: "40k+ Growth",
        images: ["/projects/growth_visibilite.png", "/projects/sdf.jpeg"],
        features: [
            "Zero to 40k follower growth strategy",
            "Consistent posting schedule",
            "Community engagement protocols",
            "Collaboration and partnership outreach",
            "Analytics-driven content optimization",
            "Thought leadership positioning"
        ],
        metrics: [
            { label: "Total Followers", value: "40k+" },
            { label: "Monthly Growth", value: "3.5k" },
            { label: "Avg. Reach/Post", value: "15k" },
            { label: "Engagement Rate", value: "6.2%" }
        ],
        link: "https://www.linkedin.com/company/gagtools/posts/?feedView=all",
        date: "2024"
    }
];

const GrowthCard = ({ caseStudy, onClick }: { caseStudy: CaseStudy; onClick: () => void }) => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const images = caseStudy.images;
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

    return (
        <div className="animate h-full">
            <motion.div
                whileHover={{ y: -5 }}
                onClick={onClick}
                className="bg-slate-50 rounded-2xl border border-slate-100 transition-all h-full group overflow-hidden hover:bg-white hover:shadow-xl cursor-pointer"
            >
                {hasImage && (
                    <div className="bg-slate-100 flex items-center justify-center relative h-72 border-b border-slate-100 overflow-hidden p-6">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={images[activeIndex]}
                                alt={caseStudy.title}
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
                            <div className="px-3 py-1 bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold rounded-full border border-slate-100 transition-colors group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                                {caseStudy.result}
                            </div>
                        </div>

                        <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-2 bg-secondary rounded-lg">
                                <Expand className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                )}
                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{t('linkedin.growth_case')} 0{caseStudy.id}</div>
                        {!hasImage && (
                            <div className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full transition-colors group-hover:bg-secondary group-hover:text-white">
                                {caseStudy.result}
                            </div>
                        )}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-1 transition-colors group-hover:text-secondary">
                        {t(`linkedin.example_${caseStudy.id}_title`)}
                    </h4>
                    <p className="text-secondary/80 text-xs font-semibold mb-3">{caseStudy.subtitle}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {caseStudy.desc}
                    </p>
                    <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-primary font-bold text-xs uppercase">
                            {t('linkedin.view_cta')} <ArrowRight className="ml-2 w-4 h-4 inline transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="text-[10px] text-slate-400 group-hover:text-secondary transition-colors">
                            Click to view details
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const LinkedInFreelancing = () => {
    const { t } = useLanguage();
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = (caseStudy: CaseStudy) => {
        setSelectedCase(caseStudy);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCase(null), 300);
    };

    return (
        <>
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

                        <div className="mt-24">
                            <div className="text-center mb-12 animate">
                                <h3 className="text-3xl font-extrabold text-primary mb-4">{t('linkedin.examples_title')}</h3>
                                <p className="text-slate-500 max-w-2xl mx-auto">{t('linkedin.examples_subtitle')}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {caseStudies.map((caseStudy) => (
                                    <GrowthCard
                                        key={caseStudy.id}
                                        caseStudy={caseStudy}
                                        onClick={() => openModal(caseStudy)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollSection>
            </section>

            <LinkedInCaseModal
                caseStudy={selectedCase}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default LinkedInFreelancing;
