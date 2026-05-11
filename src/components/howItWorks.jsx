// components/how-it-works.jsx
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[28px] md:text-[42px] font-bold text-gray-900 mt-3 md:mt-4 leading-tight tracking-tight max-w-2xl mx-auto">
            How OHealth Works
          </h2>
          <p className="mt-4 md:mt-6 text-gray-500 text-[15px] md:text-[18px] max-w-3xl mx-auto leading-relaxed font-normal">
            Create an account, connect with verified professionals, book
            consultations or lab tests, and manage your health data - all in one
            seamless experience.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="hidden md:block relative w-full max-w-250">
            <Image
              src="hit-01_brxw2r.png"
              alt="How OHealth Works Desktop Steps"
              width={1400}
              height={1000}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          <div className="block md:hidden relative w-full max-w-85">
            <Image
              src="hit-02_ic3oi5.png"
              alt="How OHealth Works Mobile Steps"
              width={700}
              height={1200}
              className="w-full h-auto"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
