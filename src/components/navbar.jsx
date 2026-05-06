// components/navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold tracking-tighter">
              O
            </span>
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            OHealth
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[15px] text-gray-600 font-medium">
          {["Product", "For Professionals", "FAQs", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-brand-blue transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-[15px] text-gray-600 font-medium hover:text-brand-blue"
          >
            Join as a Professional
          </Link>
          <Link
            href="#"
            className="bg-brand-blue text-white text-[15px] font-semibold px-6 py-2.5 rounded-full hover:shadow-lg transition-all"
          >
            Get App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-4 h-0.5 bg-current ml-auto"></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {["Product", "For Professionals", "FAQs", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-lg font-medium text-gray-900"
            >
              {item}
            </Link>
          ))}
          <hr className="border-gray-50" />
          <Link href="#" className="text-brand-blue font-semibold">
            Join as a Professional
          </Link>
          <Link
            href="#"
            className="bg-brand-blue text-white text-center py-4 rounded-xl font-bold"
          >
            Get App
          </Link>
        </div>
      )}
    </nav>
  );
}
