"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { Instagram } from "lucide-react"; // ikon Instagram
import "aos/dist/aos.css";

export default function BrideGroom() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section
      id="bridegroom"
      className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-20 relative overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-sm uppercase tracking-widest text-gray-500">
          Our Wedding
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif italic text-gray-900">
          The Bride & The Groom
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/
          Saudara/i untuk menghadiri acara pernikahan kami yang penuh
          kebahagiaan.
        </p>
      </div>

      {/* Grid mempelai */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bride */}
        <div className="relative flex flex-col items-center md:items-center text-center md:text-left">
          <div
            className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade-right"
          >
            <Image
              src="/images/IMG_6506.jpg"
              alt="The Bride"
              fill
              className="object-cover"
            />
          </div>
          <h4 className="mt-6 text-xl md:text-2xl font-bold text-gray-900 font-serif">
            Neng Hevia
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Putri Pertama dari Bapak Heri Sapari (Alm.)/Bapak Ali Hilmansyah & Ibu Ai Elih
          </p>
          <a
            href="https://www.instagram.com/heviaaa_?igsh=MzJxdmRhcTZrMXdk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 transition"
          >
            <Instagram size={16} /> @heviaaa_
          </a>
        </div>

        {/* Groom */}
        <div className="relative flex flex-col items-center md:items-center text-center md:text-left">
          <div
            className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <Image
              src="/images/IMG_6503.jpg"
              alt="The Groom"
              fill
              className="object-cover"
            />
          </div>
          <h4 className="mt-6 text-xl md:text-2xl font-bold text-gray-900 font-serif">
            Yoga Dwi Satria
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Putra Kedua dari Bapak Taryana S.Ip & Ibu Erni Sumarni
          </p>
          <a
            href="https://www.instagram.com/yogadwisatria_?igsh=dmM2bnlhYWJxZnpx&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition"
          >
            <Instagram size={16} /> @yogadwisatria_
          </a>
        </div>
      </div>

      {/* Nama Pasangan */}
      <div className="text-center mt-16" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-serif italic text-gray-900">
          Yoga & Hevia
        </h3>
        <p className="mt-2 text-gray-500 text-sm md:text-base">
          “Cinta adalah ketika kebahagiaan orang lain lebih penting daripada
          kebahagiaanmu sendiri.”
        </p>
      </div>
    </section>
  );
}
