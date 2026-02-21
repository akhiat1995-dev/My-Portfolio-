import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Example component showing GSAP ScrollTrigger usage
 * This demonstrates how to animate elements on scroll
 * You can use this pattern in any of your components
 */
export default function ScrollAnimationExample() {
    const main = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.animated-box');
            boxes.forEach((box) => {
                gsap.to(box as HTMLElement, {
                    x: 150,
                    scrollTrigger: {
                        trigger: box as HTMLElement,
                        start: 'bottom bottom',
                        end: 'top 20%',
                        scrub: true,
                        // markers: true, // Uncomment to see scroll trigger markers
                    },
                });
            });
        },
        { scope: main }
    );

    return (
        <div>
            <section className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold text-primary mb-4">GSAP ScrollTrigger with React</h2>
                <p className="text-lg text-slate-600">Scroll down to see the magic happen!!</p>
            </section>

            <div className="min-h-screen flex flex-col items-center justify-center gap-32" ref={main}>
                <div className="animated-box w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl">
                    Box 1
                </div>
                <div className="animated-box w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl">
                    Box 2
                </div>
                <div className="animated-box w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl">
                    Box 3
                </div>
            </div>

            <section className="min-h-screen"></section>
        </div>
    );
}
