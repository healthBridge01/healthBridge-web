import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";

function Spacer() {
  return <div style={{ background: "#e8eef6", height: "72px" }} />;
}

export default function Home() {
  return (
    <main>
      <div style={{ background: "#e8eef6" }}>
        {" "}
        <Navbar />
      </div>

      <Hero />
      <Spacer />
      <CTA />
      <Footer />
    </main>
  );
}
