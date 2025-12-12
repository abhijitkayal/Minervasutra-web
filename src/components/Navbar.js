// src/components/Navbar.js
// NOTE: This component requires the 'activePath' prop passed from the LayoutWrapper.js

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

// The Navbar component accepts the current URL path as a prop
export default function Navbar({ activePath = '/' }) {
    // 1. State for controlling the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 transition-shadow duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo/Brand (Minervasutra) - Links to Home - UPDATED TO USE logo.png */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Minervasutra Logo"
                            width={60}
                            height={60}
                            className="w-15 h-15 mr-2"
                        />
                        
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex space-x-2">
                        {navItems.map((item) => {
                            // Determine if the current item is the active page
                            const isActive = activePath === item.href;

                            // Conditional Tailwind CSS classes for the required button look
                            const linkClasses = `
                                px-5 py-2 rounded-full text-base font-medium transition duration-150 ease-in-out 
                                ${isActive
                                    ? 'bg-fuchsia-600 text-cyan-200 shadow-lg' // Active: Solid Fuchsia Button (matching design image)
                                    : 'text-gray-700 hover:text-fuchsia-600 hover:bg-cyan-200' // Inactive: Clean hover effect
                                }
                            `;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={linkClasses}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Button: "Request Demo" (Purple Solid Button) */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="#request-demo"
                            className="hidden sm:inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-fuchsia-600 hover:bg-fuchsia-700 shadow-lg transition duration-150 ease-in-out"
                        >
                            Request Demo
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>

                        {/* Mobile Menu Button - UPDATED to handle click and change icon */}
                        <button
                            type="button"
                            className="lg:hidden p-2 text-cyan-600 hover:text-fuchsia-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            aria-label="Toggle navigation"
                            onClick={toggleMenu} // <--- ADDED onClick handler
                        >
                            {/* Conditional icon: Menu when closed, X when open */}
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Mobile Menu Panel (conditionally rendered) */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 inset-x-0 p-2 transition transform origin-top-right">
                    <div className="rounded-lg shadow-2xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                        <div className="px-5 pt-4 pb-6 space-y-1">
                            {/* Navigation Links for Mobile */}
                            <nav className="space-y-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={toggleMenu}
                                        className={`
                                            block w-full px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out
                                            ${activePath === item.href
                                                ? 'bg-fuchsia-600 text-cyan-200'
                                                : 'text-gray-700 hover:text-cyan-600 hover:bg-fuchsia-200'
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        {/* Mobile Action Button */}
                        <div className="py-4 px-5">
                            <a
                                href="#request-demo"
                                onClick={toggleMenu} // Close menu on click
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-fuchsia-600 hover:bg-fuchsia-700 shadow-lg transition duration-150 ease-in-out"
                            >
                                Request Demo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}