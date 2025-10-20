import "./globals.css";
import { BranchProvider } from "@/context/BranchContext";
import Navbar from "@/components/Navbar";
import { icons } from "lucide-react";

export const metadata = {
  title: "AT Mens Hostel - Pattabiram",
  description: "Safe, comfortable men's hostel in Chennai - Pattabiram",
  icons : {
    icon : "/tab_pic.ico"
  }
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


