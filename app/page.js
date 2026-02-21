import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForLenders from "@/components/ForLenders";
import ForAgencies from "@/components/ForAgencies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f9fbff] to-white text-gray-900 font-sans">
      <Navbar />

      <div className="relative z-[10]">
        <Hero />
        <ForLenders />
        <ForAgencies />
        <Testimonials />
        <Footer />
      </div>

      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px] z-[5]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-200 rounded-full blur-[150px] z-[5]" />
      <div className="absolute top-[30%] -right-32 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[180px] z-[5] opacity-60" />
    </main>
  );
}