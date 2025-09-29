"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useBranch } from "@/context/BranchContext";

export default function Contact() {
  const formRef = useRef(null);
  const { branch } = useBranch();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("Missing EmailJS env");
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSent(true);
      formRef.current?.reset();
    } catch (e) {
      setError(e.message);
    }
  };

  const mapPlaceId = branch === "ambattur" ? process.env.NEXT_PUBLIC_PLACE_ID_AMBATTUR : process.env.NEXT_PUBLIC_PLACE_ID_PATTABIRAM;
  const embedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY || process.env.GOOGLE_API_KEY;

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <form ref={formRef} onSubmit={onSubmit} className="mt-6 grid gap-3">
            <input className="border rounded-md px-3 py-2" name="from_name" placeholder="Your name" required />
            <input className="border rounded-md px-3 py-2" name="reply_to" type="email" placeholder="Email" required />
            <input className="border rounded-md px-3 py-2" name="phone" placeholder="Phone (optional)" />
            <textarea className="border rounded-md px-3 py-2" name="message" rows={4} placeholder="Message" required />
            <input type="hidden" name="branch" value={branch} />
            <button className="bg-pink-600 text-white px-5 py-2.5 rounded-md hover:bg-pink-700 text-sm" type="submit">Send message</button>
            {sent && <p className="text-green-600 text-sm">Thanks! We will get back to you soon.</p>}
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </div>
        <div>
          <div className="aspect-[4/3] w-full rounded-md overflow-hidden border bg-white">
            {embedKey && mapPlaceId ? (
              <iframe
                title="map"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${embedKey}&q=place_id:${mapPlaceId}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm p-4">
                Add Google Maps Embed key and Place ID to show the map.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


