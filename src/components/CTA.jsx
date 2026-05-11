// components/CTA.jsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react"; // Matching that specific button icon

export default function CTA() {
  return (
    <section className="bg-[#0140c1] overflow-hidden">
      <div className="max-w-360 mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[50%] pt-16 pb-12 md:pt-32 md:pb-32 px-8 md:pl-24 lg:pl-32">
          <h2 className="text-[36px] font-bold md:text-[64px] text-white leading-[1.1] tracking-tight">
            Get Started With <br className="hidden md:block" />
            <span className="text-[#f5b179] italic font-serif font-medium">
              OHealth
            </span>{" "}
            Today
          </h2>

          <p className="mt-6 text-white text-[15px] md:text-[17px] max-w-120 leading-relaxed opacity-90">
            Whether you are seeking care or providing it, OHealth makes
            healthcare more accessible, efficient, and connected.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="#"
              className="w-full sm:w-auto bg-white text-[#0052FF] px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-blue-50 transition-colors text-center"
            >
              Create a Free Account
            </Link>

            <Link
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Join as a Professional
              <ArrowRightCircle className="w-5 h-5 opacity-80" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[50%] relative self-end flex justify-end">
          <div className="relative w-full aspect-4/3 md:h-162.5 lg:h-187.5">
            <Image
              src="comp-02_s0dfxh.png"
              alt="OHealth App Experience"
              fill
              className="object-contain object-bottom md:object-bottom-right"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
