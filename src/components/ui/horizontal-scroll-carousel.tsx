import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export interface CertificationItem {
    nameKey: string;
    image: string;
    issuer: string;
}

const HorizontalScrollCarousel = ({ items }: { items: CertificationItem[] }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 pl-8 sm:pl-16">
                    {items.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ item }: { item: CertificationItem }) => {
    const { t } = useLanguage();
    return (
        <div
            className="group relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl flex flex-col"
        >
            <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 shrink-0">
                <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                        {item.issuer}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-primary line-clamp-2">
                        {t(item.nameKey)}
                    </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-medium text-slate-400">
                    <span>Verified Certification</span>
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollCarousel;
