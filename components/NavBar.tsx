"use client";

import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";
import ContactUsCard from "@/components/ContactUsCard";
import ProductsCard from "@/components/ProductsCard";

const NavBar: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isDropdownHovered, setDropdownHovered] = useState(false);

    const navigationLinks = [
        { path: "/products", heading: "Products", dropdown: [] },
        { path: "/about", heading: "About Us", dropdown: [] },
        { path: "/mission", heading: "Our Mission", dropdown: [] },
        { path: "/testimonials", heading: "Testimonials", dropdown: [] },
        { path: "/contact", heading: "Contact Us", dropdown: [] },
    ];

    const shouldShowDropdown = hoveredItem || isDropdownHovered;

    // Render the appropriate card based on the hovered item
    const renderCard = () => {
        switch (hoveredItem) {
            case "Products":
                return <ProductsCard />;
            case "Contact Us":
                return <ContactUsCard />;
            default:
                return null;
        }
    };

    return (
        <nav
            className="bg-white border-slate-300 border-b sticky top-0 w-full z-50"
            onMouseLeave={() => {
                if (!isDropdownHovered) setHoveredItem(null);
            }}
        >
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
                        >
                            <AnimatedButton
                                href={link.path}
                                text={link.heading}
                                additionalProps="cursor-pointer sm:text-sm lg:text-base"
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
                        className="hidden md:block text-gray-800 hover:text-black transition"
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
                {/* Mobile Menu Toggle */}
                <button
                        className="md:hidden focus:outline-none"
                        onClick={() => {
                            document
                                .getElementById("mobileMenu")
                                ?.classList.toggle("hidden");
                        }}
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
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
            </div>
            {/* Mobile Menu */}
            <div
                id="mobileMenu"
                className="hidden md:hidden bg-white shadow-md px-4 py-2"
            >
                {navigationLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.path}
                        className="block py-2 text-gray-700 hover:text-black transition"
                    >
                        {link.heading}
                    </a>
                ))}
                <a
                    href="/login"
                    className="block py-2 text-gray-700 hover:text-black transition"
                >
                    Login
                </a>
            </div>

            {/* Dropdown */}
            {shouldShowDropdown && (
                <div
                    className="top-[72px] bg-white border-t border-gray-200 shadow-lg z-40"
                    onMouseEnter={() => setDropdownHovered(true)}
                    onMouseLeave={() => {
                        setDropdownHovered(false);
                        setHoveredItem(null);
                    }}
                >
                    <div className="max-w-screen-xl mx-auto flex flex-wrap py-4 px-8 gap-4">
                        {/* Render card dynamically */}
                        {renderCard()}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
