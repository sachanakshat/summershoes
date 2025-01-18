"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ManufacturingCardLanding() {
    const [index, setIndex] = useState(0);
    const images = [
        "/manufacturing/machine1.jpg",
        "/manufacturing/machine2.jpg.avif",
        "/manufacturing/machine3.jpg",
        "/manufacturing/machine4.jpeg",
    ];

    const totalImages = images.length;

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalImages);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalImages]);

    const scroll = (direction: "left" | "right") => {
        setIndex((prev) => {
            if (direction === "right") return (prev + 1) % totalImages;
            return prev === 0 ? totalImages - 1 : prev - 1;
        });
    };

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto p-6 md:p-12">
                {/* Left Side: Text Content */}
                <div className="md:w-1/2 text-start space-y-4">
                    <h6 className="text-2xl md:text-3xl font-bold">
                        MANUFACTURING
                    </h6>

                    {/* Separator */}
                    <div className="w-16 border-t-2 border-gray-400 my-2"></div>

                    <p className="text-lg md:text-2xl font-semibold text-gray-800">
                        High Precision & Advanced Automation
                    </p>

                    {/* Separator */}
                    <div className="w-16 border-t-2 border-gray-400 my-2"></div>

                    <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                        At Aarna Footcare, we integrate state-of-the-art
                        machinery with expert craftsmanship to deliver premium
                        quality footwear. Our automated processes ensure
                        precision, efficiency, and superior product consistency.
                        We are committed to sustainable and innovative
                        manufacturing practices that set industry benchmarks.
                    </p>

                    {/* Separator */}
                    <div className="w-16 border-t-2 border-gray-400 my-2"></div>

                    {/* Learn More Link */}
                    <Link
                        href="/manufacturing"
                        className="text-blue-600 font-medium hover:text-blue-800 transition"
                    >
                        Learn more →
                    </Link>
                </div>

                {/* Right Side: Static Image */}
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image
                        src="/manufacturing/machine4.jpeg"
                        alt="Manufacturing Process"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                    />
                </div>

                
            </div>
            {/* Image Scroller Below */}
            <div className="w-full max-w-5xl mt-12 relative">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden sm:block"
                    >
                        ◀
                    </button>

                    {/* Scrollable Image */}
                    <div className="overflow-x-scroll scrollbar-hide">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                className="flex w-full justify-center items-center"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                            >
                                <Image
                                    src={images[index]}
                                    alt={`Manufacturing Image ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="rounded-lg shadow-md object-contain w-full h-auto"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden sm:block"
                    >
                        ▶
                    </button>
                </div>
        </div>
    );
}
