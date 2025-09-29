"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useBranch } from "@/context/BranchContext";

export default function Hero() {
  const { branch } = useBranch();
  return (
    <section id="hero" className="section bg-pink-50/50">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Safe & Comfortable Ladies Hostel in Chennai
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to Thaai Ladies Hostel — branches at Ambattur and Pattabiram. Currently viewing: {branch === "ambattur" ? "Ambattur" : "Pattabiram"}.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="bg-pink-600 text-white px-5 py-2.5 rounded-md hover:bg-pink-700 text-sm">Book a Visit</a>
            <a href="#gallery" className="border px-5 py-2.5 rounded-md text-sm hover:bg-white">View Gallery</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow">
          <Image src={branch === "ambattur" ? "/images/ambattur/1.svg" : "/images/pattabiram/1.svg"} alt="Hostel" fill priority className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}


