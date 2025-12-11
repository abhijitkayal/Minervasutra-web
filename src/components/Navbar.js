// src/components/Navbar.js
// NOTE: This component requires the 'activePath' prop passed from the LayoutWrapper.js

import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

// The Navbar component accepts the current URL path as a prop
export default function Navbar({ activePath = '/' }) {

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 transition-shadow duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo/Brand (Minervasutra) - Links to Home */}
                    <a href="/" className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-fuchsia-600 mr-2 flex items-center justify-center text-white font-bold text-sm">N</div>
                        <span className="text-xl font-extrabold text-gray-900">
                            Minervasutra
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex space-x-2">
                        {navItems.map((item) => {
                            // Determine if the current item is the active page
                            const isActive = activePath === item.href;

                            // Conditional Tailwind CSS classes for the required button look
                            const linkClasses = `
                                px-5 py-2 rounded-full text-base font-medium transition duration-150 ease-in-out 
                                ${isActive
                                    ? 'bg-fuchsia-600 text-white shadow-lg' // Active: Solid Fuchsia Button (matching design image)
                                    : 'text-gray-700 hover:text-fuchsia-600 hover:bg-fuchsia-50' // Inactive: Clean hover effect
                                }
                            `;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={linkClasses}
                                >
                                    {item.name}
                                </a>
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

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="lg:hidden p-2 text-gray-600 hover:text-fuchsia-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            aria-label="Toggle navigation"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}