"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-100 text-center text-sm text-black-600 py-4">
      &copy; {new Date().getFullYear()} AT Mens Hostel, Chennai. All rights reserved.
      <br />
      Designed with ❤️ for safe and peaceful living.
    </footer>
  );
}
