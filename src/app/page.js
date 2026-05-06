// app/page.js
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/howItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-100/50">
      <Navbar />
      <Hero />
      {/* Replaced 'Spacer' with a simple Tailwind class */}
      <div className="h-[72px] bg-slate-100/50" aria-hidden="true" />
      <Features />
      <div className="h-[72px] bg-slate-100/50" aria-hidden="true" />
      <HowItWorks />
      <div className="h-[72px] bg-slate-100/50" aria-hidden="true" />
      <CTA />
      <Footer />
    </main>
  );
}
