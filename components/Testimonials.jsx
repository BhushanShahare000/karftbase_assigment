"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
    {
        id: 1,
        name: "David Koroma",
        role: "CEO, NeoBank Africa",
        avatar: "/avtar2.jpg",
        content:
            "We used to get a lot of complaints and debt resolution has always been complex. Since deploying Collectedge, built-in audit trails and reporting complaints related to payment disputes have become seamless. It gives us confidence that dropped by over 50%. The self-service always on the latest guidelines.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Nair",
        role: "Head of Risk & Collections",
        avatar: "/avtar1.jpg",
        content:
            "Since implementing the Collectedge platform, we've seen a 40% improvement in resolving delinquent payment disputes within the first 30 days. The automation and transparency it brings have transformed how our collections team operates — reducing manual overhead and improving customer trust. It's become an essential part of our risk management toolkit.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah Chen",
        role: "Ops Manager, Fintech Inc",
        avatar: "/avatar3.jpg",
        content:
            "The scalability of this tool is unmatched. We were able to double our agency network without adding a single headcount to our internal team. The data insights are literally game-changing for our quarter planning.",
        rating: 5,
    },
];

export default function Testimonials() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current)
            scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    };
    const scrollRight = () => {
        if (scrollRef.current)
            scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    };

    return (
        <section className="relative py-15 px-6 overflow-hidden bg-[#fdfdff]">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <p className="text-blue-600 font-semibold mb-3">Testimonial</p>
                <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold text-[#0f172a] mb-16">
                    Trusted by <span className="text-blue-900">Professionals</span>
                </h2>

                <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-30 -z-10" />
                <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[40%] bg-purple-100 rounded-full blur-[100px] opacity-30 -z-10" />

                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdfdff] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdfdff] to-transparent pointer-events-none"></div>

                <div
                    ref={scrollRef}
                    className="relative flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-10 justify-start items-stretch"
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="snap-center shrink-0 transition-all duration-500 rounded-[35px] border border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col p-8 md:p-10 bg-white/70 backdrop-blur-xl max-w-[650px] w-[90%] md:w-[550px]"
                        >
                            <div className="absolute top-8 right-8 text-gray-100 opacity-60">
                                <svg
                                    width="48"
                                    height="38"
                                    viewBox="0 0 48 38"
                                    fill="currentColor"
                                >
                                    <path d="M0 22C0 11.5 5.5 5 15.5 0L19.5 4C14.5 7.5 12 11 11.5 15.5H19V38H0V22ZM29 22C29 11.5 34.5 5 44.5 0L48.5 4C43.5 7.5 41 11 40.5 15.5H48V38H29V22Z" />
                                </svg>
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-[#0f172a] text-lg">{t.name}</h4>
                                    <p className="text-gray-400 text-sm font-medium">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-[#334155] text-left italic leading-relaxed text-[16px] md:text-[17px] mb-10 min-h-[140px]">
                                "{t.content}"
                            </p>

                            <div className="flex justify-between items-center mt-auto">
                                <div className="flex gap-1">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 grayscale opacity-40">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-4 mt-12 pb-16">
                    <button
                        onClick={scrollLeft}
                        className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all shadow-sm"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="relative inline-flex group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                    <button className="relative px-10 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-[18px] font-bold text-lg flex items-center gap-3 shadow-xl transition-all hover:translate-y-[-2px] active:scale-[0.98]">
                        View All
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}