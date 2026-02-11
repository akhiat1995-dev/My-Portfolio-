import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * ScrollSection component wraps sections and animates children with the '.animate' class.
 * Animations are subtle: fade in + move up (y: 40 to 0).
 */
const ScrollSection: React.FC<ScrollSectionProps> = ({ children, className = "" }) => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!container.current) return;

            const animateElements = container.current.querySelectorAll('.animate');

            if (animateElements.length > 0) {
                gsap.fromTo(
                    animateElements,
                    {
                        y: 40,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: container.current,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        },
        { scope: container }
    );

    return (
        <div ref={container} className={className}>
            {children}
        </div>
    );
};

export default ScrollSection;
