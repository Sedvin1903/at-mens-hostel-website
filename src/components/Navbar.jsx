"use client";

import { useEffect, useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { ChevronDown } from "lucide-react";

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

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm border rounded-full px-4 py-2 hover:bg-gray-50 transition"
            >
              {branch === "ambattur" ? "Ambattur" : "Pattabiram"}
              <ChevronDown size={16} />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white shadow-lg overflow-hidden">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm rounded-t-xl transition"
                  onClick={() => {
                    setBranch("ambattur");
                    setOpen(false);
                  }}
                >
                  Ambattur
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm rounded-b-xl transition"
                  onClick={() => {
                    setBranch("pattabiram");
                    setOpen(false);
                  }}
                >
                  Pattabiram
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <select
            className="border rounded-full px-3 py-1 text-sm"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="ambattur">Ambattur</option>
            <option value="pattabiram">Pattabiram</option>
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
