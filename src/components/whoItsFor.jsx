import Image from "next/image";

const targetAudience = [
  {
    title: "Patients",
    description:
      "Access trusted healthcare professionals, book consultations and tests online, and take control of your health records.",
    borderColor: "border-orange-600",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Reach more patients digitally, manage appointments efficiently, and deliver quality care without necessary administrative stress.",
    borderColor: "border-orange-300",
  },
  {
    title: "Hospital, Pharmacies & Lab Partners",
    description:
      "Expand your digital presence, receive bookings seamlessly, and connect with patients looking for reliable diagnostic services.",
    borderColor: "border-orange-200",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-white py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="w-full md:w-[55%] mt-4">
          <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight">
            Who Its For
          </h2>
          <p className="text-gray-700 text-[15px] md:text-[14px] mb-10 max-w-sm">
            Built for Everyone in the Healthcare Journey.
          </p>

          <div className="space-y-6">
            {" "}
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className={`pl-2 border-l-4 ${item.borderColor} transition-all duration-300`}
              >
                <h3
                  className={`text-[17px] md:text-[19px] font-bold mb-1 ${item.titleColor}`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[14px] md:text-[15px] max-w-110">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[45%] relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-130 aspect-4/3.5 md:aspect-square">
            <Image
              src="hit_03_jgc2wq.png"
              alt="OHealth App Preview"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
