import { MessageSquare, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const decor1Ref = useRef<HTMLDivElement>(null);
    const decor2Ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (decor1Ref.current) {
                gsap.fromTo(
                    decor1Ref.current,
                    { y: 100, x: 50 },
                    {
                        y: -100,
                        x: -30,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    }
                );
            }
            if (decor2Ref.current) {
                gsap.fromTo(
                    decor2Ref.current,
                    { y: -100, x: -50 },
                    {
                        y: 100,
                        x: 30,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    }
                );
            }
        },
        { scope: sectionRef }
    );

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div ref={decor1Ref} className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[120px]"></div>
                <div ref={decor2Ref} className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-400 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-12 text-center lg:text-left">
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            {t('contact.title')}
                        </h2>
                        <p className="text-xl text-slate-300">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                            href="https://wa.me/212627300172"
                            className="group flex flex-col p-6 bg-white rounded-3xl hover:bg-secondary transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-slate-50 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                <MessageSquare className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <p className="text-xs font-bold text-slate-400 group-hover:text-white/60 uppercase tracking-widest mb-1">{t('contact.whatsapp')}</p>
                            <p className="text-lg font-bold text-primary group-hover:text-white flex items-center">
                                {t('contact.send_msg')} <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                            </p>
                        </a>

                        <a
                            href="mailto:aktyouness@gmail.com"
                            className="group flex flex-col p-6 bg-white/10 border border-white/10 rounded-3xl hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{t('contact.email')}</p>
                            <p className="text-lg font-bold text-white">{t('contact.get_in_touch')}</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/younessakhiat/"
                            className="sm:col-span-2 group flex items-center justify-between p-6 bg-white/10 border border-white/10 rounded-3xl hover:border-secondary transition-all"
                        >
                            <div className="flex items-center space-x-6">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Linkedin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t('contact.linkedin_profile')}</p>
                                    <p className="text-xl font-bold text-white">{t('contact.connect')}</p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-secondary" />
                        </a>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-white/30 text-xs font-bold tracking-widest uppercase">
                        © {new Date().getFullYear()} YOUNESS AKHIAT · {t('contact.rights')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
