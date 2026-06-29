import Image from "next/image";
import WelcomeVideoModal from "@/components/WelcomeVideoModal";
import ChatWidget from "@/components/ChatWidget";

const cards = [
  {
    icon: "📚",
    title: "Oferta académica",
    text: "Conocé las carreras e instituciones disponibles en Laboulaye y la provincia de Córdoba.",
    accent: "from-violet-600 to-fuchsia-500",
  },
  {
    icon: "🧭",
    title: "Orientación vocacional",
    text: "Herramientas para reflexionar sobre tus intereses, habilidades y decisiones futuras.",
    accent: "from-blue-600 to-cyan-400",
  },
  {
    icon: "💼",
    title: "Mundo del trabajo",
    text: "Información sobre oportunidades laborales y primer empleo en la ciudad.",
    accent: "from-amber-500 to-orange-400",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      <WelcomeVideoModal />

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/7] lg:aspect-[2000/707]">
        <Image
          src="/assets/header-quien-elige.jpg"
          alt="¿Quién elige? Juventudes, inteligencia artificial y decisiones vocacionales en la era digital en Laboulaye"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <section className="mb-10 text-center">
          <h1 className="mb-3 text-2xl font-bold text-indigo-950 sm:text-4xl">
            Construí tu proyecto de vida
          </h1>
          <p className="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
            El Instituto San José acompaña a sus estudiantes de 5° Año en el camino hacia la
            educación superior y el mundo laboral.
          </p>
        </section>

        <section className="mx-auto mb-16 h-[620px] w-full max-w-md overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(30,27,75,0.45)] ring-1 ring-violet-900/10 sm:h-[680px]">
          <ChatWidget />
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(30,27,75,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(30,27,75,0.25)]"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.accent} transition-all duration-300 group-hover:h-full group-hover:opacity-10`}
              />
              <div
                className={`relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                {c.icon}
              </div>
              <h3 className="relative mb-2 text-lg font-bold text-indigo-950">{c.title}</h3>
              <p className="relative text-sm leading-relaxed text-slate-600">{c.text}</p>
              <div className="relative mt-4 flex items-center gap-1 text-sm font-semibold text-violet-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Conocer más
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-5 text-center text-xs text-slate-500">
        VocaBot · Proyecto de orientación vocacional — 5° Año, Instituto San José, Laboulaye · 2026
      </footer>
    </div>
  );
}
