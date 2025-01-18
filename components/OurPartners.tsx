'use client'
// import { DotIcon } from "@radix-ui/react-icons";
import React from "react";
// import acmeLogo from '@/public/logos/acme.png';
// import quantumLogo from '@/public/logos/quantum.png';
// import echoLogo from '@/public/logos/echo.png';
// import celestialLogo from '@/public/logos/celestial.png';
// import pulseLogo from '@/public/logos/pulse.png';
// import apexLogo from '@/public/logos/apex.png';
// import balmainLogo from "@/public/logos/balmain.png";
// import bataLogo from "@/public/logos/bata.png";
// import nvidiaLogo from "@/public/logos/nvidia.png";
// import pradaLogo from "@/public/logos/prada.png";
import Image from "next/image";
import { motion } from "framer-motion";

// const CompanyLogoData: Array<{ src: any; alt: string }> = [
// //   { src: acmeLogo, alt: 'Acme Logo' },
// //   { src: quantumLogo, alt: 'Quantum Logo' },
// //   { src: echoLogo, alt: 'Echo Logo' },
// //   { src: celestialLogo, alt: 'Celestial Logo' },
// //   { src: pulseLogo, alt: 'Pulse Logo' },
// //   { src: apexLogo, alt: 'Apex Logo' },
//   { src: balmainLogo, alt: 'Balmain Logo' },
//   { src: bataLogo, alt: 'Bata Logo' },
//   { src: nvidiaLogo, alt: 'Nvidia Logo' },
//   { src: pradaLogo, alt: 'Prada Logo' },
// ];

const CompanyLogoData: Array<{ src: string; alt: string }> = [
    { src: "/logos/balmain.png", alt: "Balmain Logo" },
    { src: "/logos/bata.png", alt: "Bata Logo" },
    { src: "/logos/nvidia.png", alt: "Nvidia Logo" },
    { src: "/logos/prada.png", alt: "Prada Logo" },
    { src: "/logos/balmain.png", alt: "Balmain Logo2" },
    { src: "/logos/bata.png", alt: "Bata Logo2" },
    { src: "/logos/nvidia.png", alt: "Nvidia Logo2" },
    { src: "/logos/prada.png", alt: "Prada Logo2" },
    { src: "/logos/balmain.png", alt: "Balmain Logo3" },
    { src: "/logos/bata.png", alt: "Bata Logo3" },
    { src: "/logos/nvidia.png", alt: "Nvidia Logo3" },
    { src: "/logos/prada.png", alt: "Prada Logo3" },
    { src: "/logos/balmain.png", alt: "Balmain Logo4" },
    { src: "/logos/bata.png", alt: "Bata Logo4" },
    { src: "/logos/nvidia.png", alt: "Nvidia Logo4" },
    { src: "/logos/prada.png", alt: "Prada Logo4" },
];

export default function OurPartners() {
    return (
        <div className="w-screen snap-x snap-mandatory overflow-x-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                Our Partners
            </h2>
            <h2 className="text-center text-xl text-black/70 my-5">
                Trusted by the world&apos;s most innovative companies
            </h2>
            <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white-100 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-white-100 after:to-transparent after:content-['']">
                <motion.div
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: "-50%" }}
                    className="flex flex-none gap-16 pr-16"
                >
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {CompanyLogoData.map(({ src, alt }) => (
                                //   <Image
                                //     key={alt}
                                //     src={src}
                                //     alt={alt}
                                //     className="h-8 w-auto flex-none"
                                //   />
                                <Image
                                    key={alt}
                                    src={src}
                                    alt={alt}
                                    className="h-20 w-auto flex-none"
                                    width={100} // Add a default width
                                    height={100} // Add a default height
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

//   export default OurPartners;
