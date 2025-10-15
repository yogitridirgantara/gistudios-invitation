"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import { Disc } from "lucide-react"; // ikon disc/kaset

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  // expose method startMusic ke parent
  useImperativeHandle(ref, () => ({
    startMusic: () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    },
  }));

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center">
      {/* Audio file */}
      <audio ref={audioRef} loop>
        <source
          src="/music/Tiara Andini, Arsy Widianto - Lagu Pernikahan Kita (Official Lyric Video).mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Ikon kaset berputar */}
      <div className="p-3 bg-gray-800 text-white rounded-full shadow-lg">
        <Disc className="animate-spin-slow" size={28} />
      </div>
    </div>
  );
});

MusicPlayer.displayName = "MusicPlayer";
export default MusicPlayer;
