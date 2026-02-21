import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <section className="relative max-w-7xl mx-auto text-center pt-40 md:pt-48 pb-24 md:pb-32 px-6 md:px-12 z-[30]">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 mb-8 shadow-sm z-[40]">
                    <div className="flex -space-x-2">
                        <Image src="/avtar1.jpg" alt="User" width={32} height={32} className="rounded-full border-2 border-white object-cover" />
                        <Image src="/avtar2.jpg" alt="User" width={32} height={32} className="rounded-full border-2 border-white object-cover" />
                        <Image src="/avatar3.jpg" alt="User" width={32} height={32} className="rounded-full border-2 border-white object-cover" />
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">
                            +5K
                        </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">
                        Businesses Rely On Collectedge
                    </span>
                </div>

                <h1 className="relative text-[36px] min-[400px]:text-[42px] sm:text-[52px] md:text-[70px] font-semibold max-w-[900px] mx-auto mb-8 z-[40] text-[#0f172a] leading-[1.1]">
                    Unified Platform for Late-Stage{" "}
                    <span className="text-blue-600">DPD Resolution.</span>
                </h1>

                <p className="max-w-2xl mx-auto text-gray-600 text-[16px] md:text-xl leading-relaxed mb-10 md:mb-12 z-[40]">
                    Our tool is designed with agencies & collection managers in mind,
                    ensuring user-friendly experience tailored to their needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 z-[40]">
                    <button className="w-full sm:w-auto bg-linear-to-r from-[#1952F1] to-[#418DF8] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-xl shadow-blue-600/20">
                        Get free Trial
                    </button>
                    <button className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition shadow-sm">
                        How We work
                    </button>
                </div>

                <div className="hidden lg:block absolute left-[-80px] top-[22%] z-15 transform rotate-[4deg] animate-float-delayed">
                    <Image
                        src="/left2.png"
                        alt="AFL Services"
                        width={260}
                        height={260}
                        className="rounded-2xl shadow-2xl border border-white/60"
                    />
                </div>
                <div className="hidden lg:block absolute left-[-80px] top-[58%] z-[20] transform rotate-[-3deg] animate-float-slow">
                    <Image
                        src="/left1.png"
                        alt="Operational Health"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-2xl border border-white/60"
                    />
                </div>

                <div className="hidden lg:block absolute right-[-60px] top-[58%] z-[15] transform rotate-[-4deg] animate-float">
                    <Image
                        src="/right2.png"
                        alt="Profile Card"
                        width={260}
                        height={260}
                        className="rounded-2xl shadow-2xl border border-white/60"
                    />
                </div>
                <div className="hidden lg:block absolute right-[-100px] top-[20%] z-[20] transform rotate-[5deg] animate-float-slow">
                    <Image
                        src="/right1.png"
                        alt="Interactions Chart"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-2xl border border-white/60"
                    />
                </div>
                <div className="hidden lg:block absolute right-[-80px] top-[70%] z-[20] transform rotate-[5deg] animate-float-slow">
                    <Image
                        src="/right3.png"
                        alt="Interactions Chart"
                        width={220}
                        height={220}
                        className="rounded-2xl shadow-2xl border border-white/60"
                    />
                </div>
            </section>

            <section className="relative z-[50] bg-white/50 backdrop-blur-md border-t border-gray-100 py-12">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <p className="text-gray-400 font-medium mb-8">
                        Join <span className="text-gray-900 font-semibold">4,000+</span> Companies Already Grow
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-12 md:gap-x-16 opacity-70 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
                        <Image src="/bank1.png" alt="Partner" width={100} height={40} className="object-contain w-24 md:w-32" />
                        <Image src="/bank2.png" alt="Partner" width={100} height={40} className="object-contain w-24 md:w-32" />
                        <Image src="/bank3.png" alt="Partner" width={100} height={40} className="object-contain w-24 md:w-32" />
                        <Image src="/bank4.png" alt="Partner" width={100} height={40} className="object-contain w-24 md:w-32" />
                        <Image src="/bank5.png" alt="Partner" width={100} height={40} className="object-contain w-24 md:w-32" />
                        <Image src="/bank6.png" alt="Partner" width={100} height={40} className="object-contain w-24 md:w-32" />
                    </div>
                </div>
            </section>
        </section>
    );
}
