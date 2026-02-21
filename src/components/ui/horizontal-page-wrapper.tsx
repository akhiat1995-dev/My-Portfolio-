import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const HorizontalPageWrapper = ({ children }: { children: React.ReactNode }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    // We need to know the total width of the content to scroll correctly
    useEffect(() => {
        if (targetRef.current) {
            // Calculate total width of children
            // Roughly estimation: number of children * 100vw (assuming each section is full viewport width)
            // Or better: measure the scrollWidth of a container
            // For now, let's assume the inner container will render horizontally
            // We will query the scrollWidth of the motion div after render
        }
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Example: Mapping vertical scroll (0 to 1) to horizontal translation
    // We need to map 0 -> 0% and 1 -> -100% * (totalWidth - viewportWidth) / totalWidth
    // But a simpler approach for "infinite" like feel or just section by section:
    // Let's assume we simply want to scroll the entire length of the flex container.

    // We map 0 to 1 to "0%" and "-85%" (adjust based on total content)
    // A robust way uses the container scrollWidth. 

    // Hardcoded for now based on number of sections: 
    // Hero, LinkedIn, AISystems, About, Timeline, Skills, Certs, Contact = 8 sections
    // If each is min-w-screen, total width is ~800vw.
    // We want to transform from 0 to -(800vw - 100vw) = -700vw.
    // Let's use percentage: -87.5% roughly.

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <div ref={targetRef} className="relative h-[800vh]"> {/* Adjust height based on content length */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex h-full w-max"
                    ref={containerRef}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalPageWrapper;
