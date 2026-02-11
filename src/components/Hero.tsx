import { ChevronDown, MessageSquare, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import ScrollSection from './animations/ScrollSection';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <ScrollSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7">
                            <div className="animate">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                                    <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                                    <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">{t('hero.system_mode')}</span>
                                </div>
                            </div>

                            <h1 className="animate text-4xl lg:text-5xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
                                {t('hero.title_1')} <br />
                                <span className="text-secondary">{t('hero.title_2')}</span>
                            </h1>

                            <p className="animate text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                                {t('hero.subtitle')}
                            </p>

                            <div className="animate">
                                <div className="flex items-start mb-10 p-4 bg-slate-50 border-l-4 border-secondary rounded-r-lg max-w-xl">
                                    <div>
                                        <h3 className="text-sm font-bold text-primary mb-1 uppercase tracking-wide">AI Action Line</h3>
                                        <p className="text-slate-600 text-sm italic">
                                            "{t('hero.ai_diff')}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="animate flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <div className="relative group">
                                    <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-slate-800 transition-all shadow-lg hover:shadow-secondary/20">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        {t('hero.cta_contact')}
                                    </button>
                                    {/* Dropdown on hover/click */}
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                        <a href="https://wa.me/212627300172" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary">WhatsApp</a>
                                        <a href="mailto:aktyouness@gmail.com" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary">Email</a>
                                        <a href="https://www.linkedin.com/in/younessakhiat/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary">LinkedIn</a>
                                    </div>
                                </div>

                                <a
                                    href="/my cv.pdf"
                                    download
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-full text-primary hover:bg-slate-50 transition-all"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    {t('btn.download_cv')}
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:col-span-5 mt-16 lg:mt-0 relative">
                            <div className="animate relative">
                                {/* Decorative Elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

                                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white lg:-ml-10">
                                    <img
                                        src="/photo orange.png"
                                        alt="Youness Akhiat"
                                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollSection>

            {/* Scroll Down Hint */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link to="linkedin-freelancing" smooth={true} duration={500} className="cursor-pointer text-slate-400 hover:text-secondary">
                    <ChevronDown className="w-8 h-8" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
