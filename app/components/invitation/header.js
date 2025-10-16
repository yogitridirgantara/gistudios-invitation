"use client";
export const dynamic = "force-dynamic";

import { Suspense, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Aos from "aos";
import { useSearchParams } from "next/navigation";
import "aos/dist/aos.css";
import MusicPlayer from "./musicPlayer";

function InvitationHeaderContent() {
  const [nama, setNama] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [aosReady, setAosReady] = useState(false); // ✅ untuk AOS setelah client mount
  const searchParams = useSearchParams();
  const musicRef = useRef(null);

  // Client-only effect
  useEffect(() => {
    // Inisialisasi AOS
    Aos.init({ duration: 1000 });
    setAosReady(true);

    // Ambil nama dari query param
    const namaURL = searchParams.get("To");
    if (namaURL) {
      setNama(capitalize(namaURL));
    }
  }, [searchParams]);

  const capitalize = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  // Scroll + start music
  const handleOpenInvitation = () => {
    setIsOpen(true);

    if (musicRef.current) {
      musicRef.current.startMusic();
    }

    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lock scroll sebelum klik "Open Invitation"
  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
        {...(aosReady
          ? { "data-aos": "zoom-out", "data-aos-duration": "2000" }
          : {})} // ✅ hanya render AOS di client
      >
        {/* Background */}
        <Image
          src="/images/C-GRAY-1.jpg"
          alt="Background Image"
          fill
          priority
          className="absolute inset-0 z-0 object-cover opacity-50"
        />

        {/* Judul Utama */}
        <div className="z-10 text-center text-gray-100 mb-80">
          <h1 className="text-[12px] md:text-xl">The Wedding Of</h1>
          <p className="mb-2 text-2xl md:text-4xl font-serif italic">
            Yoga & Hevia
          </p>
          <span className="text-[14px]">25 . 10 . 2025</span>
        </div>

        {/* Nama Tamu */}
        <div className="flex flex-col items-center justify-center p-20 z-10">
          <div className="flex flex-col items-center justify-center mb-12">
            <p className="text-gray-100 text-sm md:text-lg font-serif text-center">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            {nama && (
              <p className="text-gray-100 text-sm md:text-lg font-serif font-extrabold mt-4">
                {nama}
              </p>
            )}
          </div>

          {/* Tombol Open Invitation */}
          <button
            onClick={handleOpenInvitation}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            Open Invitation
          </button>
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer ref={musicRef} />
    </>
  );
}

export default function InvitationHeader() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-20 text-gray-400">
          Memuat undangan...
        </div>
      }
    >
      <InvitationHeaderContent />
    </Suspense>
  );
}
