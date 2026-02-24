import { MessageSquare, Mail, Linkedin, ChevronDown, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import ScrollSection from './animations/ScrollSection';
import { useRef } from 'react';
import TextReveal from './animations/TextReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const { t } = useLanguage();
    const parallaxRef = useRef<HTMLDivElement>(null);
    const decor1Ref = useRef<HTMLDivElement>(null);
    const decor2Ref = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (decor1Ref.current) {
                gsap.to(decor1Ref.current, {
                    y: -150,
                    scrollTrigger: {
                        trigger: parallaxRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (decor2Ref.current) {
                gsap.to(decor2Ref.current, {
                    y: -80,
                    scrollTrigger: {
                        trigger: parallaxRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    y: -60,
                    scrollTrigger: {
                        trigger: parallaxRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.5,
                    },
                });
            }
        },
        { scope: parallaxRef }
    );

    return (
        <section id="home" ref={parallaxRef} className="min-h-screen flex items-center pt-10 pb-15 lg:pt-15 lg:pb-20 overflow-hidden">
            <ScrollSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <h1 className="animate text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight">
                                <span className="text-secondary">
                                    <TextReveal text={t('hero.title_1_p1')} delay={0} /> <br />
                                    <TextReveal text={t('hero.title_1_p2')} delay={0.1} />
                                </span>
                                <span className="text-primary dark:text-white">
                                    <br />
                                    <TextReveal text={t('hero.title_2_p1')} delay={0.2} /> <br />
                                    <TextReveal text={t('hero.title_2_p2')} delay={0.4} />
                                </span>
                            </h1>
                            <p className="animate text-base text-slate-600 dark:text-slate-300 mb-5 max-w-md leading-snug">
                                {t('hero.subtitle')}
                            </p>
                            <div className="animate">
                                <div className="flex items-start mb-6 p-3 bg-slate-50 dark:bg-slate-800 border-l-4 border-secondary rounded-r-lg max-w-xl">
                                    <div>
                                        <h3 className="text-sm font-bold text-primary dark:text-white mb-1 uppercase tracking-wide">{t('hero.ai_action')}</h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm italic">
                                            "{t('hero.ai_diff')}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="animate flex flex-wrap gap-4 pt-4">
                                <div className="relative group">
                                    <button
                                        className="px-6 py-2.5 bg-primary dark:bg-secondary text-white rounded-full font-bold text-sm hover:bg-slate-800 dark:hover:bg-orange-700 transition-all shadow-lg hover:shadow-primary/25 flex items-center"
                                    >
                                        {t('hero.cta_contact')} <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:rotate-180" />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <a
                                            href="https://wa.me/212627300172"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-secondary transition-colors"
                                        >
                                            <MessageSquare className="w-4 h-4 mr-3" />
                                            {t('contact.whatsapp')}
                                        </a>
                                        <a
                                            href="mailto:aktyouness@gmail.com"
                                            className="flex items-center px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-secondary transition-colors"
                                        >
                                            <Mail className="w-4 h-4 mr-3" />
                                            {t('contact.email')}
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/younessakhiat/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-secondary transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4 mr-3" />
                                            {t('contact.linkedin_profile')}
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="/cv-youness-akhiat.pdf"
                                    download
                                    className="px-6 py-2.5 bg-white dark:bg-slate-800 text-primary dark:text-white border-2 border-primary/10 dark:border-slate-600 rounded-full font-bold text-sm hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    {t('btn.download_cv')}
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-7 mt-10 lg:mt-0 relative">
                            <div className="animate relative">
                                <div ref={decor1Ref} className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                                <div ref={decor2Ref} className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 dark:bg-white/5 rounded-full blur-3xl"></div>
                                <div ref={imageRef} className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-700 max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                                    <img
                                        src="/profile.png"
                                        alt="Youness Akhiat"
                                        className="w-full h-auto object-cover grayscale dark:grayscale-0 hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollSection>
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link to="linkedin-freelancing" smooth={true} duration={500} className="cursor-pointer text-slate-400 dark:text-slate-500 hover:text-secondary">
                    <ChevronDown className="w-8 h-8" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
