
"use client";
import React, { useEffect } from "react";

// IMPORTANT: Place your images in the /public folder
const bannerImage = "/banner.jpg";
const servicesImage = "/services.jpg";

export default function BusinessWebsite() {

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        `${window.scrollY * 0.3}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-blue-50 text-gray-900 overflow-hidden">

      {/* Semi-transparent Grass + Sky Background (pre-blurred premium look) */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40 blur-sm scale-110"
        style={{ backgroundImage: "url('/grass-sky.jpg')" }}
      />

      {/* Soft overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/20" />

      {/* SVG Background Graphics */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-10 left-0 w-72 opacity-5 transform translate-y-[var(--scrollY)]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
        >
          <path d="M10 100 Q100 10 190 100 Q100 190 10 100 Z" />
          <path d="M100 20 Q100 100 100 180" />
        </svg>

        <svg
          className="absolute bottom-10 right-0 w-80 opacity-5 transform -translate-y-[calc(var(--scrollY)/2)]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
        >
          <circle cx="50" cy="150" r="20" />
          <line x1="50" y1="130" x2="50" y2="50" />
          <line x1="50" y1="50" x2="80" y2="20" />
          <rect x="110" y="120" width="40" height="20" />
          <line x1="130" y1="120" x2="130" y2="60" />
        </svg>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-sm bg-white relative z-10">
        <div className="flex items-center gap-3">
          <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="#16a34a" strokeWidth="2" className="drop-shadow-sm">
            {/* Mascot-style leaf + lawn curve */}
            <path d="M8 36 Q32 10 56 36 Q32 60 8 36 Z" fill="#bbf7d0" stroke="#16a34a"/>
            <path d="M16 42 Q32 28 48 42" stroke="#16a34a" strokeWidth="2"/>
            <circle cx="24" cy="34" r="2" fill="#16a34a"/>
            <circle cx="40" cy="34" r="2" fill="#16a34a"/>
          </svg>
          <div className="leading-tight">
            <div className="text-2xl font-extrabold text-green-700 tracking-tight">Mr Lawncare</div>
            <div className="text-xs text-green-600 -mt-1">Cheektowaga, NY</div>
          </div>
        </div>
        <nav className="space-x-4">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#payment" className="font-semibold text-green-700 hover:underline">Pay Invoice</a>
        </nav>
      </header>

      {/* Hero Image */}
      <section className="w-full relative z-10">
        <div className="w-full flex justify-center bg-white">
          <img
            src={bannerImage}
            alt="Mr Lawncare banner"
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-green-700">
          Beautiful Properties Start Here
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Professional lawn care, landscaping, and treatments for homeowners in Cheektowaga, NY and surrounding areas.
        </p>
        <a
          href="tel:17166835296"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl md:text-2xl rounded-2xl shadow-lg"
        >
          Call 716-683-5296
        </a>
      </section>

      {/* Grass Divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 100" className="w-full">
          <path d="M0 80 Q50 40 100 80 T200 80 T300 80 T400 80 T500 80 T600 80 T700 80 T800 80 T900 80 T1000 80 T1100 80 T1200 80 V100 H0 Z" fill="#bbf7d0" />
        </svg>
      </div>

      {/* Services Graphic */}
      <section className="px-6 pt-10 pb-6 max-w-5xl mx-auto text-center relative z-10">
        <img
          src={servicesImage}
          alt="Services We Offer"
          className="mx-auto w-full max-w-3xl h-auto object-contain"
        />
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10"
      >
        {[
          {
            title: "Property Services",
            desc: "Routine mowing, edging, and seasonal cleanups to keep your lawn looking its best.",
          },
          {
            title: "Landscaping",
            desc: "Planting, design, and outdoor upgrades to enhance your home’s curb appeal.",
          },
          {
            title: "Lawn Treatments",
            desc: "Fertilization, weed control, and lawn health programs tailored to Western New York.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="group rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition text-center"
          >

            {/* Premium Animated SVG Icons */}
            <div className="mb-4 flex justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-2">

              {service.title === "Property Services" && (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#16a34a" strokeWidth="2" className="drop-shadow-md">
                  {/* mower body */}
                  <rect x="10" y="26" width="30" height="16" rx="4" fill="#dcfce7" />
                  {/* wheels */}
                  <circle cx="18" cy="48" r="6" />
                  <circle cx="36" cy="48" r="6" />
                  {/* handle */}
                  <line x1="40" y1="28" x2="58" y2="14" />
                  {/* blade hint */}
                  <line x1="18" y1="34" x2="36" y2="34" strokeDasharray="3 2" />
                </svg>
              )}

              {service.title === "Landscaping" && (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#16a34a" strokeWidth="2" className="drop-shadow-md">
                  {/* trunk */}
                  <line x1="32" y1="12" x2="32" y2="44" />
                  {/* leaves */}
                  <path d="M32 12 C18 22, 18 32, 32 44" fill="#bbf7d0" />
                  <path d="M32 12 C46 22, 46 32, 32 44" fill="#bbf7d0" />
                  {/* ground */}
                  <line x1="18" y1="50" x2="46" y2="50" />
                </svg>
              )}

              {service.title === "Lawn Treatments" && (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#16a34a" strokeWidth="2" className="drop-shadow-md">
                  {/* hopper */}
                  <rect x="14" y="22" width="26" height="18" rx="4" fill="#dcfce7" />
                  {/* wheels */}
                  <circle cx="20" cy="48" r="5" />
                  <circle cx="36" cy="48" r="5" />
                  {/* handle */}
                  <line x1="40" y1="24" x2="54" y2="12" />
                  {/* spread particles */}
                  <circle cx="52" cy="18" r="2" fill="#16a34a" />
                  <circle cx="56" cy="22" r="1.5" fill="#16a34a" />
                </svg>
              )}

            </div>

            <h3 className="text-xl font-semibold mb-2 text-green-700">
              {service.title}
            </h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 text-center bg-white relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          About Mr Lawncare
        </h2>
        <p className="max-w-2xl mx-auto">
          At Mr Lawncare, we help suburban homeowners maintain lush, healthy lawns and beautiful outdoor spaces. Based in Cheektowaga, NY, we take pride in reliable service, attention to detail, and results you can see.
        </p>
      </section>

      {/* Sticky Call Button */}
      <a
        href="tel:17166835296"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full shadow-xl text-lg z-50 animate-pulse"
      >
        📞 Call Now
      </a>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-green-700">
          Contact Us
        </h2>
        <p className="mb-2">📍 5 Old Indian Road, Cheektowaga, NY 14227</p>
        <p className="mb-2">📞 716-683-5296</p>
        <p className="mb-6">✉️ service@mrlawncarewny.com</p>
        <a
          href="mailto:service@mrlawncarewny.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow"
        >
          Request a Quote
        </a>
      </section>

      {/* Invoice Payment Section */}
      <section id="payment" className="py-16 px-6 text-center bg-green-50 relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-green-700">
          Pay Your Invoice
        </h2>
        <p className="mb-6">Quick and secure online payment</p>
        <a
          href="https://buy.stripe.com/4gwdTF8tf0I66FW4gh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg"
        >
          💳 Pay Invoice
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-green-700 text-white mt-10 relative z-10">
        <p>© {new Date().getFullYear()} Mr Lawncare. All rights reserved.</p>
      </footer>
    </div>
  );
}
