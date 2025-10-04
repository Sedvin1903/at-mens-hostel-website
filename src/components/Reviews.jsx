
// // src/components/Reviews.jsx
// "use client";

// import { useState } from "react";

// export default function Reviews() {
//   // Two branches
//   const locations = {
//     ambattur:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6469969181694!2d80.14919717454889!3d13.121535011574421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a84bdddf43%3A0xc4962382d7e0420f!2sTHAAI%20LADIES%20HOSTEL!5e0!3m2!1sen!2sin!4v1759166840788!5m2!1sen!2sin",
//     pattabiram:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.562475885373!2d80.05686107454889!3d13.126880511455925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289080776a859%3A0x4c3466a814c972b0!2sThaai%20ladies%20hostel!5e0!3m2!1sen!2sin!4v1759167023007!5m2!1sen!2sin",
//   };

//   const [branch, setBranch] = useState("ambattur");

//   return (
//     <section id="reviews" className="py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>

//         {/* Dropdown */}
//         <div className="flex justify-center mb-6">
//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm"
//           >
//             <option value="ambattur">Ambattur Branch</option>
//             <option value="pattabiram">Pattabiram Branch</option>
//           </select>
//         </div>

//         {/* Google Map Embed */}
//         <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             src={locations[branch]}
//             width="100%"
//             height="100%"
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         <p className="text-center text-gray-600 mt-4">
//           ⭐ Reviews are powered directly by Google Maps ({branch} branch)
//         </p>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Script from "next/script";
// import { useBranch } from "@/context/BranchContext";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Reviews() {
//   const { branch } = useBranch();

//   // Define widget IDs for each branch
//   const widgetIds = {
//     ambattur: "elfsight-app-01144471-b5c5-4468-b6a2-d822ef96c388", // Ambattur widget
//     pattabiram: "elfsight-app-22222222-aaaa-bbbb-cccc-333333333333", // Pattabiram widget
//   };

//   return (
//     <section id="reviews" className="py-16 bg-white-50 relative">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           What Our Guests Say
//         </h2>

//         {/* Load Elfsight script once */}
//         <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

//         {/* AnimatePresence ensures smooth transition */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={branch} // re-renders when branch changes
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div
//               className={widgetIds[branch]}
//               data-elfsight-app-lazy
//             ></div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

"use client";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Guests Say</h2>

        {/* Responsive iframe container */}
        <div className="relative w-full" style={{ paddingTop: "150%" }}>
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25605637"
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
