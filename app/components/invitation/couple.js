"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

export default function Couple() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/C-GRAY-1.jpg",
    "/images/C-GRAY-2.jpg",
    "/images/C-GRAY-3.jpg",
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // ganti setiap 5 detik

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="couple"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Couple ${index + 1}`}
              fill
              sizes="100vw"
              className={`object-cover transition-all duration-[2500ms] ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
              priority={index === 0} // biar gambar pertama cepat load
            />
          ))}
        </div>
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-opacity-50" />
      </div>

      {/* Konten Utama */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6"
        data-aos="fade-up"
      >
        {/* Ayat */}
        <div className="max-w-3xl text-center mb-12">
          <p className="text-sm md:text-xl italic leading-relaxed font-serif">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu merasa
            tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
            sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir.”
          </p>
          <span className="block mt-4 text-sm md:text-lg font-semibold">
            (QS. Ar-Rum: 21)
          </span>
        </div>
      </div>
    </section>
  );
}
