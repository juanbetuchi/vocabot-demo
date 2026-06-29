"use client";

import { useState } from "react";

export default function WelcomeVideoModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/85 p-4"
    >
      <div className="relative inline-block max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg text-white hover:bg-white/25"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <video
          src="/assets/welcome-video.mp4"
          controls
          autoPlay
          className="block max-h-[85vh] max-w-[90vw] w-auto h-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
