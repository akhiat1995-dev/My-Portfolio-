import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxLayerProps {
    children: React.ReactNode;
    depth?: number;
    className?: string;
    offset?: number;
}

const ParallaxLayer = ({ children, depth = 0.5, className = "", offset = 0 }: ParallaxLayerProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!ref.current) return;

            gsap.fromTo(
                ref.current,
                { y: -offset },
                {
                    y: offset * depth,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: ref.current?.parentElement || ref.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        },
        { scope: ref, dependencies: [depth, offset] }
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default ParallaxLayer;
