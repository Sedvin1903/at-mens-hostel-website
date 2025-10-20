"use client";

import { useEffect, useState, useRef } from "react";
import { useBranch } from "@/context/BranchContext";
import { ChevronDown, MapPin } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { branch, setBranch } = useBranch();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBranchChange = (newBranch) => {
    setBranch(newBranch);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b rounded-b-lg">
      <nav className="container flex items-center justify-between h-14">
        <div className="font-semibold text-lg">AT Mens Hostel</div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className="text-sm hover:text-blue-600 rounded-full px-3 py-1 transition"
            >
              {s.label}
            </button>
          ))}

          {/* Single branch badge */}
          <div className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white rounded-full px-4 py-2 shadow-md">
            <MapPin size={16} />
            Pattabiram
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="bg-blue-600 text-white rounded-full px-3 py-2 text-sm shadow-md">📍 Pattabiram</div>
        </div>
      </nav>

      {/* Mobile nav buttons */}
      <div className="md:hidden border-t rounded-b-xl">
        <div className="container flex items-center justify-between py-2 gap-2 overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className="text-sm whitespace-nowrap px-3 py-1 rounded-full hover:bg-gray-50 transition"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
