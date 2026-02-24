import { useLanguage } from '../context/LanguageContext';
import { Target, CheckCircle2, Award } from 'lucide-react';
import ScrollSection from './animations/ScrollSection';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TextReveal from './animations/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const float1Ref = useRef<HTMLDivElement>(null);
    const float2Ref = useRef<HTMLDivElement>(null);
    const float3Ref = useRef<HTMLDivElement>(null);
    const decor1Ref = useRef<HTMLDivElement>(null);
    const decor2Ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (float1Ref.current) {
                gsap.to(float1Ref.current, {
                    y: -80,
                    rotation: 15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (float2Ref.current) {
                gsap.to(float2Ref.current, {
                    y: -50,
                    x: 30,
                    rotation: -10,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (float3Ref.current) {
                gsap.to(float3Ref.current, {
                    y: -30,
                    x: -20,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (decor1Ref.current) {
                gsap.to(decor1Ref.current, {
                    y: -120,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                });
            }
            if (decor2Ref.current) {
                gsap.to(decor2Ref.current, {
                    y: -100,
                    x: -40,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.2,
                    },
                });
            }
        },
        { scope: sectionRef }
    );

    return (
        <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div ref={decor1Ref} className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div ref={decor2Ref} className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 dark:bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div ref={float1Ref} className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-xl pointer-events-none animate-pulse"></div>
            <div ref={float2Ref} className="absolute top-40 right-20 w-32 h-32 bg-primary/10 dark:bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div ref={float3Ref} className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/15 dark:bg-secondary/20 rounded-full blur-xl pointer-events-none"></div>
            
            <ScrollSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div>
                            <div className="animate">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-bold text-[10px] tracking-widest text-secondary uppercase">
                                    <Target className="w-3 h-3 mr-2" />
                                    <TextReveal text={t('about.mission_title')} delay={0} />
                                </div>
                            </div>
                            <h2 className="animate text-3xl lg:text-4xl font-extrabold text-primary dark:text-white mb-6">
                                <TextReveal text={t('about.mission_title')} delay={0.1} />
                            </h2>
                            <p className="animate text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                "{t('about.mission_desc')}"
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="animate flex items-center text-xl font-bold text-primary dark:text-white mb-6">
                                    <span className="w-8 h-8 bg-primary dark:bg-secondary text-white rounded-lg flex items-center justify-center mr-4 text-xs">01</span>
                                    <TextReveal text={t('about.do_title')} delay={0.2} />
                                </h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <li key={i} className="animate flex items-start bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                            <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">{t(`about.do_${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="animate flex items-center text-xl font-bold text-primary dark:text-white mb-6">
                                    <span className="w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center mr-4 text-xs font-bold">
                                        <Award className="w-4 h-4" />
                                    </span>
                                    <TextReveal text={t('about.why_title')} delay={0.3} />
                                </h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <li key={i} className="animate flex items-start bg-primary/5 dark:bg-slate-800 p-4 rounded-xl border border-primary/10 dark:border-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-secondary dark:text-secondary mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-800 dark:text-slate-200 text-sm font-semibold">{t(`about.why_${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollSection>
        </section>
    );
};

export default About;
