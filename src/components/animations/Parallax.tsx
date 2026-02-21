import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    direction?: 'vertical' | 'horizontal';
}

const Parallax = ({ children, speed = 0.5, className = "", direction = 'vertical' }: ParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!ref.current) return;

            const yOrX = direction === 'vertical' ? 'y' : 'x';
            const movement = speed * 100;

            gsap.to(ref.current, {
                [yOrX]: movement,
                ease: 'none',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        },
        { scope: ref, dependencies: [speed, direction] }
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default Parallax;
