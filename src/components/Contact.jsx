"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useBranch } from "@/context/BranchContext";

export default function Contact() {
  const formRef = useRef(null);
  const { branch } = useBranch();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSent(false);

  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateNotify = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NOTIFY;
    const templateReply = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_REPLY;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateNotify || !templateReply || !publicKey) {
      throw new Error("Missing EmailJS environment variables");
    }

    // Send to you
    await emailjs.sendForm(serviceId, templateNotify, formRef.current, publicKey);

    // Send auto-reply to customer
    await emailjs.sendForm(serviceId, templateReply, formRef.current, publicKey);

    setSent(true);
    setButtonLabel("✅ Message sent!");
    setTimeout(() => {
      setButtonLabel("Send message");
      setSent(false);
    }, 10000); // 10 seconds

    formRef.current?.reset();
    } 
    catch (e) {
      setError(e.message);
    }
  };

  const [buttonLabel, setButtonLabel] = useState("Send message");

  const locations = {
    ambattur:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6469969181694!2d80.14919717454889!3d13.121535011574421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a84bdddf43%3A0xc4962382d7e0420f!2sTHAAI%20LADIES%20HOSTEL!5e0!3m2!1sen!2sin!4v1759166840788!5m2!1sen!2sin",
    pattabiram:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.562475885373!2d80.05686107454889!3d13.126880511455925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289080776a859%3A0x4c3466a814c972b0!2sThaai%20ladies%20hostel!5e0!3m2!1sen!2sin!4v1759167023007!5m2!1sen!2sin",
  };

  const locationNames = {
    ambattur: "Ambattur Branch",
    pattabiram: "Pattabiram Branch"
  };

  return (
    <section id="contact" className="section bg-white-50">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <div className="mt-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
              <span>📍</span>
              {locationNames[branch]}
            </div>
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="mt-6 grid gap-3">
            <input className="border rounded-md px-3 py-2" name="from_name" placeholder="Your name" required />
            <input className="border rounded-md px-3 py-2" name="reply_to" type="email" placeholder="Email"  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"  title="Please enter a valid email address" required />
            <input className="border rounded-md px-3 py-2" name="phone" type="tel" placeholder="Phone (optional)" pattern="^\d{10}$" required />
            <textarea className="border rounded-md px-3 py-2" name="message" rows={4} placeholder="Message" required />
            <input type="hidden" name="branch" value={branch} />
            <button className="bg-pink-600 text-white px-5 py-2.5 rounded-md hover:bg-pink-700 text-sm" type="submit" disabled={buttonLabel !== "Send message"}>
            {buttonLabel}
            </button>
          </form>
        </div>
        <div>
          <div className="aspect-[4/3] w-full rounded-md overflow-hidden border bg-white">
            {!isClient ? (
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm p-4">
                Loading map...
              </div>
            ) : locations[branch] ? (
              <iframe
                title={`Map of ${locationNames[branch]}`}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={locations[branch]}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm p-4">
                Map not available for this location.
              </div>
            )}
         </div>

        </div>
      </div>
    </section>
  );
}


