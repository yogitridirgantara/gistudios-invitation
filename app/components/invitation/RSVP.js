"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import { supabase } from "/lib/supabaseClient";
import "aos/dist/aos.css";

export default function RSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("hadir");
  const [comments, setComments] = useState([]);
  const [stats, setStats] = useState({ hadir: 0, tidak: 0 });

  // Ambil data dari Supabase
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("rsvp_comments")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(30);

    if (!error && data) {
      setComments(data);

      const hadirCount = data.filter((c) => c.status === "hadir").length;
      const tidakCount = data.filter((c) => c.status === "tidak").length;
      setStats({ hadir: hadirCount, tidak: tidakCount });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    const { error } = await supabase.from("rsvp_comments").insert([
      {
        name,
        message,
        status,
      },
    ]);

    if (!error) {
      setName("");
      setMessage("");
      setStatus("hadir");
      fetchComments();
    }
  };

  return (
    <section
      id="rsvp"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/90 to-gray-900/95 opacity-95" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-serif italic text-white mb-6 tracking-wide"
          data-aos="fade-down"
        >
          RSVP
        </h2>
        <p className="text-gray-200 mb-10 max-w-xl mx-auto font-serif" data-aos="fade-up">
          Silakan konfirmasi kehadiran dan tinggalkan pesan doa atau ucapan
          untuk kami
        </p>

        {/* Statistik Kehadiran */}
        <div
          className="flex justify-center gap-6 mb-8 text-gray-100 font-medium"
          data-aos="zoom-in"
        >
          <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl shadow-md border border-white/20">
            {" "}
            <span className="text-green-400 font-bold">{stats.hadir}</span>
            <br />
            Hadir
          </div>
          <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl shadow-md border border-white/20">
            <span className="text-red-400 font-bold">{stats.tidak}</span> <br />
            Tidak Hadir
          </div>
        </div>

        {/* Form RSVP */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl mb-8"
          data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 mb-3 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            placeholder="Ucapan & Doa..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 mb-3 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows="3"
          />

          {/* Pilihan Kehadiran */}
          <div className="flex gap-4 mb-6 justify-center">
            <label
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all
      ${
        status === "hadir"
          ? "bg-green-50 border-green-400 text-green-700 shadow-md"
          : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
      }`}
            >
              <input
                type="radio"
                value="hadir"
                checked={status === "hadir"}
                onChange={(e) => setStatus(e.target.value)}
                className="hidden"
              />
              <span className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
                {status === "hadir" && (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </span>
              Hadir
            </label>

            <label
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all
      ${
        status === "tidak"
          ? "bg-red-50 border-red-400 text-red-700 shadow-md"
          : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
      }`}
            >
              <input
                type="radio"
                value="tidak"
                checked={status === "tidak"}
                onChange={(e) => setStatus(e.target.value)}
                className="hidden"
              />
              <span className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
                {status === "tidak" && (
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </span>
              Tidak Hadir
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-5 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-semibold rounded-lg shadow-md hover:from-gray-400 hover:to-gray-300 transition"
          >
            Kirim
          </button>
        </form>

        {/* Daftar Komentar */}
        <div
          className="space-y-3 max-h-[150px] overflow-y-auto pr-2
             scrollbar-thin scrollbar-thumb-pink-400/70 scrollbar-track-transparent"
          data-aos="fade-up"
        >
          {comments.length === 0 ? (
            <p className="text-gray-400 italic text-sm">Belum ada ucapan.</p>
          ) : (
            comments.map((c, i) => (
              <div
                key={c.id}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="bg-white/15 backdrop-blur-lg border border-white/20 
                   p-3 rounded-xl shadow-md hover:shadow-gray-200/30 
                   transition duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-1">
                  <p className="font-bold text-sm text-white">{c.name}</p>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full tracking-wide
              ${
                c.status === "hadir"
                  ? "bg-green-500/20 text-green-300 border border-green-400/40"
                  : "bg-red-500/20 text-red-300 border border-red-400/40"
              }`}
                  >
                    {c.status === "hadir" ? "Hadir" : "Tidak Hadir"}
                  </span>
                </div>

                {/* Pesan */}
                <p className="text-gray-100/90 text-sm text-left">
                  {c.message}
                </p>

                {/* Waktu */}
                <p className="text-[10px] text-gray-400 mt-1 text-left">
                  {new Date(c.created_at).toLocaleString("id-ID")}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
