import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const certifications = [
    {
        nameKey: 'certs.machine_learning',
        image: '/certification/Machine LearningAI Engineer Career Path.png',
        issuer: 'Codecademy'
    },
    {
        nameKey: 'certs.social_media',
        image: '/certification/hubspot cerificat social media.png',
        issuer: 'HubSpot'
    },
    {
        nameKey: 'certs.content_marketing',
        image: '/certification/hubspot certificat content marketing.png',
        issuer: 'HubSpot'
    },
    {
        nameKey: 'certs.digital_marketing',
        image: '/certification/hubspot certificat marketing digital.png',
        issuer: 'HubSpot'
    },
    {
        nameKey: 'certs.seo',
        image: '/certification/hubspot certificat seo.png',
        issuer: 'HubSpot'
    },
    {
        nameKey: 'certs.social_media_marketing',
        image: '/certification/hubspot certificat social media marketing.png',
        issuer: 'HubSpot'
    },
    {
        nameKey: 'certs.python',
        image: '/certification/python 3.png',
        issuer: 'Codecademy'
    }
];

const Certification = () => {
    const { t } = useLanguage();

    return (
        <section id="certifications" className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase"
                    >
                        {t('certs.badge')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-4xl font-extrabold text-primary"
                    >
                        {t('certs.title')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                                <img
                                    src={cert.image}
                                    alt={t(cert.nameKey)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                            </div>

                            <div className="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                                        {cert.issuer}
                                    </span>
                                    <h3 className="mt-1 text-base font-bold text-primary line-clamp-2">
                                        {t(cert.nameKey)}
                                    </h3>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-medium text-slate-400">
                                    <span>Verified Certification</span>
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certification;
