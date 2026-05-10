// components/hero.jsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-100px md:h-125 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(26,63,212,0.06)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10 text-center">
        <h1 className="text-[32px] md:text-6xl font-bold text-gray-900 leading-[1.2] md:leading-[1.15] tracking-tight max-w-4xl mx-auto">
          Healthcare Made{" "}
          <span className="text-brand-blue italic font-serif font-medium">
            Accessible
          </span>
          ,
          <br className="hidden md:block" /> Secure, and Connected.
        </h1>

        <p className="mt-5 text-gray-700 text-sm md:text-lg max-w-5xl mx-auto leading-relaxed px-2 md:px-4 font-normal">
          OHealth is a digital healthcare platform that connects you with
          verified healthcare professionals, lets you book consultations and lab
          tests online, and securely manage all your health records in one
          place.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto bg-brand-blue text-white text-[15px] font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/50 text-center"
          >
            Get App
          </Link>
          <Link
            href="#"
            className="text-[15px] text-gray-900 font-semibold flex items-center gap-3 group hover:text-brand-blue transition-colors py-2"
          >
            Join as a Professional
            <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[10px] group-hover:border-brand-blue transition-colors">
              ▶
            </span>
          </Link>
        </div>

        <div className="mt-10 md:mt-16 flex justify-center relative px-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] bg-brand-blue/20 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />

          <div className="relative w-full max-w-85 md:max-w-225 z-10">
            <Image
              src="comp-01_gpjgmk.png"
              alt="OHealth app interface"
              width={1200}
              height={800}
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
