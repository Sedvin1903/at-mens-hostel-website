"use client";

import { motion } from "framer-motion";
import { useBranch } from "@/context/BranchContext";

export default function Hero() {
  const { branch } = useBranch();

  const maps3D = {
    pattabiram:
      "https://www.google.com/maps/embed?pb=!4v1760988931798!6m8!1m7!1swkdy3N0uys5ghGYDXj30ag!2m2!1d13.12288819571849!2d80.05948461682519!3f190.55!4f-1.2600000000000051!5f0.7820865974627469"
  };

  return (
    <section id="hero" className="section bg-blue-50/50">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Safe & Comfortable Men's Hostel in Chennai
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to AT Mens Hostel — Pattabiram branch.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 text-sm"
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
