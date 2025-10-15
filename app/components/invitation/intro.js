"use client";

import Image from "next/image";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

export default function Intro() {
  const [petals, setPetals] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });

    // Generate posisi random setelah render client
    const newPetals = [...Array(10)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${i * 1.5}s`,
      duration: `${10 + Math.random() * 10}s`,
    }));

    const newSparkles = [...Array(15)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));

    setPetals(newPetals);
    setSparkles(newSparkles);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-gray-900 px-6 text-center relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background utama */}
      <Image
        src="/images/C-GRAY-5.jpg"
        alt="Background Image"
        fill
        priority
        className="absolute inset-0 z-0 object-cover blur-md opacity-25"
      />

      {/* Ornamen cahaya lembut */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl animate-ping"></div>

      {/* Efek bunga beterbangan */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-pink-200/30 rounded-full blur-sm animate-float"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          ></div>
        ))}
      </div>

      {/* Efek sparkle (cahaya lembut) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/70 rounded-full animate-twinkle"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
            }}
          ></div>
        ))}
      </div>

      {/* Salam pembuka */}
      <h2
        className="text-lg md:text-xl font-serif italic text-gray-200 mb-4 relative z-20"
        data-aos="fade-down"
      >
        Assalamu’alaikum Warahmatullahi Wabarakatuh
      </h2>

      {/* Kata pengantar */}
      <p
        className="text-gray-300 max-w-2xl leading-relaxed mb-6 relative z-20 font-serif"
        data-aos="fade-up"
      >
        Maha Suci Allah SWT yang telah menciptakan makhluk-Nya
        berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami bermaksud
        menyelenggarakan resepsi pernikahan putra-putri kami.
      </p>

      {/* Ornamen gradasi bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

      {/* Animasi custom */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(50vh) translateX(30px) rotate(45deg);
            opacity: 0.9;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-10vh) translateX(-30px) rotate(90deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
