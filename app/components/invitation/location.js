"use client";

import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import "aos/dist/aos.css";

export default function Location() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className=" flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 py-16"
      data-aos="fade-up"
    >
      {/* Judul */}
      <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800">
        Peta Lokasi
      </h2>

      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl text-center">
        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/qr-lokasi.png"
            alt="QR Lokasi"
            width={120}
            height={120}
            className="rounded-lg border"
          />
        </div>

        {/* Alamat */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Kp. Cibodas RT.03 RW.01 Desa Cibodas <br />
          Kec. Solokanjeruk, Kab. Bandung <br />
          (Bengkel Netral Motor)
        </p>

        {/* Tombol Maps */}
        <a
          href="https://maps.app.goo.gl/5wsdwES1VQnhDZgT6?g_st=ipc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
        >
          <MapPin size={18} /> Lihat di Google Maps
        </a>
      </div>
    </section>
  );
}
