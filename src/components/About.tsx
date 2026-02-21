import { useLanguage } from '../context/LanguageContext';
import { Target, CheckCircle2, Award } from 'lucide-react';
import ScrollSection from './animations/ScrollSection';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const float1Ref = useRef<HTMLDivElement>(null);
    const float2Ref = useRef<HTMLDivElement>(null);
    const float3Ref = useRef<HTMLDivElement>(null);

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
        },
        { scope: sectionRef }
    );

    return (
        <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div ref={float1Ref} className="absolute top-20 left-10 w-20 h-20 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
            <div ref={float2Ref} className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div ref={float3Ref} className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
            
            <ScrollSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div>
                            <div className="animate">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-bold text-[10px] tracking-widest text-secondary uppercase">
                                    <Target className="w-3 h-3 mr-2" />
                                    {t('about.mission_title')}
                                </div>
                            </div>
                            <h2 className="animate text-3xl lg:text-4xl font-extrabold text-primary mb-6">
                                {t('about.mission_title')}
                            </h2>
                            <p className="animate text-xl text-slate-600 leading-relaxed italic">
                                "{t('about.mission_desc')}"
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="animate flex items-center text-xl font-bold text-primary mb-6">
                                    <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-4 text-xs">01</span>
                                    {t('about.do_title')}
                                </h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <li key={i} className="animate flex items-start bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                            <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm font-medium">{t(`about.do_${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="animate flex items-center text-xl font-bold text-primary mb-6">
                                    <span className="w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center mr-4 text-xs font-bold">
                                        <Award className="w-4 h-4" />
                                    </span>
                                    {t('about.why_title')}
                                </h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <li key={i} className="animate flex items-start bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-800 text-sm font-semibold">{t(`about.why_${i}`)}</span>
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
