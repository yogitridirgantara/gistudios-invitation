"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "aos/dist/aos.css";

const images = [
  "/images/C-BLACK-1.jpg",
  "/images/C-BLACK-2.jpg",
  "/images/C-BLACK-3.jpg",
  "/images/C-BLACK-4.jpg",
];

export default function LoveStory() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [index, setIndex] = useState(0);

  // auto ganti foto setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/C-GRAY-5.jpg" // ganti dengan background foto yang kamu mau
          alt="Background Love"
          fill
          className="object-cover"
        />
        {/* Overlay dengan blur dan opacity */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-serif italic text-white mb-12 text-center drop-shadow-lg"
          data-aos="fade-down"
        >
          Love Story
        </h2>

        {/* Isi Love Story */}
        <div className="max-w-3xl text-center space-y-6 text-gray-200 leading-relaxed mb-12">
          <p data-aos="fade-up">
            Di antara ribuan langkah dalam hidup kami dipertemukan secara tak
            terduga di sekolah SMA yang sama.
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            Dari tatap yang tak sengaja tumbuhlah percakapan sederhana. Dari
            pertemanan hadir kenyamanan. Perlahan rasa itu tumbuh menjadi cinta
            di tahun 2019.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Kami berjalan bersama melewati segala cerita. Dalam perbedaan kami
            menemukan satu hal yang sama: keinginan untuk terus melangkah
            bersama.
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            Di tahun dan di bulan ini kami memulai babak baru. Bukan lagi
            sekedar “Aku” dan “Kamu” tapi “Kita”. Bukan sekedar cerita cinta
            tapi janji untuk seumur hidup. Dan inilah kisah kami yang kini
            berlanjut menjadi{" "}
            <span className="font-semibold text-pink-400">ikatan suci</span>.
          </p>
        </div>

        {/* Slider Foto */}
        <div className="relative w-full max-w-3xl h-80 rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`Love Story ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Titik indikator */}
        <div className="flex space-x-2 mt-4">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-pink-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
