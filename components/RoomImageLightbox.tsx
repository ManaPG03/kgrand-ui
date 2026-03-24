'use client';

import { useState } from 'react';
import Image from 'next/image';

type Room = {
  name: string;
  badge?: string;
  size: string;
  price: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export default function RoomImageLightbox({
  rooms,
  bookingUrl,
}: {
  rooms: Room[];
  bookingUrl: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room, idx) => (
          <div
            key={room.name}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all group"
          >
            <button
              onClick={() => setOpen(idx)}
              className="relative aspect-[16/9] w-full cursor-zoom-in"
            >
              <Image
                src={room.image}
                alt={room.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {room.badge && (
                <span className="absolute top-3 left-3 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {room.badge}
                </span>
              )}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
                View Photo
              </div>
            </button>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-primary">{room.name}</h3>
                <span className="text-lg font-black text-primary flex-shrink-0">{room.price}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">straighten</span>
                  {room.size}
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-1.5 mb-4">
                {room.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-1.5 text-sm text-on-surface-variant"
                  >
                    <span
                      className="material-symbols-outlined text-secondary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-gradient text-white w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Book This Room
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-2xl">close</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i !== null ? (i - 1 + rooms.length) % rooms.length : null));
            }}
            className="absolute left-3 md:left-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
          </button>

          <div
            className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={rooms[open].image}
              alt={rooms[open].imageAlt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i !== null ? (i + 1) % rooms.length : null));
            }}
            className="absolute right-3 md:right-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
            {rooms[open].name} — {open + 1} / {rooms.length}
          </div>
        </div>
      )}
    </>
  );
}
