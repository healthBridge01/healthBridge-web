import {
  CheckBadgeIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

const trustPoints = [
  {
    title: "Verified Healthcare Professionals",
    description:
      "All doctors, therapists, and specialists are properly verified before joining the platform.",
    icon: <CheckBadgeIcon className="w-9 h-9 text-[#e04f16]" />,
  },
  {
    title: "Secure & Private Data",
    description:
      "Your health information is protected with industry-standard security and privacy measures.",
    icon: <LockClosedIcon className="w-9 h-9 text-[#e04f16]" />,
  },
  {
    title: "Privacy & Compliance",
    description:
      "OHealth is built with patient confidentiality and regulatory compliance at its core.",
    icon: <ShieldCheckIcon className="w-9 h-9 text-[#e04f16]" />,
  },
  {
    title: "Registered Hospitals, Pharmacies & Laboratories",
    description:
      "We work only with recognized and trusted healthcare institutions.",
    icon: <UserPlusIcon className="w-9 h-9 text-[#e04f16]" />,
  },
];

export default function TrustedPlatform() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[38px] font-bold text-[#101828] leading-tight tracking-tight">
          A Trusted Healthcare Platform <br className="hidden md:block" /> You
          Can Rely On
        </h2>
        <p className="text-[#667085] text-[15px] md:text-[16px] mt-4 mb-14 max-w-2xl mx-auto leading-relaxed">
          Create an account, connect with verified professionals, book
          consultations or lab tests, and manage your health data-all in one
          seamless experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-[#F2F4F7] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col items-center text-center"
            >

              <div className="mb-6 w-14 h-14 flex items-center justify-center">
                {point.icon}
              </div>

              <h3 className="text-[16px] md:text-[18px] font-bold text-[#0f1520] mb-3">
                {point.title}
              </h3>
              <p className="text-[#667085] text-[14px] md:text-[15px] leading-relaxed max-w-105">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
