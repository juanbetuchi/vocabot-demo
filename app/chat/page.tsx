import Link from "next/link";
import ChatWidget from "@/components/ChatWidget";

export default function ChatPage() {
  return (
    <div className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-950 to-blue-900 p-0 sm:p-5">
      <Link
        href="/"
        className="absolute left-2.5 top-2.5 z-10 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20 sm:left-4 sm:top-4"
      >
        ← Volver al sitio
      </Link>
      <div className="h-screen w-full sm:h-[720px] sm:max-w-[420px] sm:rounded-[20px] sm:shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:overflow-hidden">
        <ChatWidget variant="full" />
      </div>
    </div>
  );
}
