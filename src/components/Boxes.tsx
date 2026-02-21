import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Boxes() {
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleTimeline = () => {
        if (tl.current) {
            tl.current.reversed(!tl.current.reversed());
        }
    };

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray<HTMLElement>('.box');
            tl.current = gsap
                .timeline()
                .to(boxes[0], { x: 120, rotation: 360 })
                .to(boxes[1], { x: -120, rotation: -360 }, '<')
                .to(boxes[2], { y: -166 })
                .reverse();
        },
        { scope: container }
    );

    return (
        <section className="py-24" id="gsap-demo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={container}>
                <h2 className="text-3xl font-bold text-primary mb-8">Use the button to toggle a Timeline</h2>
                <div className="mb-12">
                    <button
                        onClick={toggleTimeline}
                        className="px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
                    >
                        Toggle Timeline
                    </button>
                </div>
                <div className="flex justify-center items-center gap-8 h-64">
                    <div className="box w-20 h-20 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-xl">Box 1</div>
                    <div className="box w-20 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-bold shadow-xl">Box 2</div>
                    <div className="box w-20 h-20 bg-slate-400 rounded-xl flex items-center justify-center text-white font-bold shadow-xl">Box 3</div>
                </div>
            </div>
        </section>
    );
}
