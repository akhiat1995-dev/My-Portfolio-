import { useLanguage } from '../context/LanguageContext';

const SkillsGrid = () => {
    const { t } = useLanguage();
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
        <section id="competence" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">{t('skills.badge')}</span>
                    <h2 className="mt-4 text-4xl font-extrabold text-primary">{t('skills.title')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group) => (
                        <div key={group.title} className={`p-8 rounded-2xl bg-gradient-to-br ${group.color} border border-slate-100 shadow-sm transition-all hover:shadow-lg`}>
                            <h3 className="text-xl font-bold text-primary mb-8 border-b border-primary/10 pb-4">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm">
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
