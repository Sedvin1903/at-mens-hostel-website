"use client";

import { motion } from "framer-motion";
import { useBranch } from "@/context/BranchContext";

export default function Hero() {
  const { branch } = useBranch();

  const maps3D = {
    ambattur:
      "https://www.google.com/maps/embed?pb=!4v1759322636551!6m8!1m7!1syRpw9wL9vwMZmthhOH-qWA!2m2!1d13.12149895513531!2d80.15182561895801!3f2.2643414087899245!4f10.27397876601232!5f0.7820865974627469",
    pattabiram:
      "https://www.google.com/maps/embed?pb=!4v1759323398161!6m8!1m7!1siHi-vUXbm0k7ywsI5CzL8w!2m2!1d13.1269128517689!2d80.05928074952247!3f147.93277515903384!4f0.8594059433854682!5f0.7820865974627469"
  };

  return (
    <section id="hero" className="section bg-pink-50/50">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Safe & Comfortable Ladies Hostel in Chennai
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to Thaai Ladies Hostel — branches at Ambattur and Pattabiram. Currently
            viewing: {branch === "ambattur" ? "Ambattur" : "Pattabiram"}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="bg-pink-600 text-white px-5 py-2.5 rounded-md hover:bg-pink-700 text-sm"
            >
              Book a Visit
            </a>
            <a
              href="#gallery"
              className="border px-5 py-2.5 rounded-md text-sm hover:bg-white"
            >
              View Gallery
            </a>
          </div>
        </motion.div>

        {/* Google 3D Street View embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden shadow"
        >
          <iframe
            src={maps3D[branch]}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
