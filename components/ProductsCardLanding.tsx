"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Products() {
    const [index, setIndex] = useState(0);
    const productImages = [
        "/assets/air-jordan-5.png",
        "/dashscroller/shoe1.jpg",
        "/assets/air-jordan-5.png",
        "/dashscroller/shoe1.jpg",
        "/assets/air-jordan-5.png",
        "/dashscroller/shoe1.jpg",
    ];

    // Determine number of images per screen based on screen size
    const isSmall = useMediaQuery({ maxWidth: 640 });
    const isMedium = useMediaQuery({ maxWidth: 1024 });
    const imagesPerSet = isSmall ? 1 : isMedium ? 2 : 3;

    const totalSets = Math.ceil(productImages.length / imagesPerSet);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalSets);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSets]);

    const scroll = (direction: "left" | "right") => {
        setIndex((prev) => {
            if (direction === "right") return (prev + 1) % totalSets;
            return prev === 0 ? totalSets - 1 : prev - 1;
        });
    };

    return (
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 py-10 pb-44">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                PRODUCTS
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-6">
                Discover our premium collection of high-quality footwear designed for style and comfort. 
                From trendy sneakers to elegant high heels, we have something for everyone.
            </p>

            {/* Scrollable Product Tiles */}
            <div className="relative w-full max-w-[90%]">
                {/* Left Scroll Button */}
                <button 
                    onClick={() => scroll("left")} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hidden sm:block"
                >
                    ◀
                </button>

                {/* Product Tiles Container with Framer Motion */}
                <div className="overflow-x-scroll scrollbar-hide">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className="flex w-full flex-nowrap justify-center items-center gap-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            {productImages
                                .slice(index * imagesPerSet, (index + 1) * imagesPerSet)
                                .map((src, idx) => (
                                    <div key={idx} className="w-[250px] sm:w-[280px] flex-shrink-0">
                                        <Image
                                            src={src}
                                            alt={`Product ${idx + 1}`}
                                            width={280}
                                            height={200}
                                            className="rounded-lg shadow-md object-contain w-full h-auto"
                                        />
                                    </div>
                                ))}
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
