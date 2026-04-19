import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-100">
      {/* I forgot to ask for the logo file */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">O</span>
        </div>
        <span className="font-bold text-base text-gray-900">OHealth</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
        <Link href="#" className="hover:text-blue-600 transition-colors">
          Product
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">
          For Professionals
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">
          FAQs
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <Link
          href="#"
          className="text-sm text-gray-600 font-medium hover:text-blue-600 transition-colors"
        >
          Join as a Professional
        </Link>
        <Link
          href="#"
          className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get App
        </Link>
      </div>
    </nav>
  );
}
