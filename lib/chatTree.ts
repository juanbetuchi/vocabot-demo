// Estructura de contenidos de VocaBot, basada en el documento
// "ISFD San José - VocaBot - 2026"

export type ChatOption = {
  label: string;
  goto: string;
};

export type ChatNode = {
  message: string;
  crumb: string[];
  options: ChatOption[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string;
  link?: { url: string; label: string };
};

export const CRUMB_ICONS: Record<string, string> = {
  "Inicio": "🏠",
  "Sobre VocaBot": "🤖",
  "Creadores": "👥",
  "Objetivos": "🎯",
  "Cómo se usa": "🛠️",
  "Tu aporte": "💬",
  "Conocerse": "🧠",
  "¿Por qué?": "❓",
  "Proyectar-te": "🧭",
  "Informarse": "📚",
  "Oferta académica": "🎓",
  "Universidades": "🏛️",
  "Futuro laboral": "💼",
  "Decidirse": "⚖️",
  "Investigación": "🔬",
  "Problema": "❗",
  "Metodología": "📊",
};

export const CHAT_TREE: Record<string, ChatNode> = {
  start: {
    message:
      "¡Hola! Soy VocaBot 👋\nUn chatbot de orientación basado en menús, creado por estudiantes del Instituto San José para ayudarte a pensar tu futuro académico, laboral y personal.\n\n¿Sobre qué te gustaría hablar?",
    crumb: ["Inicio"],
    options: [
      { label: "1. Sobre VocaBot", goto: "sobre_vocabot" },
      { label: "2. Conocerse", goto: "conocerse" },
      { label: "3. Informarse", goto: "informarse" },
      { label: "4. Decidirse", goto: "decidirse" },
      { label: "5. Sobre nuestra investigación", goto: "investigacion" },
    ],
  },

  // 1. SOBRE VOCABOT
  sobre_vocabot: {
    message: "Sección: SOBRE VOCABOT\n\n¿Qué querés saber?",
    crumb: ["Inicio", "Sobre VocaBot"],
    options: [
      { label: "Creadores del chatbot", goto: "sv_creadores" },
      { label: "Objetivos del sistema", goto: "sv_objetivos" },
      { label: "¿Cómo se usa?", goto: "sv_como_se_usa" },
      { label: "Tu aporte", goto: "sv_aporte" },
      { label: "⬅ Volver al menú principal", goto: "start" },
    ],
  },
  sv_creadores: {
    message:
      "VocaBot fue desarrollado durante el año 2026 por estudiantes de 5° Año del Instituto San José, en el marco de los espacios curriculares 'Formación para la Vida y el Trabajo' y 'Metodología de la Investigación en Ciencias Sociales', con el acompañamiento de sus docentes.\n\nEl chatbot busca convertirse en una herramienta de orientación para acompañar la construcción de decisiones sobre el futuro académico, laboral y personal.",
    crumb: ["Inicio", "Sobre VocaBot", "Creadores"],
    image: "img-creadores-real.png",
    imageWidth: 1024,
    imageHeight: 1536,
    imageCaption: "Foto grupal del curso — Vocabot, Creadores",
    options: [
      { label: "⬅ Volver", goto: "sobre_vocabot" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  sv_objetivos: {
    message:
      "VocaBot fue creado para acompañar a los estudiantes del último año de la escuela secundaria en la construcción de su proyecto de vida.\n\nSus principales objetivos son:\n• Brindar información clara y accesible sobre carreras, profesiones y oficios.\n• Acercar oportunidades educativas, laborales y de formación.\n• Favorecer la reflexión sobre intereses, habilidades y expectativas personales.\n• Orientar la búsqueda de información confiable para la toma de decisiones.\n• Promover el uso responsable y crítico de la inteligencia artificial como herramienta de aprendizaje y orientación.\n\nVocaBot no toma decisiones por vos, te ayuda a explorar opciones, conocer posibilidades y construir tu propio camino.",
    crumb: ["Inicio", "Sobre VocaBot", "Objetivos"],
    options: [
      { label: "⬅ Volver", goto: "sobre_vocabot" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  sv_como_se_usa: {
    message:
      "VocaBot funciona mediante un sistema de inteligencia artificial guiada.\n\nEsto significa que podrás recorrer distintos temas a través de botones y menús especialmente diseñados para ayudarte a encontrar información de manera simple y organizada.\n\nSolo tenés que seleccionar la opción que más se relacione con lo que querés consultar:\n• Conocerme mejor\n• Informarme sobre la oferta académica de la ciudad y la provincia.\n• Saber sobre oportunidades laborales.\n• Obtener información sobre cómo decidirme y qué tener en cuenta.\n• Saber más sobre nuestra investigación.\n\nA medida que avances, VocaBot te ofrecerá información, recursos y nuevas opciones para profundizar en aquello que te interese.",
    crumb: ["Inicio", "Sobre VocaBot", "Cómo se usa"],
    options: [
      { label: "⬅ Volver", goto: "sobre_vocabot" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  sv_aporte: {
    message:
      "VocaBot es un proyecto en construcción permanente.\nTu opinión es muy importante para seguir mejorándolo.\n\n¿Qué te gustaría que incorporáramos?\n¿Qué información te resultó útil?\n¿Qué función te gustaría encontrar en futuras versiones?\n\nDejanos tus comentarios, sugerencias o ideas para ayudarnos a construir una herramienta cada vez más útil para los estudiantes.\n\nTe invitamos a responder un breve formulario:\n• ¿Qué fue lo que más te gustó de VocaBot?\n• ¿Qué información te gustaría que agreguemos?\n• ¿Tenés alguna sugerencia para mejorar la experiencia?",
    crumb: ["Inicio", "Sobre VocaBot", "Tu aporte"],
    link: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLScUGKCzpq8q5kfQ5CU1KhIX-TOZ5wPp1suScma_3e5r6pz_bQ/viewform",
      label: "📝 Dejar mi sugerencia",
    },
    options: [
      { label: "⬅ Volver", goto: "sobre_vocabot" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },

  // 2. CONOCERSE
  conocerse: {
    message: "Sección: CONOCERSE",
    crumb: ["Inicio", "Conocerse"],
    options: [
      { label: "¿Por qué conocerse?", goto: "co_por_que" },
      { label: "Una herramienta: Proyectar-te", goto: "co_herramienta" },
      { label: "⬅ Volver al menú principal", goto: "start" },
    ],
  },
  co_por_que: {
    message:
      "Elegir no es algo que ocurre de una vez y para siempre, porque denota movimiento constante. Desde niños/as vamos construyendo nuestra historia y esta nos va marcando.\n\nEl conocimiento de uno mismo tiene gran valor para hacer una buena elección. Es importante detenerse en: las experiencias de vida, la conciencia de la realidad y el reconocimiento de los recursos internos.\n\nConocerse implica aprender a mirarse. Así, tu elección será un verdadero ejercicio de libertad.",
    crumb: ["Inicio", "Conocerse", "¿Por qué?"],
    options: [
      { label: "⬅ Volver", goto: "conocerse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  co_herramienta: {
    message:
      "¿Estás pensando qué hacer después de la secundaria?\n\n'Proyectar-te' es una plataforma del Ministerio de Educación de Córdoba con actividades, recursos y herramientas para que descubras tus intereses, conozcas tus fortalezas y explores distintas opciones de estudio y trabajo.\n\nRecordá: para elegir, primero hay que conocerse y luego informarse. ¡Animate a explorar Proyectar-te!",
    crumb: ["Inicio", "Conocerse", "Proyectar-te"],
    options: [
      { label: "⬅ Volver", goto: "conocerse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },

  // 3. INFORMARSE
  informarse: {
    message: "Sección: INFORMARSE",
    crumb: ["Inicio", "Informarse"],
    options: [
      { label: "Oferta académica de la ciudad", goto: "in_oferta" },
      { label: "Universidades públicas en Córdoba", goto: "in_universidades" },
      { label: "Pensando en tu futuro laboral", goto: "in_laboral" },
      { label: "⬅ Volver al menú principal", goto: "start" },
    ],
  },
  in_oferta: {
    message:
      "Laboulaye se está constituyendo paulatinamente como uno de los polos educativos más importantes de la región.\n\nAquí podrás encontrar toda la información sobre carreras e instituciones disponibles en la ciudad.",
    crumb: ["Inicio", "Informarse", "Oferta académica"],
    image: "img-oferta.svg",
    imageCaption: "Oferta académica en Laboulaye",
    options: [
      { label: "⬅ Volver", goto: "informarse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  in_universidades: {
    message:
      "Universidades públicas en Córdoba:\n\n• Universidad Nacional de Córdoba (UNC)\n• Universidad Nacional de Río Cuarto (UNRC)\n• Universidad Nacional de Villa María (UNVM)\n• Instituto Universitario Aeronáutico (IUA)\n• Universidad Tecnológica Nacional (UTN)\n• Universidad Provincial de Córdoba (UPC)",
    crumb: ["Inicio", "Informarse", "Universidades"],
    image: "img-mapa.svg",
    imageCaption: "Mapa de Córdoba con ubicación de las universidades",
    options: [
      { label: "⬅ Volver", goto: "informarse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  in_laboral: {
    message:
      "¿Te preguntás de qué trabaja la gente en Laboulaye o dónde buscar tu primer empleo?\n\nEsta sección reúne recursos sobre el mundo del trabajo local y consejos para armar tu primer CV.",
    crumb: ["Inicio", "Informarse", "Futuro laboral"],
    image: "img-laboral.svg",
    imageCaption: "Mundo del trabajo en Laboulaye · Primer empleo + CV",
    options: [
      { label: "⬅ Volver", goto: "informarse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },

  // 4. DECIDIRSE
  decidirse: {
    message:
      "Sección: DECIDIRSE\n\n¿Qué supone decidir?\n\nLa vocación no concluye a partir de una elección, sino que continúa formándose día a día. Elegir implica renunciar a algo, pero esa renuncia no es total.\n\nLas decisiones que tomes no van a definir el resto de tu vida a modo de sentencia, sino que marcarán el inicio de un camino que luego podrá transformarse.\n\nSi ya exploraste, investigaste lo suficiente y reflexionaste críticamente... llegó el momento de tomar coraje y asumir nuevos desafíos.\n\n'No se juega la vida en una lección, aunque para elegir haya que jugarse' (Rascovan, 2010).",
    crumb: ["Inicio", "Decidirse"],
    options: [{ label: "⬅ Volver al menú principal", goto: "start" }],
  },

  // 5. SOBRE NUESTRA INVESTIGACIÓN
  investigacion: {
    message: "Sección: SOBRE NUESTRA INVESTIGACIÓN",
    crumb: ["Inicio", "Investigación"],
    options: [
      { label: "Problema de investigación", goto: "iv_problema" },
      { label: "Objetivos", goto: "iv_objetivos" },
      { label: "Metodología", goto: "iv_metodologia" },
      { label: "⬅ Volver al menú principal", goto: "start" },
    ],
  },
  iv_problema: {
    message:
      "¿Cómo influye el uso de la inteligencia artificial en los proyectos de vida de los/as estudiantes del último año de la escuela secundaria de la localidad, y cuáles son las motivaciones para su utilización?",
    crumb: ["Inicio", "Investigación", "Problema"],
    options: [
      { label: "⬅ Volver", goto: "investigacion" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  iv_objetivos: {
    message:
      "Objetivo general:\nAnalizar la relación entre el uso de la IA y los proyectos de vida de los/as jóvenes que cursan el último año de la escuela secundaria.\n\nObjetivos específicos:\n• Identificar los proyectos vocacionales de los/as jóvenes en Laboulaye.\n• Reconocer los factores que influyen en su elección.\n• Explorar las influencias de la IA al momento de decidir.\n• Comprender los motivos que impulsan el uso de aplicaciones de IA.",
    crumb: ["Inicio", "Investigación", "Objetivos"],
    options: [
      { label: "⬅ Volver", goto: "investigacion" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  iv_metodologia: {
    message:
      "Enfoque metodológico mixto, articulando procedimientos cuantitativos y cualitativos. El estudio se inscribe en el paradigma sociocrítico y asume características de la investigación-acción.\n\nLa recolección de datos se realizó mediante encuestas (Formularios de Google) y entrevistas en profundidad a profesionales de la ciudad.",
    crumb: ["Inicio", "Investigación", "Metodología"],
    options: [
      { label: "⬅ Volver", goto: "investigacion" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
};
