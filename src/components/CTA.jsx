// components/CTA.jsx
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1a3fd4] overflow-hidden">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-end justify-between">
        <div className="max-w-md pt-16 pb-12">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Get Started With{" "}
            <span className="italic text-yellow-300 font-[family-name:var(--font-playfair)]">
              OHealth
            </span>{" "}
            Today
          </h2>
          {/* ... links ... */}
        </div>

        <div className="shrink-0">
          <Image
            src="/images/comp-02.png"
            alt="OHealth app interface preview"
            width={400}
            height={500}
            priority
            className="h-[480px] w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
