import Image from "next/image";
import Link from "next/link";

export default function ForPros() {
  return (
    <section className="bg-[#F9FAFB] py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <span className="text-[#f2864d] font-bold text-[15px] md:text-[13px]">
            For Professionals
          </span>

          <h2 className="text-[28px] md:text-[42px] font-bold text-[#101828] mt-3 leading-tight tracking-tight">
            Grow Your Practice with OHealth
          </h2>

          <p className="mt-1 text-[#353a44] text-[12px] md:text-[14px] max-w-2xl leading-relaxed">
            Join a trusted digital platform to reach more patients, manage your
            schedule, and deliver care flexibly.
          </p>

          <Link
            href="#"
            className="mt-8 bg-[#0052FF] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] md:text-[16px] hover:bg-[#0041CC] transition-all shadow-md shadow-blue-100"
          >
            Get Started as a Provider
          </Link>
        </div>

        <div className="mt-16 md:mt-24 relative mx-auto max-w-265">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(16,24,40,0.14)] border border-[#EAECF0]">
            <Image
              src="prev_01_lkdewg.png"
              alt="OHealth Dashboard Preview"
              width={1060}
              height={660}
              className="w-full h-auto"
              priority
              sizes="(max-width: 1060px) 100vw, 1060px"
            />
          </div>

          <div className="absolute -inset-4 bg-blue-500/5 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
