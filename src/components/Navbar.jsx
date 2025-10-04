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
        <div className="font-semibold text-lg">Thaai Ladies Hostel</div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className="text-sm hover:text-pink-600 rounded-full px-3 py-1 transition"
            >
              {s.label}
            </button>
          ))}

          {/* Branch dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-sm bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MapPin size={16} />
              {branch === "ambattur" ? "Ambattur" : "Pattabiram"}
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden z-50">
                <button
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center gap-3 ${
                    branch === "ambattur" 
                      ? "bg-pink-50 text-pink-700 font-medium" 
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                  onClick={() => handleBranchChange("ambattur")}
                >
                  <MapPin size={16} className={branch === "ambattur" ? "text-pink-600" : "text-gray-400"} />
                  <span>Ambattur</span>
                  {branch === "ambattur" && (
                    <div className="ml-auto w-2 h-2 bg-pink-600 rounded-full"></div>
                  )}
                </button>
                <button
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center gap-3 ${
                    branch === "pattabiram" 
                      ? "bg-pink-50 text-pink-700 font-medium" 
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                  onClick={() => handleBranchChange("pattabiram")}
                >
                  <MapPin size={16} className={branch === "pattabiram" ? "text-pink-600" : "text-gray-400"} />
                  <span>Pattabiram</span>
                  {branch === "pattabiram" && (
                    <div className="ml-auto w-2 h-2 bg-pink-600 rounded-full"></div>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <select
            className="bg-pink-600 text-white rounded-full px-3 py-2 text-sm border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="ambattur">📍 Ambattur</option>
            <option value="pattabiram">📍 Pattabiram</option>
          </select>
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
