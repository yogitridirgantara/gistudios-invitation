"use client";

import Aos from "aos";
import { useEffect } from "react";
import { Heart } from "lucide-react";
import "aos/dist/aos.css";

export default function Closing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900" />
      <div className="absolute inset-0 bg-[url('/images/C-GRAY-4.jpg')] bg-cover bg-center blur-md opacity-20" />

      {/* Konten */}
      <div className="relative z-10 text-center max-w-2xl">
        <p className="text-gray-200 mb-8 leading-relaxed text-sm">
          Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <div className="flex justify-center mb-8">
          <Heart className="w-10 h-10 text-pink-400 animate-pulse" />
        </div>

        <h3 className="text-2xl md:text-3xl font-serif italic text-white">
          Yoga & Hevia
        </h3>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Digital Invitation by {" "}
          <a
            href="https://www.instagram.com/gistudios__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            @gistudios__
          </a>{" "}
          &{" "}
          <a
            href="https://www.instagram.com/yogitridirgantara_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            @yogitridirgantara_
          </a>
        </p>
      </footer>
    </section>
  );
}
