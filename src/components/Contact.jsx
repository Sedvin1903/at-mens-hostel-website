"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
    pattabiram:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.626169826047!2d80.0568580745489!3d13.122852411545255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52890079d31493%3A0xf0a32f792bfc4504!2sAT%20Mens%20Hostel!5e0!3m2!1sen!2sin!4v1760989068088!5m2!1sen!2sin",
  };

  const locationNames = {
    pattabiram: "Pattabiram Branch"
  };

  // Contact person information
  const contactPerson = {
    pattabiram: {
      name: "Mrs. Fathima Joseph",
      phone: "+91 97108 36760",
      email: "pattabirammenshostel@gmail.com",
      whatsapp: "+91 97108 36760"
    }
  };

  return (
    <section id="contact" className="section bg-white-50">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <div className="mt-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span>📍</span>
              {locationNames[branch]}
            </div>
          </div>

          {/* Contact Person Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6 border border-blue-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {contactPerson[branch]?.name?.split(' ').map(n => n[0]).join('') || 'RK'}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{contactPerson[branch]?.name}</h3>
                <div className="space-y-1">
                  <a 
                    href={`tel:${contactPerson[branch]?.phone}`}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>☎️</span>
                    {contactPerson[branch]?.phone}
                  </a>
                  <a 
                    href={`mailto:${contactPerson[branch]?.email}`}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>🖂</span>
                    {contactPerson[branch]?.email}
                  </a>
                  <a 
                    href={`https://wa.me/${contactPerson[branch]?.whatsapp?.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800 transition-colors"
                  >
                    <span>📞</span>
                    WhatsApp : {contactPerson[branch]?.whatsapp}
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="mt-6 grid gap-3">
            <input className="border rounded-md px-3 py-2" name="from_name" placeholder="Your name" required />
            <input className="border rounded-md px-3 py-2" name="reply_to" type="email" placeholder="Email"  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"  title="Please enter a valid email address" required />
            <input className="border rounded-md px-3 py-2" name="phone" type="tel" placeholder="Phone (optional)" pattern="^\d{10}$" required />
            <textarea className="border rounded-md px-3 py-2" name="message" rows={4} placeholder="Message" required />
            <input type="hidden" name="branch" value="pattabiram" />
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 text-sm" type="submit" disabled={buttonLabel !== "Send message"}>
            {buttonLabel}
            </button>
          </form>
        </div>
        <div>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-md overflow-hidden border bg-white">
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


