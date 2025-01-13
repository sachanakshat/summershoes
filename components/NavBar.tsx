"use client";

import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const NavBar: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navigationLinks = [
        { path: "/products", heading: "Products", dropdown: ["Shoes", "Bags", "Accessories"] },
        { path: "/about", heading: "About Us", dropdown: [] },
        { path: "/mission", heading: "Our Mission", dropdown: [] },
        { path: "/testimonials", heading: "Testimonials", dropdown: [] },
        { path: "/contact", heading: "Contact Us", dropdown: ["Email", "Phone", "Visit Us"] },
    ];

    return (
        <nav className="bg-white border-slate-300 border-b sticky top-0 w-full z-50">
            {/* Navbar */}
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <div className="flex items-start">
                    <Link
                        href="/"
                        className="text-lg font-semibold text-gray-800"
                    >
                        <img src="/logos/aarna_color.png" alt="Logo" className="h-20" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {navigationLinks.map((link, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredItem(link.heading)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <AnimatedButton
                                href={link.path}
                                text={link.heading}
                                additionalProps="cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <a
                        href="/login"
                        className="hidden md:block px-4 py-2 text-sm text-gray-800 border rounded hover:bg-gray-100 transition"
                    >
                        Login
                    </a>
                    <a
                        href="/cart"
                        className="text-gray-800 hover:text-black transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5m0 0H3m18 0h-1.6M16 16a2 2 0 11-4 0 2 2 0 014 0zm4 0a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Dropdown */}
            {hoveredItem && (
                <div
                    className="fixed left-0 right-0 top-[72px] bg-white border-t border-gray-200 shadow-lg z-40"
                    onMouseEnter={() => setHoveredItem(hoveredItem)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className="max-w-screen-xl mx-auto flex flex-wrap py-4 px-8 gap-4">
                        {navigationLinks
                            .find((link) => link.heading === hoveredItem)
                            ?.dropdown.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {item}
                                </a>
                            ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
