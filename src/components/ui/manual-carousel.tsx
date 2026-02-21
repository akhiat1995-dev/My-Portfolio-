import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export interface CertificationItem {
    nameKey: string;
    image: string;
    issuer: string;
}

interface ManualCarouselProps {
    items: CertificationItem[];
}

const ManualCarousel = ({ items }: ManualCarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -340, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full group">
            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-primary hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-primary hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

const Card = ({ item }: { item: CertificationItem }) => {
    const { t } = useLanguage();
    return (
        <div
            className="snap-center shrink-0 group relative h-[420px] w-[320px] overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl flex flex-col"
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

export default ManualCarousel;
