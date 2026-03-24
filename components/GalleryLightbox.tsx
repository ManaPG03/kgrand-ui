'use client';

import { useState } from 'react';
import Image from 'next/image';

type GalleryImage = { src: string; alt: string; label?: string };

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  function prev() {
    setOpen((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }
  function next() {
    setOpen((i) => (i !== null ? (i + 1) % images.length : null));
  }

  return (
    <>
      {/* Desktop: bento grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[400px]">
        <button
          onClick={() => setOpen(0)}
          className="col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-zoom-in"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
          {images[0].label && (
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {images[0].label}
            </span>
          )}
        </button>
        {images.slice(1, 5).map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpen(i + 1)}
            className="relative rounded-xl overflow-hidden cursor-zoom-in"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
            {img.label && (
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {img.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpen(i)}
            className="relative flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden snap-start cursor-zoom-in"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
            {img.label && (
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {img.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setOpen(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-2xl">close</span>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {open + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
