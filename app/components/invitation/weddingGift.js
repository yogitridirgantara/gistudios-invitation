"use client";

import Aos from "aos";
import { useEffect } from "react";
import { Copy, MapPin } from "lucide-react";
import Image from "next/image";
import "aos/dist/aos.css";

export default function WeddingGift() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Nomor berhasil disalin!");
  };

  return (
    <section
      id="wedding-gift"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Background Ornamen */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-95" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center w-full max-w-3xl space-y-10">
        <div>
          <h2
            className="text-3xl md:text-4xl font-serif italic text-white mb-6"
            data-aos="fade-down"
          >
            Wedding Gift
          </h2>
          <p
            className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-4"
            data-aos="fade-up"
          >
            Doa dan restu dari Bapak/Ibu/Saudara/i adalah karunia yang sangat
            berarti bagi kami. Namun apabila memberi tanda kasih, kami dengan
            senang hati menerima melalui informasi rekening berikut:
          </p>
        </div>

        {/* Card Rekening */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 px-2 md:px-0">
          {/* BNI */}
          <div
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-3"
            data-aos="zoom-in"
          >
            <Image
              src="/images/bni.png"
              alt="Logo BNI"
              width={60}
              height={60}
              className="mb-2"
            />
            <hr className="w-3/4 border-t border-gray-800 mb-2" />
            <p className="font-bold text-gray-900 text-lg">BNI</p>
            <p className="text-xl font-semibold text-gray-800">1851466168</p>
            <p className="text-gray-600 text-sm mb-2">a/n Neng Hevia</p>
            <button
              onClick={() => copyToClipboard("1851466168")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-blue-900 transition"
            >
              <Copy size={16} /> Salin Nomor
            </button>
          </div>

          {/* Dana */}
          <div
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/images/dana.png"
              alt="Logo Dana"
              width={60}
              height={60}
              className="mb-2"
            />
            <hr className="w-3/4 border-t border-gray-800 mb-2" />
            <p className="font-bold text-gray-900 text-lg">Dana</p>
            <p className="text-xl font-semibold text-gray-800">081320111954</p>
            <p className="text-gray-600 text-sm mb-2">a/n Yoga Dwi Satria</p>
            <button
              onClick={() => copyToClipboard("081320111954")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-blue-900 transition"
            >
              <Copy size={16} /> Salin Nomor
            </button>
          </div>
        </div>

        {/* Card Kirim Hadiah */}
        <div
          className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center mt-10 mx-2 md:mx-0"
          data-aos="fade-up"
        >
          <h2 className="text-xl md:text-2xl font-serif italic mb-6 text-gray-800">
            Kirim Hadiah
          </h2>

          <div className="flex justify-center mb-6">
            <Image
              src="/images/qr-gift.png"
              alt="QR Lokasi"
              width={120}
              height={120}
              className="rounded-lg border border-gray-300"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kp. Pacinaan RT/07 RW/08 Desa Sukamantri <br />
            Kec. Paseh, Kab. Bandung <br />
          </p>

          <a
            href="https://maps.app.goo.gl/ReLFajcSkXoKKkWw5?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base rounded-full bg-gray-900 text-white hover:bg-blue-900 transition"
          >
            <MapPin size={18} /> Lihat di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
