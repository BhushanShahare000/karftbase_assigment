import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#fdfdff] pt-28 pb-10 overflow-hidden font-sans">
            <div className="relative max-w-7xl mx-auto px-6 text-center pb-32 md:pb-40">
                <div className="absolute top-[-180px] md:top-[-250px] left-1/2 -translate-x-1/2 w-[220%] md:w-[180%] max-w-[1600px] aspect-square md:aspect-2/1 rounded-full bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-transparent blur-[80px] md:blur-[120px] opacity-90 -z-10 pointer-events-none"></div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-60px] md:top-[-80px] left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-lg border border-white flex items-center justify-center">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute left-[10%] md:left-[15%] top-[5%] md:top-[10%] w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md border border-white flex items-center justify-center">
                        <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute left-[5%] md:left-[8%] top-[30%] md:top-[38%] w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md border border-white flex items-center justify-center">
                        <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-blue-600 flex items-center justify-center">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12.07h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute right-[10%] md:right-[12%] top-[15%] md:top-[20%] w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md border border-white flex items-center justify-center">
                        <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-red-600 flex items-center justify-center">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute right-[5%] md:right-[6%] top-[40%] md:top-[50%] w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md border border-white flex items-center justify-center">
                        <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.663l4.715 6.235zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <span className="text-blue-600 font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 block">
                    Contact Us
                </span>
                <h2 className="text-[28px] md:text-[44px] font-bold text-[#0f2a63] leading-tight mb-4 md:mb-6 max-w-4xl mx-auto">
                    We also need to have contact <br /> form on the website
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-xs md:text-base leading-relaxed px-4">
                    Our tool is designed with agencies & collection managers in mind,
                    ensuring user-friendly experience tailored to their needs.
                </p>

                <div className="inline-block p-[1.5px] rounded-2xl bg-linear-to-r from-blue-400 to-blue-600 shadow-[0_8px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.35)] transition-all duration-300">
                    <button className="px-8 md:px-10 py-3.5 md:py-4 bg-blue-600 text-white rounded-[14.5px] font-semibold text-[16px] md:text-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
                        Get Started
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-5 5m5-5H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mb-16 text-center md:text-left">
                    <div className="flex flex-col gap-6 items-center md:items-start">
                        <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-0 md:mb-2">Navigation</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">For Lenders</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">For Collection Agencies</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 order-first lg:order-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" />
                                </svg>
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-[#0f172a]">Collectedge</span>
                        </div>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                            Our tool is designed with agencies & collection managers in mind,
                            ensuring user-friendly experience tailored to their needs
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 items-center md:items-start">
                        <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-0 md:mb-2">Contact</h3>
                        <div className="flex flex-col gap-5 md:gap-6 items-center md:items-start text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-500 font-medium text-sm md:text-base">info@letsdial.com</span>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                    Lorem Ipsum is simply dummy <br className="hidden md:block" /> text of the printing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center px-4">
                    <p className="text-gray-400 text-[10px] md:text-sm font-medium uppercase tracking-widest">
                        © 2024, Lorem Ipsum is simply dummy text
                    </p>
                </div>
            </div>
        </footer>
    );
}