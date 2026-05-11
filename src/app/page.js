import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/howItWorks";
import WhoItsFor from "@/components/whoItsFor";
import PlatformDesc from "@/components/platformDesc";
import ForPros from "@/components/forPros";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-100/50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <PlatformDesc />
      <ForPros />
      <CTA />
      <Footer />
    </main>
  );
}
