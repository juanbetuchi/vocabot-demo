"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CHAT_TREE, CRUMB_ICONS, type ChatOption } from "@/lib/chatTree";

type Message =
  | { kind: "bot"; nodeId: string }
  | { kind: "user"; label: string };

type ChatWidgetProps = {
  variant?: "widget" | "full";
  onClose?: () => void;
};

export default function ChatWidget({ variant = "widget", onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([{ kind: "bot", nodeId: "start" }]);
  const [options, setOptions] = useState<ChatOption[]>(CHAT_TREE.start.options);
  const [crumb, setCrumb] = useState<string[]>(CHAT_TREE.start.crumb);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function goTo(nodeId: string, chosenLabel?: string) {
    const node = CHAT_TREE[nodeId];
    if (!node) return;

    if (chosenLabel) {
      setMessages((prev) => [...prev, { kind: "user", label: chosenLabel }]);
    }
    setOptions([]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { kind: "bot", nodeId }]);
      setOptions(node.options);
      setCrumb(node.crumb);
    }, 550);
  }

  const isFull = variant === "full";

  return (
    <div
      className={
        isFull
          ? "flex h-screen w-full flex-col bg-white"
          : "flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      }
    >
      <div className="relative flex items-center gap-3 bg-gradient-to-br from-violet-700 to-blue-900 p-4 text-white">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
          <Image src="/assets/vocabot-logo.png" alt="VocaBot" width={40} height={40} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <strong className="text-base leading-tight">VocaBot</strong>
          <span className="text-[11px] opacity-85">Orientación vocacional{isFull ? " · Instituto San José" : ""}</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xs hover:bg-white/30"
            aria-label="Cerrar"
          >
            ✕
          </button>
        )}
      </div>

      {crumb.length > 1 && (
        <div className="flex items-center overflow-x-auto whitespace-nowrap border-b border-slate-200 bg-slate-50 px-4 py-2">
          {crumb.map((c, i) => {
            const icon = CRUMB_ICONS[c] || "•";
            const isCurrent = i === crumb.length - 1;
            return (
              <span key={c + i} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-[11px] text-violet-700/40">›</span>}
                <span
                  title={c}
                  className={isCurrent ? "text-base opacity-100" : "text-sm opacity-45 grayscale"}
                >
                  {icon}
                </span>
              </span>
            );
          })}
        </div>
      )}

      <div ref={bodyRef} className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-slate-50 p-4">
        {messages.map((m, i) =>
          m.kind === "user" ? (
            <div
              key={i}
              className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-violet-700 px-3.5 py-2.5 text-sm text-white"
            >
              {m.label}
            </div>
          ) : (
            <BotBubble key={i} nodeId={m.nodeId} />
          )
        )}
        {typing && (
          <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-4 py-3">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300"
                style={{ animationDelay: `${d * 0.15}s` }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-slate-200 bg-white p-3">
        {options.map((opt) => {
          const isNav = opt.label.startsWith("⬅") || opt.label.startsWith("🏠");
          return (
            <button
              key={opt.label}
              onClick={() => goTo(opt.goto, opt.label)}
              className={
                isNav
                  ? "rounded-full bg-blue-50 px-3.5 py-2 text-[13px] font-semibold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-900 hover:text-white"
                  : "rounded-full bg-violet-50 px-3.5 py-2 text-[13px] font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:bg-violet-700 hover:text-white"
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BotBubble({ nodeId }: { nodeId: string }) {
  const node = CHAT_TREE[nodeId];
  if (!node) return null;
  return (
    <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line text-slate-800">
      {node.message}
      {node.image && (
        <Image
          src={`/assets/${node.image}`}
          alt={node.imageCaption || ""}
          width={280}
          height={160}
          className="mt-1.5 block w-full rounded-lg"
        />
      )}
      {node.imageCaption && (
        <span className="mt-1 block text-[11px] italic text-slate-500">{node.imageCaption}</span>
      )}
    </div>
  );
}
