"use client";

import Image from "next/image";
import { useBranch } from "@/context/BranchContext";

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);

export default function Gallery() {
  const { branch } = useBranch();
  const base = branch === "ambattur" ? "/images/ambattur" : "/images/pattabiram";
  const images = range(6).map((i) => `${base}/${i}.svg`);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Gallery ({branch === "ambattur" ? "Ambattur" : "Pattabiram"})</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-md">
              <Image src={src} alt="Hostel photo" fill loading="lazy" className="object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


