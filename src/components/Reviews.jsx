// "use client";

// import { useEffect, useState } from "react";
// import { useBranch } from "@/context/BranchContext";

// export default function Reviews() {
//   const { branch } = useBranch();
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const placeId = branch === "ambattur" ? process.env.NEXT_PUBLIC_PLACE_ID_AMBATTUR : process.env.NEXT_PUBLIC_PLACE_ID_PATTABIRAM;
//     if (!placeId) {
//       setLoading(false);
//       setError("Missing Place ID environment variable");
//       return;
//     }
//     setLoading(true);
//     fetch(`/api/reviews?placeId=${encodeURIComponent(placeId)}`)
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.error) throw new Error(data.error);
//         setReviews(data.reviews || []);
//       })
//       .catch((e) => setError(e.message))
//       .finally(() => setLoading(false));
//   }, [branch]);

//   return (
//     <section id="reviews" className="section">
//       <div className="container">
//         <h2 className="text-2xl md:text-3xl font-semibold">What our residents say</h2>
//         {loading && <p className="mt-4 text-gray-600">Loading reviews…</p>}
//         {error && <p className="mt-4 text-red-600">{error}</p>}
//         {!loading && !error && (
//           <div className="mt-6 grid gap-4 sm:grid-cols-2">
//             {reviews.map((rev) => (
//               <div key={rev.time || rev.author_name} className="border rounded-lg p-4 bg-white">
//                 <div className="flex items-center justify-between">
//                   <p className="font-medium">{rev.author_name}</p>
//                   <p className="text-sm text-yellow-600">{"★".repeat(Math.round(rev.rating || 5))}</p>
//                 </div>
//                 <p className="mt-2 text-gray-700 line-clamp-5">{rev.text}</p>
//                 {rev.relative_time_description && (
//                   <p className="mt-2 text-xs text-gray-500">{rev.relative_time_description}</p>
//                 )}
//               </div>
//             ))}
//             {reviews.length === 0 && <p className="text-gray-600">No reviews available right now.</p>}
//           </div>
//         )}
//       </div>
//     </section>
//   );// }

// src/components/Reviews.jsx
"use client";

import { useState } from "react";

export default function Reviews() {
  // Two branches
  const locations = {
    ambattur:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6469969181694!2d80.14919717454889!3d13.121535011574421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a84bdddf43%3A0xc4962382d7e0420f!2sTHAAI%20LADIES%20HOSTEL!5e0!3m2!1sen!2sin!4v1759166840788!5m2!1sen!2sin",
    pattabiram:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.562475885373!2d80.05686107454889!3d13.126880511455925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289080776a859%3A0x4c3466a814c972b0!2sThaai%20ladies%20hostel!5e0!3m2!1sen!2sin!4v1759167023007!5m2!1sen!2sin",
  };

  const [branch, setBranch] = useState("ambattur");

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>

        {/* Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm"
          >
            <option value="ambattur">Ambattur Branch</option>
            <option value="pattabiram">Pattabiram Branch</option>
          </select>
        </div>

        {/* Google Map Embed */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={locations[branch]}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-center text-gray-600 mt-4">
          ⭐ Reviews are powered directly by Google Maps ({branch} branch)
        </p>
      </div>
    </section>
  );
}


