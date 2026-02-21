"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-6 left-0 right-0 z-[60] px-6">
            <nav className="max-w-6xl mx-auto flex items-center justify-between rounded-full backdrop-blur-md bg-white/70 border border-white/40 px-6 py-3 shadow-md">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" />
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-[#0f172a]">Collectedge</h1>
                </div>

                <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
                    <li className="text-gray-900 font-semibold cursor-pointer transition">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">For Lenders</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">For Collection Agencies</li>
                </ul>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block bg-linear-to-r from-[#1952F1] to-[#418DF8] text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:opacity-90 transition">
                        Get in touch
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
                    <ul className="flex flex-col p-6 gap-6 text-base font-medium text-gray-600">
                        <li className="text-[#0f172a] font-bold">Home</li>
                        <li className="hover:text-blue-600 transition">For Lenders</li>
                        <li className="hover:text-blue-600 transition">For Collection Agencies</li>
                        <li className="pt-4 border-t border-gray-100">
                            <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold shadow-lg">
                                Get in touch
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
