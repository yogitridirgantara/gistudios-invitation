"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import Image from "next/image";
import "aos/dist/aos.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Contoh foto (bisa ditambah sesuai jumlah foto kamu)
  const photos = [
    "/images/C-BLACK-5.jpg",
    "/images/C-GRAY-5.jpg",
    "/images/C-GRAY-4.jpg",
    "/images/C-BLACK-4.jpg",
    "/images/C-BLACK-3.jpg",
    "/images/C-GRAY-3.jpg",
    "/images/C-GRAY-2.jpg",
    "/images/C-BLACK-2.jpg",
    "/images/C-BLACK-1.jpg",
    "/images/C-GRAY-1.jpg",
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="gallery"
      className="relative min-h-screen px-6 py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-4"
          data-aos="fade-down"
        >
          Our Moments
        </h2>
        <p
          className="text-gray-800 max-w-2xl mx-auto font-serif"
          data-aos="fade-up"
        >
          Kenangan indah yang kami abadikan dengan dua konsep berbeda, namun
          tetap satu cerita cinta
        </p>
      </div>

      {/* Gallery Grid */}
      <div
        className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 max-w-6xl mx-auto"
        data-aos="zoom-in"
      >
        {photos.map((src, i) => (
          <div
            key={i}
            className={`relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer ${
              i % 2 === 0 ? "bg-white/10" : "bg-gray-800/40"
            }`}
            onClick={() => handleImageClick(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>
        ))}
      </div>

      {/* Popup Zoomed Image */}
      {selectedImage && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
        >
          <div
            className="relative w-[90%] md:w-[60%] lg:w-[45%] aspect-square transition-transform transform scale-100 animate-zoomIn"
            onClick={(e) => e.stopPropagation()} // supaya klik di gambar tidak menutup popup
          >
            <Image
              src={selectedImage}
              alt="Zoomed Photo"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
