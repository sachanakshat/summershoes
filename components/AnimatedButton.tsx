import { motion } from "framer-motion";
import React from "react";

interface AnimatedButtonProps {
    text: string;
    additionalProps?:string;
    href?:string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, additionalProps, href }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <motion.div
            className="flex flex-col"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            <a href = {href}
            className={`font-primaryFont sm:text-sm lg:text-base ${additionalProps}`}>
                {text}
            </a>
            <div className={`border-t border-gray-800 rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}></div>
        </motion.div>
    );
};

export default AnimatedButton;
