"use client";

import { useState } from "react";
import Image from "next/image";

export type InfoCard = {
  icon: string;
  title: string;
  tagline?: string;
  text: string;
  accent: string;
};

export default function InfoCards({ cards }: { cards: InfoCard[] }) {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: flip cards 3D al tocar */}
      <div className="grid grid-cols-1 gap-5 sm:hidden">
        {cards.map((c, i) => {
          const isFlipped = flipped === i;
          return (
            <div
              key={c.title}
              onClick={() => setFlipped(isFlipped ? null : i)}
              className="h-44 w-full cursor-pointer [perspective:1000px]"
            >
              <div
                className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} p-5 text-center shadow-[0_8px_24px_rgba(30,27,75,0.25)] [backface-visibility:hidden]`}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-2xl">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{c.title}</h3>
                  <span className="mt-2 text-[11px] font-medium text-white/70">Tocá para ver más</span>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-indigo-950 p-5 text-center shadow-[0_8px_24px_rgba(30,27,75,0.25)] [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white p-1.5 shadow-md">
                    <Image
                      src="/assets/images-removebg-preview.png"
                      alt="Instituto San José"
                      width={444}
                      height={450}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-white">
                    {c.tagline || c.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: efecto glass en abanico */}
      <div className="hidden sm:block">
        <div className="group flex min-w-max items-center justify-center">
          {cards.map((c, i) => {
            const baseRotate = ["-rotate-[22deg]", "rotate-0", "rotate-[22deg]"][i];
            const baseMargin = i === 1 ? "-mx-4" : "-mx-16";
            const baseZ = i === 1 ? "z-10" : "z-0";
            return (
              <div
                key={c.title}
                className={`relative flex h-72 w-56 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-b from-white/20 to-white/0 p-5 text-center shadow-[0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 ease-out hover:!z-20 hover:!mx-3 hover:!rotate-0 hover:!scale-125 hover:bg-white/20 hover:shadow-[0_30px_60px_rgba(124,58,237,0.5)] ${baseRotate} ${baseMargin} ${baseZ} group-hover:mx-3 group-hover:rotate-0 group-hover:scale-105`}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-2xl shadow-lg`}
                >
                  {c.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{c.title}</h3>
                <p className="text-xs leading-relaxed text-white/70">{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
