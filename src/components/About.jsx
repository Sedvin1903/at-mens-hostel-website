export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">About Thaai Ladies Hostel</h2>
          <p className="mt-4 text-gray-600">
            We provide secure, hygienic, and affordable accommodation for students and working women.
            Our facilities include 24x7 security, nutritious food, clean rooms, Wi‑Fi, laundry, and
            proximity to public transport.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
            <li>• 24/7 Security and CCTV</li>
            <li>• Nutritious Vegetarian Meals</li>
            <li>• High-speed Wi‑Fi</li>
            <li>• Housekeeping & Laundry</li>
            <li>• Power Backup</li>
            <li>• Easy Access to Bus/Train</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Why choose us?</h3>
          <p className="mt-2 text-gray-600">
            We operate like family. Safety and comfort come first. Our Ambattur and Pattabiram
            branches are designed to feel like home while keeping you close to your daily commute.
          </p>
        </div>
      </div>
    </section>
  );
}


