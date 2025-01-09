"use client";

import { headers } from "next/headers";
import React from "react";
import AnimatedButton from "./AnimatedButton";

const NavBar: React.FC = () => {
    const navigationLinks = [
        { path: "/shop", heading: "Shop" },
        { path: "/bestSellers", heading: "Best Sellers" },
        { path: "/skinBodycare", heading: "Men Footwear" },
        { path: "/babyCare", heading: "Women Footwear" },
        { path: "/hairCare", heading: "Kids Footwear" },
        { path: "/skinInsights", heading: "Polishes and Accessories" },
        { path: "/trackOrders", heading: "Track Order" },
    ];
    return (
        // className="bg-white shadow-md border-slate-600 border-t fixed top-0 w-full z-50"
        <nav className="bg-white border-slate-300 border-b sticky top-0 w-full lg:w-9/12 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="text-lg font-semibold text-gray-800">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1600px-Zara_Logo.svg.png?20190222225032" alt="Logo" className="h-8" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* <AnimatedButton text="Hover me" additionalProps="font-bold cursor-pointer" /> */}
                    {navigationLinks.map((link, index) => (
                        <AnimatedButton key={index} href={link.path} text={link.heading} additionalProps="cursor-pointer"></AnimatedButton>
                        // <a
                        //     key={index}
                        //     href={link.path}
                        //     className="text-gray-700 hover:text-black transition"
                        // >
                        //     {link.heading}
                        // </a>
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
                {/* <a
                    href="/collections"
                    className="block py-2 text-gray-700 hover:text-black transition"
                >
                    Collections
                </a>
                <a
                    href="/shop"
                    className="block py-2 text-gray-700 hover:text-black transition"
                >
                    Shop
                </a>
                <a
                    href="/about"
                    className="block py-2 text-gray-700 hover:text-black transition"
                >
                    About
                </a>
                <a
                    href="/contact"
                    className="block py-2 text-gray-700 hover:text-black transition"
                >
                    Contact
                </a> */}
                <a
                    href="/login"
                    className="block py-2 text-gray-700 hover:text-black transition"
                >
                    Login
                </a>
            </div>
            {/* <AnimatedButton text="Hover me" /> */}
        </nav>
    );
};

export default NavBar;
