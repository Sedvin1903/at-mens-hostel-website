"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useBranch } from "@/context/BranchContext";
import { galleryImages } from "@/app/data/galleryImages";

export default function Gallery() {
  const { branch } = useBranch();
  const images = galleryImages[branch] || [];

  return (
    <section id="gallery" className="section bg-pink-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Gallery ({branch === "ambattur" ? "Ambattur" : "Pattabiram"})
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-5xl mx-auto"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden bg-black">
                <Image
                  src={src}
                  alt={`Hostel photo ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
