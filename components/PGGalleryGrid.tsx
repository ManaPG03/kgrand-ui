'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type GalleryImage = { src: string; alt: string; label?: string };

export default function PGGalleryGrid({
  images,
  pgName,
}: {
  images: GalleryImage[];
  pgName: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const prev = () =>
    setOpen((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setOpen((i) => (i !== null ? (i + 1) % images.length : null));

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null);
      else if (e.key === 'ArrowLeft')
        setOpen((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
      else if (e.key === 'ArrowRight')
        setOpen((i) => (i !== null ? (i + 1) % images.length : null));
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => setOpen(i)}
            className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-zoom-in shadow-ambient hover:shadow-ambient-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            {img.label && (
              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full">
                {img.label}
              </span>
            )}
            <span className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>
                zoom_in
              </span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${pgName} gallery viewer`}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-white text-2xl">close</span>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
          </button>

          <div
            className="relative w-[92vw] h-[72vh] md:w-[80vw] md:h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              fill
              className="object-contain"
              sizes="92vw"
              priority
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm font-medium flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="font-semibold text-white">{pgName}</span>
            <span className="opacity-50">·</span>
            <span>{open + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
