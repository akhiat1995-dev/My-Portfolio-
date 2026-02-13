import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import ManualCarousel from './ui/manual-carousel';

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

                <div className="w-full">
                    <ManualCarousel items={certifications} />
                </div>
            </div>
        </section>
    );
};

export default Certification;
