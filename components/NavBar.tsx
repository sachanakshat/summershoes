"use client";

import React from "react";

const NavBar: React.FC = () => {
    const navigationLinks = [
        { path: "/collections", heading: "Collections" },
        { path: "/shop", heading: "Shop" },
        { path: "/about", heading: "About" },
        { path: "/contact", heading: "Contact" },
    ];
    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="text-lg font-semibold text-gray-800">
                        <img src="/logo.svg" alt="Logo" className="h-8" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {navigationLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className="text-gray-700 hover:text-black transition"
                        >
                            {link.heading}
                        </a>
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
        </nav>
    );
};

export default NavBar;
