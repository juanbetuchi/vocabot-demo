"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ChatWidget from "./ChatWidget";

export default function FloatingBot() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function handleOpen() {
    setOpen(true);
    setShowTooltip(false);
  }

  if (pathname?.startsWith("/chat")) return null;

  return (
    <>
      {showTooltip && !open && (
        <button
          onClick={handleOpen}
          className="fixed bottom-24 right-4 z-[998] max-w-[220px] animate-[botTooltipNudge_2s_ease-in-out_1] rounded-xl bg-white px-3.5 py-2.5 text-left text-[13px] font-semibold text-indigo-950 shadow-lg sm:right-6"
        >
          ¡Hola! ¿Te ayudo a elegir tu futuro? 👋
        </button>
      )}

      {!open && (
        <div
          onClick={handleOpen}
          className="fixed bottom-4 right-4 z-[999] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[0_8px_24px_rgba(30,27,75,0.45)] transition-transform animate-[botFloat_2.6s_ease-in-out_infinite] hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6 sm:h-[72px] sm:w-[72px]"
        >
          <span className="absolute -inset-1.5 rounded-full border-2 border-violet-700 opacity-60 animate-[botPulse_2.2s_ease-out_infinite]" />
          <Image
            src="/assets/vocabot-logo.png"
            alt="VocaBot"
            width={72}
            height={72}
            className="h-full w-full rounded-full object-cover"
            priority
          />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-rose-600 text-[11px] font-bold text-white animate-[botBadgePop_0.4s_ease-out_1s_both]">
            1
          </span>
        </div>
      )}

      {open && (
        <div className="fixed bottom-0 right-0 z-[1000] h-full w-full animate-[botWidgetPop_0.28s_ease-out] sm:bottom-6 sm:right-6 sm:h-[540px] sm:w-[360px]">
          <ChatWidget onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
