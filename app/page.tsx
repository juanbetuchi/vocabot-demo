import Image from "next/image";
import WelcomeVideoModal from "@/components/WelcomeVideoModal";
import FloatingBot from "@/components/FloatingBot";
import InfoCards from "@/components/InfoCards";

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
        <video
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <section className="mb-10 text-center">
          <h1 className="mb-3 text-2xl font-bold text-indigo-950 sm:text-4xl">
            Construí tu proyecto de vida
          </h1>
          <p className="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
            ¡Hola! Soy VocaBot 🤖 Un chatbot de orientación creado por estudiantes de 5° Año del
            Instituto San José para acompañarte a pensar tu futuro académico, laboral y personal.
            No tomo decisiones por vos, te ayudo a explorar opciones, conocer posibilidades y
            construir tu propio camino.
          </p>
        </section>

        <section className="mb-16 flex justify-center">
          <FloatingBot variant="inline" />
        </section>

        <section className="overflow-x-auto rounded-3xl bg-gradient-to-br from-indigo-950 via-violet-900 to-blue-900 px-6 py-14 sm:py-20">
          <InfoCards cards={cards} />
        </section>
      </main>

      <footer className="flex flex-col items-center gap-3 border-t border-slate-200 bg-white px-6 py-7 text-center text-xs text-slate-500">
        <Image
          src="/assets/images-removebg-preview.png"
          alt="Instituto Superior de Formación Docente San José Laboulaye"
          width={444}
          height={450}
          className="h-auto w-16"
        />
        VocaBot · Proyecto de orientación vocacional — 5° Año, Instituto San José, Laboulaye · 2026
      </footer>
    </div>
  );
}
