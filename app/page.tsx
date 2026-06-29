import Image from "next/image";
import WelcomeVideoModal from "@/components/WelcomeVideoModal";
import FloatingBot from "@/components/FloatingBot";

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

        <section className="mb-16 flex justify-center">
          <FloatingBot variant="inline" />
        </section>

        <section className="overflow-x-auto rounded-3xl bg-gradient-to-br from-indigo-950 via-violet-900 to-blue-900 px-6 py-20">
          <div className="group flex min-w-max items-center justify-center">
            {cards.map((c, i) => {
              const baseRotate = ["-rotate-[22deg]", "rotate-0", "rotate-[22deg]"][i];
              const baseMargin = i === 1 ? "-mx-4" : "-mx-16";
              const baseZ = i === 1 ? "z-10" : "z-0";
              return (
                <div
                  key={c.title}
                  className={`relative flex h-64 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-b from-white/20 to-white/0 p-5 text-center shadow-[0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 ease-out hover:!z-20 hover:!mx-3 hover:!rotate-0 hover:!scale-125 hover:bg-white/20 hover:shadow-[0_30px_60px_rgba(124,58,237,0.5)] sm:h-72 sm:w-56 ${baseRotate} ${baseMargin} ${baseZ} group-hover:mx-3 group-hover:rotate-0 group-hover:scale-105`}
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
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-5 text-center text-xs text-slate-500">
        VocaBot · Proyecto de orientación vocacional — 5° Año, Instituto San José, Laboulaye · 2026
      </footer>
    </div>
  );
}
