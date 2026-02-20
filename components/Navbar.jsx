import Image from "next/image";

export default function Navbar() {
    return (
        <header className="fixed top-6 left-0 right-0 z-[60] px-6">
            <nav className="max-w-6xl mx-auto flex items-center justify-between rounded-full backdrop-blur-md bg-white/70 border border-white/40 px-6 py-3 shadow-md">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                        C
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Collectedge</h1>
                </div>

                {/* Links */}
                <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
                    <li className="text-gray-900 font-semibold cursor-pointer">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">For Lenders</li>
                    <li className="hover:text-gray-900 cursor-pointer transition">For Collection Agencies</li>
                </ul>

                {/* CTA */}
                <button className="bg-linear-to-r from-[#1952F1] to-[#418DF8] text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-blue-700 transition">
                    Get in touch
                </button>
            </nav>
        </header>
    );
}
