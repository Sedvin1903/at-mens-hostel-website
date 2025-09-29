import "./globals.css";
import { BranchProvider } from "@/context/BranchContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Thaai Ladies Hostel",
  description: "Safe, comfortable ladies hostel in Chennai - Ambattur & Pattabiram",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <BranchProvider>
          <Navbar />
          {children}
        </BranchProvider>
      </body>
    </html>
  );
}


