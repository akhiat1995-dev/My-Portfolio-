import { useLanguage } from '../context/LanguageContext';
import { Target, CheckCircle2, Award } from 'lucide-react';
import ScrollSection from './animations/ScrollSection';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24">
            <ScrollSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Mission Section */}
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
                            {/* What I Do Section */}
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

                            {/* Why Me Section */}
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
