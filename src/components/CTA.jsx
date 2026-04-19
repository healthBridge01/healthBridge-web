// components/CTA.jsx
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1a3fd4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-end justify-between">
        <div className="max-w-md pt-16 pb-12 shrink-0">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Get Started With{" "}
            <span className="italic text-yellow-300 font-[family-name:var(--font-lora)]">
              OHealth
            </span>{" "}
            Today
          </h2>

          <p className="mt-4 text-sm text-blue-100 leading-relaxed">
            Whether you are seeking care or providing it, OHealth makes
            healthcare more accessible, efficient, and connected.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap items-center">
            <Link
              href="#"
              className="bg-white text-blue-700 text-sm font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create a Free Account
            </Link>
            <Link
              href="#"
              className="text-white text-sm font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              Join as a Professional
              <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs shrink-0">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="shrink-0 flex items-end">
          <Image
            src="/images/comp-02.png"
            alt="OHealth app"
            width={400}
            height={500}
            loading="eager"
            priority
            style={{ width: "auto", height: "480px" }}
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
