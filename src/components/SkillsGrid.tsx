import { useLanguage } from '../context/LanguageContext';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SkillsGrid = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const decor1Ref = useRef<HTMLDivElement>(null);
    const decor2Ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (decor1Ref.current) {
                gsap.to(decor1Ref.current, {
                    y: -80,
                    rotation: 20,
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
                    y: -40,
                    x: 40,
                    rotation: -15,
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

    const skillGroups = [
        {
            title: t('skills.group_1'),
            skills: [t('skills.g1_1'), t('skills.g1_2'), t('skills.g1_3'), t('skills.g1_4'), t('skills.g1_5')],
            color: "from-secondary/20 to-secondary/5"
        },
        {
            title: t('skills.group_2'),
            skills: [t('skills.g2_1'), t('skills.g2_2'), t('skills.g2_3'), t('skills.g2_4'), t('skills.g2_5')],
            color: "from-primary/20 to-primary/5"
        },
        {
            title: t('skills.group_3'),
            skills: [t('skills.g3_1'), t('skills.g3_2'), t('skills.g3_3'), t('skills.g3_4'), t('skills.g3_5')],
            color: "from-slate-200 to-slate-50"
        }
    ];

    return (
        <section id="competence" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div ref={decor1Ref} className="absolute top-10 right-10 w-40 h-40 border-4 border-secondary/10 rounded-full pointer-events-none"></div>
            <div ref={decor2Ref} className="absolute bottom-10 left-10 w-32 h-32 border-4 border-primary/10 rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">{t('skills.badge')}</span>
                    <h2 className="mt-4 text-4xl font-extrabold text-primary">{t('skills.title')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group, idx) => (
                        <div 
                            key={group.title} 
                            className={`p-8 rounded-2xl bg-gradient-to-br ${group.color} border border-slate-100 shadow-sm transition-all hover:shadow-lg hover:-translate-y-2 duration-300`}
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <h3 className="text-xl font-bold text-primary mb-8 border-b border-primary/10 pb-4">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm hover:border-secondary hover:text-secondary transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsGrid;
