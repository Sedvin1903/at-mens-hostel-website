import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BranchProvider } from "@/context/BranchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AT Mens Hostel - Pattabiram",
  description: "Safe, comfortable men's hostel in Chennai – Pattabiram branch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100`}
      >
        <BranchProvider>
          {children}
        </BranchProvider>
      </body>
    </html>
  );
}
