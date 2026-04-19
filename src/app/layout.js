// app/layout.jsx
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "OHealth — Healthcare Made Accessible",
  description:
    "OHealth is a digital healthcare platform that connects you with verified healthcare professionals, lets you book consultations and lab tests online, and securely manage all your health records in one place.",
};

const inter = Inter({ subsets: ["latin"] });
const lora = Playfair_Display({ subsets: ["latin"], variable: "--font-lora" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
