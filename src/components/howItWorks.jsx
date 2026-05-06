// components/how-it-works.jsx
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#F9A825] font-bold text-[13px] tracking-[0.2em] uppercase">
            Getting Started
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 mt-4 leading-tight tracking-tight max-w-2xl mx-auto">
            How OHealth Works
          </h2>
          <p className="mt-6 text-gray-500 text-[16px] md:text-[18px] max-w-xl mx-auto leading-relaxed font-normal">
            Everything you need to manage your health is just a few clicks away.
            Follow these simple steps to get started.
          </p>
        </div>

        {/* Visual Content Block */}
        <div className="relative flex justify-center items-center">
          {/* 
            Container for the composite image. 
            On mobile, we allow it to be slightly wider to keep the text readable.
          */}
          <div className="relative w-full max-w-[1100px] transition-all duration-500 hover:scale-[1.01]">
            <Image
              src="/images/hit-01.png"
              alt="Steps to use OHealth: Create account, Connect with professionals, Book services, and Manage data"
              width={1400}
              height={1000}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
