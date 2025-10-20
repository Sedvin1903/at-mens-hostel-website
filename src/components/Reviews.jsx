"use client";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Guests Say</h2>

        {/* Responsive iframe container */}
        <div className="relative w-full" style={{ paddingTop: "150%" }}>
          <iframe
            src="https://share.google/5bNSSGjM5cLhDym8A"
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
