import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';

const TimelineSection = () => {
    const { t } = useLanguage();
    const experiences = [
        {
            title: t('timeline.exp_1_title'),
            company: t('timeline.exp_1_company'),
            period: t('timeline.exp_1_period'),
            desc: t('timeline.exp_1_desc'),
            icon: Briefcase
        },
        {
            title: t('timeline.exp_2_title'),
            company: t('timeline.exp_2_company'),
            period: t('timeline.exp_2_period'),
            desc: t('timeline.exp_2_desc'),
            icon: Award
        },
        {
            title: t('timeline.exp_3_title'),
            company: t('timeline.exp_3_company'),
            period: t('timeline.exp_3_period'),
            desc: t('timeline.exp_3_desc'),
            icon: Award
        }
    ];

    const education = [
        {
            title: t('timeline.edu_1_title'),
            school: t('timeline.edu_1_school'),
            period: t('timeline.edu_1_period'),
            desc: t('timeline.edu_1_desc'),
            icon: GraduationCap
        },
        {
            title: t('timeline.edu_2_title'),
            school: t('timeline.edu_2_school'),
            period: t('timeline.edu_2_period'),
            desc: t('timeline.edu_2_desc'),
            icon: GraduationCap
        }
    ];

    return (
        <section id="section" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Experience Column */}
                    <div id="experience">
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-primary rounded-xl text-white">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-primary">{t('timeline.exp_title')}</h2>
                        </div>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                                        <exp.icon className="w-5 h-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 border border-slate-100 rounded-2xl group-[.is-active]:border-secondary/20 transition-all">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-primary">{exp.title}</div>
                                            <time className="font-bold text-xs text-secondary uppercase tracking-widest">{exp.period}</time>
                                        </div>
                                        <div className="text-slate-400 text-xs font-medium mb-3">{exp.company}</div>
                                        <div className="text-slate-500 text-sm">{exp.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certs Column */}
                    <div id="education">
                        <div className="flex items-center space-x-4 mb-12">
                            <div className="p-3 bg-secondary rounded-xl text-white">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-primary">{t('timeline.edu_title')}</h2>
                        </div>

                        <div className="space-y-10">
                            {education.map((edu, idx) => (
                                <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-secondary transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-xl text-primary">{edu.title}</h3>
                                            <p className="text-secondary text-sm font-semibold">{edu.school}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 uppercase tracking-widest">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm">
                                        {edu.desc}
                                    </p>
                                </div>
                            ))}

                            <Link to="certifications" smooth={true} duration={500} className="cursor-pointer block">
                                <div className="p-8 bg-primary rounded-2xl text-white relative overflow-hidden transition-transform hover:scale-[1.02]">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <Award className="w-32 h-32" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-6 flex items-center">
                                        <Award className="w-5 h-5 mr-3 text-secondary" />
                                        {t('timeline.certs_title')}
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> {t('timeline.cert_1')}</li>
                                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> {t('timeline.cert_2')}</li>
                                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span> {t('timeline.cert_3')}</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
