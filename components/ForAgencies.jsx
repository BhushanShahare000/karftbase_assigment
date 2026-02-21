"use client";

import { useState } from "react";
import Image from "next/image";

export default function ForAgencies() {
    const [activeTab, setActiveTab] = useState("growth");

    return (
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-center z-30">
            <p className="text-blue-600 font-semibold mb-3 tracking-wide text-sm uppercase">For Agencies</p>
            <h2 className="text-[28px] min-[400px]:text-[32px] md:text-[54px] font-semibold leading-[1.2] md:leading-[74px] tracking-tight md:tracking-[-0.05em] max-w-[1188px] mx-auto mb-16 text-center bg-linear-[109.6deg,#020218_52.82%,#1948BD_103.54%] bg-clip-text text-transparent">
                We fuel demand and empower agencies to execute with unmatched efficiency and reliability.
            </h2>

            <div className="flex overflow-x-auto scrollbar-hide md:overflow-visible md:justify-center items-center gap-8 md:gap-16 mb-12 border-b border-gray-100 max-w-4xl mx-auto relative whitespace-nowrap px-4 md:px-0">
                <button
                    onClick={() => setActiveTab("growth")}
                    className={`pb-4 text-[16px] md:text-xl font-semibold transition-all relative shrink-0 ${activeTab === "growth" ? "text-blue-900" : "text-gray-400 font-medium"
                        }`}
                >
                    Accelerate Business Growth
                    {activeTab === "growth" && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("ops")}
                    className={`pb-4 text-[16px] md:text-xl font-semibold transition-all relative shrink-0 ${activeTab === "ops" ? "text-blue-900" : "text-gray-400 font-medium"
                        }`}
                >
                    Technology & Data driven operations
                    {activeTab === "ops" && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
                    )}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[580px] aspect-4/3 rounded-[40px] bg-linear-to-br from-white/60 via-blue-50/30 to-purple-50/40 border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.03)] backdrop-blur-xl p-6 md:p-10 flex items-center justify-center overflow-hidden scale-95 min-[450px]:scale-100 transition-transform">
                        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[80px]" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/30 rounded-full blur-[60px]" />

                        <div className="relative w-full h-full rounded-[30px] bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-white p-6 md:p-8 flex flex-col items-center justify-center text-center">
                            <p className="text-[#102a63] text-[16px] md:text-[19px] font-semibold mb-8 md:mb-12 max-w-[400px] leading-tight">
                                Unlock more business without increasing operational overhead
                            </p>

                            <div className="relative w-full max-w-[360px] aspect-2/1 mb-6">
                                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                                    <path
                                        d="M 15,50 A 35,35 0 0,1 85,50"
                                        fill="none"
                                        stroke="#cbd5e1"
                                        strokeWidth="0.5"
                                        strokeDasharray="0.1, 4"
                                        strokeLinecap="round"
                                        className="opacity-60"
                                    />

                                    <path
                                        d="M 10,50 A 40,40 0 0,1 55,10"
                                        fill="none"
                                        stroke="#86e2eb"
                                        strokeWidth="8.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 55,10 A 40,40 0 0,1 78,24"
                                        fill="none"
                                        stroke="#60a5fa"
                                        strokeWidth="8.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 78,24 A 40,40 0 0,1 90,50"
                                        fill="none"
                                        stroke="#dbeafe"
                                        strokeWidth="8.5"
                                        strokeLinecap="round"
                                    />

                                    <g transform="translate(78, 24) rotate(45)">
                                        <rect
                                            x="-4" y="-8" width="8" height="16"
                                            rx="4" fill="#2563eb"
                                            className="shadow-xl"
                                        />
                                        <circle cx="0" cy="0" r="2.2" fill="white" />
                                    </g>

                                    <path
                                        d="M 10,50 A 40,40 0 0,1 78,24"
                                        fill="none"
                                        stroke="rgba(59, 130, 246, 0.15)"
                                        strokeWidth="12"
                                        className="blur-lg"
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                                    <span className="text-[36px] md:text-[54px] font-bold text-[#0f172a] leading-none">70%</span>
                                    <p className="text-[12px] md:text-[15px] font-bold text-[#334155] mt-1 md:mt-2 mb-0.5">Your DPD Resolution Rate is Good</p>
                                    <p className="text-[10px] font-medium text-gray-400">Last Check on 21 Apr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="group flex items-center gap-5 p-5 rounded-2xl bg-white/50 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <p className="text-gray-800 font-medium text-left leading-snug">
                            Get more volume in your serviceable pincodes
                        </p>
                    </div>

                    <div className="group flex items-center gap-5 p-5 rounded-2xl bg-white/50 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <p className="text-gray-800 font-medium text-left leading-snug">
                            Manage all allocations on a single tool allowing <br />
                            you to maximize resource utilization.
                        </p>
                    </div>

                    <div className="group flex items-center gap-5 p-5 rounded-2xl bg-white/50 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                        <p className="text-gray-800 font-medium text-left leading-snug">
                            Discover pincodes with high potential to expand <br />
                            your serviceability
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
