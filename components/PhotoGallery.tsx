"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function PhotoGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-rotate every 5 seconds; pause when user interacts
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  if (images.length === 0) {
    return (
      <div className="text-center py-24 text-base-content/40">
        <p className="text-5xl mb-4">📷</p>
        <p className="text-xl font-semibold">No photos yet.</p>
        <p className="text-sm mt-2">
          Drop images into the <code className="bg-base-300 px-1 rounded">public/gallery/</code> folder to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* ── Large main photo ── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-base-300 shadow-lg"
        style={{ aspectRatio: "16/9" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Image
          key={images[current]}
          src={`/gallery/${images[current]}`}
          alt={`Gallery photo ${current + 1} of ${images.length}`}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover transition-opacity duration-500"
          priority={current === 0}
        />

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => { prev(); setPaused(true); }}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/75 transition-colors focus:outline-none"
            >
              ‹
            </button>
            <button
              onClick={() => { next(); setPaused(true); }}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl hover:bg-black/75 transition-colors focus:outline-none"
            >
              ›
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {current + 1} / {images.length}
        </div>

        {/* Auto-rotate progress bar */}
        {!paused && images.length > 1 && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              key={current}
              className="h-full bg-primary"
              style={{ animation: "progress 5s linear forwards" }}
            />
          </div>
        )}
      </div>

      {/* ── Thumbnail strip ── */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scroll-smooth">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => { setCurrent(i); setPaused(true); }}
              aria-label={`View photo ${i + 1}`}
              className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ${
                i === current
                  ? "ring-2 ring-primary ring-offset-2 opacity-100 scale-105"
                  : "opacity-50 hover:opacity-80 hover:scale-105"
              }`}
              style={{ width: 96, height: 64 }}
            >
              <Image
                src={`/gallery/${img}`}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
    </div>
  );
}
