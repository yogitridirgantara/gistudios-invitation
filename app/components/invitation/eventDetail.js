"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import { CalendarHeart, GlassWater } from "lucide-react";
import Image from "next/image";
import "aos/dist/aos.css";

export default function EventDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });

    const targetDate = new Date("2025-10-25T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="event-details"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background dengan blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/C-GRAY-4.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center blur-[6px] scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-serif italic mb-6 text-white drop-shadow-md"
          data-aos="fade-down"
        >
          Rangkaian Acara
        </h2>

        {/* Countdown */}
        <div
          className="backdrop-blur-xl rounded-2xl px-6 py-4 mb-12 
                     text-center border border-white/20 inline-block"
          data-aos="zoom-in"
        >
          <h3 className="text-white text-lg md:text-xl mb-2 font-semibold font-serif">
            Event Countdown
          </h3>
          <div className="flex gap-4 justify-center text-white">
            <div>
              <p className="text-2xl font-bold">{timeLeft.days}</p>
              <span className="text-sm">Hari</span>
            </div>
            <div>
              <p className="text-2xl font-bold">{timeLeft.hours}</p>
              <span className="text-sm">Jam</span>
            </div>
            <div>
              <p className="text-2xl font-bold">{timeLeft.minutes}</p>
              <span className="text-sm">Menit</span>
            </div>
            <div>
              <p className="text-2xl font-bold">{timeLeft.seconds}</p>
              <span className="text-sm">Detik</span>
            </div>
          </div>
        </div>

        {/* Card Acara */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Akad Nikah */}
          <div
            className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8 
                       flex flex-col items-center text-center border border-white/20
                       hover:shadow-gray-200/40 hover:scale-[1.02] transition-all duration-1000"
            data-aos="fade-right"
          >
            <CalendarHeart className="w-10 h-10 text-gray-900 mb-4" />
            <p className="font-semibold text-lg md:text-xl text-white">
              Akad Nikah
            </p>
            <p className="text-gray-200 mt-2 text-sm md:text-base leading-relaxed">
              Sabtu, 25 Oktober 2025 <br /> 08.00 WIB - Selesai
            </p>
          </div>

          {/* Resepsi Pernikahan */}
          <div
            className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8 
                       flex flex-col items-center text-center border border-white/20
                       hover:shadow-gray-200/40 hover:scale-[1.02] transition-all duration-1000"
            data-aos="fade-left"
          >
            <GlassWater className="w-10 h-10 text-gray-900 mb-4" />
            <p className="font-semibold text-lg md:text-xl text-white">
              Resepsi Pernikahan
            </p>
            <p className="text-gray-200 mt-2 text-sm md:text-base leading-relaxed">
              Sabtu, 25 Oktober 2025 <br /> 11.00 WIB - Selesai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
