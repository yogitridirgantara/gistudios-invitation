"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-200 bg-gradient-to-b from-gray-950 via-blue-950 to-gray-950 min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 mt-7"
      >
        Kami sedang menyiapkan berbagai produk dan jasa kreatif terbaik untuk
        mendukung kebutuhan desain dan digitalisasi bisnismu.
      </motion.p>

      {/* Gambar Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-center mb-10"
      >
        <Image
          src="/images/gistudios.png" // ganti dengan gambar kamu di folder public
          alt="Coming Soon"
          width={200}
          height={80}
          className="rounded-2xl shadow-lg object-cover border border-blue-800"
        />
      </motion.div>

      {/* Info Produk & Jasa */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="bg-blue-950/60 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-md border border-blue-800"
      >
        <h2 className="text-2xl font-semibold text-blue-300 mb-3">
          Produk & Jasa Segera Hadir
        </h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Nantikan informasi lengkap mengenai layanan desain grafis, website,
          dan digital branding dari kami. Jika berminat atau ingin konsultasi
          lebih lanjut, silakan hubungi kami.
        </p>
        <a
          href="https://wa.me/6281572529701"
          target="_blank"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          Hubungi via WhatsApp
        </a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="text-gray-500 text-sm mt-16"
      >
        © {new Date().getFullYear()} Gistudios — Segera hadir dengan inovasi 💙
      </motion.footer>
    </div>
  );
}
