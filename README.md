# VocaBot — Instituto San José

Chatbot de orientación vocacional basado en menús, desarrollado por estudiantes de 5° Año del Instituto San José (Laboulaye) en el marco de "Formación para la Vida y el Trabajo" y "Metodología de la Investigación en Ciencias Sociales".

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Lottie (lottie-react) para la animación del bot flotante

## Estructura

- `app/page.tsx` — sitio del instituto (landing) con el bot flotante.
- `app/chat/page.tsx` — vista completa del chat.
- `components/ChatWidget.tsx` — lógica y UI del chat (menús, breadcrumb, imágenes, "escribiendo...").
- `components/FloatingBot.tsx` — lanzador flotante con animación Lottie.
- `lib/chatTree.ts` — contenido y árbol de navegación del chatbot.
- `public/assets/` — imágenes, ilustraciones SVG y animación Lottie.

## Desarrollo

```bash
npm install
npm run dev
```

## Próximos pasos

Integrar base de datos (MongoDB) para guardar sugerencias de usuarios y contenido editable.
