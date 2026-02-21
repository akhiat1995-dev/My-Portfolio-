"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
    char: string;
    index: number;
    centerIndex: number;
    scrollYProgress: MotionValue<number>;
};


const CharacterV1 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const isSpace = char === " ";
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

    return (
        <motion.span
            className={cn("inline-block text-secondary", isSpace && "w-4")}
            style={{ x, rotateX }}
        >
            {char}
        </motion.span>
    );
};


const CharacterV2 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

    return (
        <motion.img
            src={char}
            alt=""
            className="h-16 w-16 shrink-0 object-contain will-change-transform"
            style={{ x, scale, y, transformOrigin: "center" }}
        />
    );
};


const CharacterV3 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const distanceFromCenter = index - centerIndex;

    const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
    const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

    return (
        <motion.img
            src={char}
            alt=""
            className="h-16 w-16 shrink-0 object-contain will-change-transform"
            style={{ x, rotate, y, scale, transformOrigin: "center" }}
        />
    );
};

const Skiper31 = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const targetRef2 = useRef<HTMLDivElement | null>(null);
    const targetRef3 = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({ target: targetRef });
    const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
    const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });


    const text = "Elevate Visibility";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);


    const techIcons = [
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vitedotjs.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg",

    ];
    const iconCenterIndex = Math.floor(techIcons.length / 2);

    return (
        <main className="w-full bg-slate-50">
            {/* Scroll Hint */}
            <div className="absolute top-22 left-1/2 z-10 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-primary">
                <span className="relative max-w-[12ch] text-[10px] uppercase font-bold tracking-widest leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-secondary after:to-primary after:content-['']">
                    Scroll to discover
                </span>
            </div>

            {/* Section 1 — Text Transformation */}
            <div
                ref={targetRef}
                className="relative box-border flex h-[150vh] items-center justify-center gap-[2vw] overflow-hidden bg-slate-50 p-[2vw]"
            >
                <div
                    className="w-full max-w-4xl text-center text-6xl font-extrabold uppercase tracking-tighter text-primary"
                    style={{ perspective: "1000px" }}
                >
                    {characters.map((char, index) => (
                        <CharacterV1
                            key={index}
                            char={char}
                            index={index}
                            centerIndex={centerIndex}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>

            {/* Section 2 — Icons Entry */}
            <div
                ref={targetRef2}
                className="relative -mt-[50vh] box-border flex h-[150vh] flex-col items-center justify-center gap-[4vw] overflow-hidden bg-white p-[2vw] border-y border-slate-200"
            >
                <p className="flex items-center justify-center gap-3 text-2xl font-bold tracking-tight text-primary uppercase">
                    <Bracket className="h-12 text-secondary" />
                    <span className="font-bold">Powered by Advanced Stack</span>
                    <Bracket className="h-12 scale-x-[-1] text-secondary" />
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12">
                    {techIcons.map((char, index) => (
                        <CharacterV2
                            key={index}
                            char={char}
                            index={index}
                            centerIndex={iconCenterIndex}
                            scrollYProgress={scrollYProgress2}
                        />
                    ))}
                </div>
            </div>

            {/* Section 3 — Icons Rotating Entry */}
            <div
                ref={targetRef3}
                className="relative -mt-[50vh] box-border flex h-[150vh] flex-col items-center justify-center gap-[4vw] overflow-hidden bg-slate-50 p-[2vw]"
            >
                <p className="flex items-center justify-center gap-3 text-2xl font-bold tracking-tight text-primary uppercase">
                    <Bracket className="h-12 text-secondary" />
                    <span className="font-bold">Ready for Enterprise AI</span>
                    <Bracket className="h-12 scale-x-[-1] text-secondary" />
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12" style={{ perspective: "1000px" }}>
                    {techIcons.map((char, index) => (
                        <CharacterV3
                            key={index}
                            char={char}
                            index={index}
                            centerIndex={iconCenterIndex}
                            scrollYProgress={scrollYProgress3}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };

const Bracket = ({ className }: { className: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={cn("opacity-20", className)}>
            <path
                fill="currentColor"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            />
        </svg>
    );
};
