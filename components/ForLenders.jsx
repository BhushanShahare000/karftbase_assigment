import Image from "next/image";

export default function ForLenders() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-15 pb-24 text-center z-[30]">
            <p className="text-blue-600 font-medium mb-2">For Lenders</p>
            <h2 className="text-[30px] md:text-[30px] font-bold leading-tight max-w-3xl mx-auto mb-20 text-center text-[#0f172a]">
                We're changing the game with{" "}
                <span className="bg-gradient-to-r from-blue-900 to-blue-950 bg-clip-text text-transparent">
                    one <br />
                    complete agency management tool
                </span>
            </h2>

            {/* ===== Features Grid ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                {/* 1️⃣ Intuitive & Agent Focused */}
                <div className="p-8 rounded-3xl bg-white shadow-[0_4px_40px_rgba(0,0,0,0.05)] relative overflow-hidden border border-white/60">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <span className="text-blue-600 text-xl">💡</span> Intuitive & Agent Focused
                    </h3>

                    <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                        Our tool is designed with agencies & collection managers in mind,
                        ensuring user-friendly experience tailored to their needs.
                    </p>

                    {/* ===== Layered Agent Cards ===== */}
                    <div className="relative mt-4 flex justify-center items-center">
                        {/* Card Container (background glow) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-blue-100 rounded-[30px] blur-[2px]" />

                        {/* Layer 1 */}
                        <Image
                            src="/lenders1.png"
                            alt="Cheyenne Gouse"
                            width={360}
                            height={260}
                            className="absolute top-0 left-[40%] -translate-x-[50%] z-[30] rounded-2xl shadow-2xl border border-white/60"
                        />

                        {/* Layer 2 */}
                        <Image
                            src="/lenders2.png"
                            alt="Cristofer Ekstrom Bothman"
                            width={340}
                            height={240}
                            className="absolute top-[70px] left-[60%] -translate-x-[50%] z-[20] rounded-2xl shadow-xl border border-white/60"
                        />

                        {/* Layer 3 */}
                        <Image
                            src="/lenders3.png"
                            alt="Martin Torff"
                            width={320}
                            height={220}
                            className="absolute top-[140px] left-[42%] -translate-x-[50%] z-[10] rounded-2xl shadow-md border border-white/60"
                        />

                        {/* Floating Mini Avatar */}
                        <Image
                            src="/lenders4.png"
                            alt="Agent avatar"
                            width={64}
                            height={64}
                            className="absolute bottom-[0px] right-[60px] z-[40] drop-shadow-xl rounded-full border-2 border-white animate-float"
                        />

                        {/* Spacer for layout (keeps height) */}
                        <div className="h-[300px]" />
                    </div>
                </div>

                {/* 2️⃣ Highly Customizable */}
                <div className="p-8 rounded-3xl bg-white shadow-[0_4px_40px_rgba(0,0,0,0.05)] relative overflow-hidden border border-white/60">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <span className="text-blue-600 text-xl">⚙️</span> Highly Customizable
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                        Our tool is designed with agencies & collection managers in mind,
                        ensuring user-friendly experience tailored to their needs.
                    </p>


                    <div className="relative w-full rounded-2xl bg-gradient-to-br from-blue-50/80 to-slate-100/60 border border-white/80 p-6 flex flex-col items-center" style={{ minHeight: "260px" }}>


                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none" }}>

                            <line x1="22%" y1="28%" x2="50%" y2="46%" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5,5" />

                            <line x1="22%" y1="68%" x2="50%" y2="54%" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5,5" />

                            <line x1="78%" y1="28%" x2="50%" y2="46%" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5,5" />

                            <line x1="78%" y1="68%" x2="50%" y2="54%" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="5,5" />
                        </svg>


                        <div className="flex justify-between w-full mb-6 mt-2 relative z-10">

                            <div className="w-11 h-11 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>


                            <div className="w-11 h-11 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" />
                                </svg>
                            </div>
                        </div>


                        <div className="relative flex items-center justify-center z-10 my-1">
                            <div className="absolute w-20 h-20 rounded-full bg-blue-100/60 blur-sm" />
                            <div className="relative w-14 h-14 rounded-2xl bg-blue-600 shadow-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" />
                                </svg>
                            </div>
                        </div>


                        <div className="flex justify-between w-full mt-6 mb-2 relative z-10">
                            {/* Code brackets — bottom left */}
                            <div className="w-11 h-11 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l-5.172-5.172a4 4 0 010-5.656L10 4M14 4l5.172 5.172a4 4 0 010 5.656L14 20" />
                                </svg>
                            </div>


                            <div className="w-11 h-11 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h.01" />
                                </svg>
                            </div>
                        </div>


                        <div className="mt-4 z-10">
                            <span className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-blue-200">
                                API integration
                            </span>
                        </div>

                    </div>
                </div>

                {/* 3️⃣ Driven by Data */}
                <div className="p-8 rounded-3xl bg-white shadow-[0_4px_40px_rgba(0,0,0,0.05)] relative overflow-hidden border border-white/60">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <span className="text-blue-600 text-xl">📊</span> Driven by Data
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                        Our data-driven approach equips collection managers with insights
                        to make informed & actionable decisions.
                    </p>


                    <div className="flex gap-3 w-full items-start">


                        <div className="flex-1">
                            <Image
                                src="/lenders8.png"
                                alt="Interactions and amount collected"
                                width={250}
                                height={360}
                                className="rounded-2xl drop-shadow-2xl border border-white/60 w-full h-auto"
                            />
                        </div>

                        <div className="flex flex-col gap-3 flex-1">


                            <Image
                                src="/lenders7.png"
                                alt="Operational Health"
                                width={250}
                                height={250}
                                className="rounded-2xl drop-shadow-2xl border border-white/60 w-full h-auto"
                            />

                            <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer py-4">
                                <span className="text-blue-400 text-2xl font-light">+</span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* 4️⃣ Discover Agency Partners */}
                <div className="p-8 rounded-3xl bg-white shadow-[0_4px_40px_rgba(0,0,0,0.05)] relative overflow-hidden border border-white/60">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <span className="text-blue-600 text-xl">🤝</span> Discover Agency Partners
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                        Discover top-performing, tech-driven agencies designed to deliver
                        results with minimal overhead.
                    </p>


                    <div className="relative w-full flex justify-center" style={{ height: "260px" }}>


                        <div className="absolute left-0 top-0 w-[75%]" style={{ transform: "rotate(2deg)" }}>
                            <Image
                                src="/lenders5.png"
                                alt="AFL Services Agency Card"
                                width={300}
                                height={260}
                                className="rounded-2xl drop-shadow-xl border border-white/60 w-full h-auto"
                            />
                        </div>


                        <div
                            className="absolute bottom-0 right-0 w-[50%]"
                            style={{ transform: "rotate(-2deg)" }}
                        >
                            <Image
                                src="/lenders6.png"
                                alt="Send Details Card"
                                width={200}
                                height={120}
                                className="rounded-2xl drop-shadow-2xl border border-white/60 w-full h-auto"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
