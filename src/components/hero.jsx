import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-blue-50 via-slate-100 to-slate-200 text-center px-6 py-12 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Healthcare Made{" "}
        <span className="text-blue-600 italic font-[family-name:var(--font-lora)]">
          Accessible
        </span>
        ,<br />
        Secure, And Connected.
      </h1>

      <p className="mt-4 text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
        OHealth is a digital healthcare platform that connects you with verified
        healthcare professionals, lets you book consultations and lab tests
        online, and securely manage all your health records in one place.
      </p>

      <div className="mt-7 flex justify-center items-center gap-4 flex-wrap">
        <Link
          href="#"
          className="bg-blue-600 text-white text-sm font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get App
        </Link>
        <Link
          href="#"
          className="text-sm text-gray-600 font-medium hover:text-blue-600 transition-colors"
        >
          Join as a Professional
        </Link>
      </div>

      <div className="mt-12 flex justify-center">
        <Image
          src="/images/comp-01.png"
          alt="OHealth app screens"
          width={500}
          height={520}
          loading="eager"
          priority
          style={{ width: "50%", height: "auto" }}
          className="object-contain"
        />
      </div>
    </section>
  );
}
