import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    icon: "📚",
    title: "Oferta académica",
    text: "Conocé las carreras e instituciones disponibles en Laboulaye y la provincia de Córdoba.",
  },
  {
    icon: "🧭",
    title: "Orientación vocacional",
    text: "Herramientas para reflexionar sobre tus intereses, habilidades y decisiones futuras.",
  },
  {
    icon: "💼",
    title: "Mundo del trabajo",
    text: "Información sobre oportunidades laborales y primer empleo en la ciudad.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      <header className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-br from-violet-700 to-blue-900 px-5 py-3.5 text-white sm:px-8">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Image
            src="/assets/bot-avatar.jpg"
            alt="Instituto San José"
            width={28}
            height={28}
            className="rounded-full"
          />
          Instituto San José
        </div>
        <nav className="flex w-full justify-between gap-0 text-sm opacity-90 sm:w-auto sm:gap-6">
          <a href="#" className="hover:opacity-100 hover:underline">Inicio</a>
          <a href="#" className="hover:opacity-100 hover:underline">Niveles</a>
          <a href="#" className="hover:opacity-100 hover:underline">Orientación</a>
          <a href="#" className="hover:opacity-100 hover:underline">Contacto</a>
        </nav>
      </header>

      <div className="relative w-full">
        <Image
          src="/assets/header-quien-elige.jpg"
          alt="¿Quién elige? Juventudes, inteligencia artificial y decisiones vocacionales en la era digital en Laboulaye"
          width={2000}
          height={707}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <section className="mb-12 text-center">
          <h1 className="mb-3 text-2xl font-bold text-indigo-950 sm:text-4xl">
            Construí tu proyecto de vida
          </h1>
          <p className="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
            El Instituto San José acompaña a sus estudiantes de 5° Año en el camino hacia la
            educación superior y el mundo laboral.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
              <h3 className="mb-1.5 text-base font-semibold text-violet-700">
                {c.icon} {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{c.text}</p>
            </div>
          ))}
        </section>

        <p className="mt-10 text-center">
          <Link href="/chat" className="font-semibold text-violet-700 hover:underline">
            Ver VocaBot en vista completa →
          </Link>
        </p>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-5 text-center text-xs text-slate-500">
        VocaBot · Proyecto de orientación vocacional — 5° Año, Instituto San José, Laboulaye · 2026
      </footer>
    </div>
  );
}
