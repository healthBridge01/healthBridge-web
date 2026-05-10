// components/features.jsx
import Image from "next/image";

const featureData = [
  {
    title: "Online Medical Consultations",
    description:
      "Connect with verified doctors, therapists, and specialists for virtual consultations from anywhere.",
    image: "1_xfqmku.png",
    bgColor: "bg-blue-50/30",
  },
  {
    title: "Hospital & Pharmacy & Lab Partnerships",
    description:
      "Book diagnostics tests with registered hospitals, pharmacies and laboratories and receive results digitally.",
    image: "2_oblgvg.png",
    bgColor: "bg-orange-50/30",
  },
  {
    title: "AI-Powered Support",
    description:
      "Get guided support to help you navigate symptoms, appointments, and health information more easily.",
    image: "3_ozwktv.png",
    bgColor: "bg-green-50/30",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f2864d] font-bold text-[15px] md:text-[13px]">
            What OHealth Does
          </span>

          <h2 className="text-[28px] md:text-[40px] font-bold text-gray-900 mt-3 md:mt-4 leading-[1.2] md:leading-tight tracking-tight px-2">
            Everything You Need to Manage <br className="hidden md:block" />
            Your Health in One Platform
          </h2>

          <p className="mt-4 md:mt-6 text-gray-700 text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed font-normal px-4">
            OHealth brings healthcare services together so you can access care,
            diagnostics, and your health data without stress or unnecessary
            hospital visits.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f3f4f6] rounded-3xl md:rounded-4xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[14px] md:text-[15px] mt-2 md:mt-3 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div
                className={`relative mt-auto h-60 md:h-80 rounded-2xl ${feature.bgColor} overflow-hidden flex items-center justify-center border border-gray-50/50`}
              >
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 md:p-0"
                    priority
                  />
                </div>

                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(255,255,255,0.3)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
