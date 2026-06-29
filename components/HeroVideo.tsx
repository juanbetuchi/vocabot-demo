"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const applyRate = () => {
      video.playbackRate = window.innerWidth >= 1024 ? 0.6 : 1;
    };
    applyRate();
    window.addEventListener("resize", applyRate);
    return () => window.removeEventListener("resize", applyRate);
  }, []);

  return (
    <video
      ref={videoRef}
      src="/assets/hero-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}
