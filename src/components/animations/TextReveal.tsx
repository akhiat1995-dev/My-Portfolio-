import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    // Split text into words
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block ${className}`} // changed to inline-block for better flow
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    className="inline-block" // words are inline-block to allow y-transform
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
