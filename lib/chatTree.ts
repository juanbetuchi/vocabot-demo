// Estructura de contenidos de VocaBot, basada en el documento
// "ISFD San José - VocaBot - 2026"

export type ChatOption = {
  label: string;
  goto: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type ChatImage = {
  src: string;
  width: number;
  height: number;
  caption?: string;
};

export type ChatNode = {
  message: string;
  crumb: string[];
  options: ChatOption[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string;
  images?: ChatImage[];
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
  "¿Qué supone?": "🤔",
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
      {
        label: "1. Sobre VocaBot",
        goto: "sobre_vocabot",
        image: "btn-sobre-vocabot.png",
        imageWidth: 267,
        imageHeight: 113,
      },
      {
        label: "2. Conocerse",
        goto: "conocerse",
        image: "btn-conocerse.png",
        imageWidth: 259,
        imageHeight: 113,
      },
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
      "Seguramente, te gustaría tomar una decisión rápida que no demande demasiado tiempo para pensar e investigar y que no te enfrente a dudas o a instancias de pura incertidumbre. Sería más fácil dejarse llevar por la fantasía de un test que resolviera tu vida diciéndote lo que tenés que hacer y las razones por las que debés seguir esa opción. Afortunadamente no hay nada ni nadie que pueda resolver esto por vos. Aquí está el verdadero desafío: abandonar la comodidad en el que otros toman decisiones por vos para pasar a una posición más adulta en donde seas quien resuelva las situaciones que se te presentan. Para ello necesitarás de tiempo para reflexionar sobre quién sos y qué querés hacer con tu vida.\n\nElegir no es algo que ocurre de una vez y para siempre porque denota constante movimiento. Tampoco es algo que comienza en el último año del secundario ya que desde niños/as vamos construyendo nuestra historia y esta, a su vez, nos va marcando. Es así como la vocación nos presenta fases, continuidad, dinamismo y transformación.\n\nEl conocimiento de uno mismo tiene gran valor para hacer una buena elección. Aunque este saber es a veces limitado hay algunos aspectos sobre lo que es importante detenerse: las experiencias de vida, la conciencia de la realidad y el reconocimiento de los recursos internos.\n\nAsumir una actitud protagónica en la construcción de un proyecto de vida supone la gran tarea de identificar cuáles son tus valores, pasiones, habilidades, deseos e intereses antes de enfrentarte a una elección importante. Se trata de observarte, entenderte y reconocerte a vos mismo.\n\nConocerse implica aprender a mirarse. De este modo tu elección será un verdadero ejercicio de libertad.",
    crumb: ["Inicio", "Conocerse", "¿Por qué?"],
    options: [
      { label: "⬅ Volver", goto: "conocerse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  co_herramienta: {
    message:
      "¿Estás pensando qué hacer después de la secundaria? Proyectar-te puede ayudarte.\n\nEs una plataforma del Ministerio de Educación de Córdoba con actividades, recursos y herramientas para que descubras tus intereses, conozcas tus fortalezas y explores distintas opciones de estudio y trabajo.\n\nRecordá: para elegir, primero hay que conocerse y luego informarse.\n\n¡Animate a explorar Proyectar-te y empezá a diseñar tu futuro!",
    crumb: ["Inicio", "Conocerse", "Proyectar-te"],
    link: {
      url: "https://proyectarte.cba.gov.ar/",
      label: "🧭 Ir a Proyectar-te",
    },
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
      "Laboulaye se está constituyendo paulatinamente como uno de los polos educativos más importantes de la región.\n\nTe dejamos aquí toda la info sobre carreras e instituciones para que puedas conocer la oferta académica que te ofrece la ciudad.\n\n(Tocá la imagen para verla más grande)",
    crumb: ["Inicio", "Informarse", "Oferta académica"],
    image: "img-oferta-real.png",
    imageWidth: 864,
    imageHeight: 1821,
    imageCaption: "Oferta académica — Nivel superior, universitario y no universitario en Laboulaye",
    options: [
      { label: "⬅ Volver", goto: "informarse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  in_universidades: {
    message:
      "Universidades públicas en Córdoba:\n\n• Universidad Nacional de Córdoba (UNC) (Córdoba)\n• Universidad Nacional de Río Cuarto (UNRC) (Córdoba)\n• Universidad Nacional de Villa María (UNVM)\n• Instituto Universitario Aeronáutico (IUA) (Córdoba)\n• Universidad Tecnológica Nacional (UTN)\n• Universidad Provincial de Córdoba (UPC)",
    crumb: ["Inicio", "Informarse", "Universidades"],
    image: "img-universidades-real.png",
    imageWidth: 1024,
    imageHeight: 1536,
    imageCaption: "Universidades nacionales en Córdoba — UNC, UTN, IUA, UNRC, UPC y UNVM",
    link: {
      url: "https://www.upc.edu.ar/",
      label: "🏛️ Ir al sitio de la UPC",
    },
    options: [
      { label: "⬅ Volver", goto: "informarse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  in_laboral: {
    message:
      "¿Te preguntás de qué trabaja la gente en Laboulaye o dónde buscar tu primer empleo? Estos recursos pueden ayudarte a conocer mejor las oportunidades que ofrece la ciudad.\n\n(Tocá cada imagen para verla más grande)",
    crumb: ["Inicio", "Informarse", "Futuro laboral"],
    images: [
      {
        src: "img-laboral-1.jpg",
        width: 2000,
        height: 1552,
        caption: "¿Cómo es el mundo del trabajo en Laboulaye?",
      },
      {
        src: "img-laboral-2.jpg",
        width: 2000,
        height: 1448,
        caption: "Buscás tu primer empleo — Bolsa de Trabajo municipal",
      },
    ],
    options: [
      { label: "⬅ Volver", goto: "informarse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },

  // 4. DECIDIRSE
  decidirse: {
    message: "Sección: DECIDIRSE\n\n¿Qué querés saber?",
    crumb: ["Inicio", "Decidirse"],
    options: [
      { label: "¿Qué supone?", goto: "de_que_supone" },
      { label: "⬅ Volver al menú principal", goto: "start" },
    ],
  },
  de_que_supone: {
    message:
      "La vocación no concluye a partir de una elección, sino que continúa formándose día a día. Se trata de un proceso abierto a infinitas y nuevas posibilidades y no enmarcado en un final que tiene algo siempre imposible de asir.\n\nElegir implica renunciar a algo, en donde dicha renuncia no es total. Puede significar postergar intereses porque no es posible hacerlo todo a la vez. El asunto tiene que ver con construir un proyecto de vida en donde vas a seguir eligiendo y renunciando.\n\nTienes que tener presente que las decisiones que tomes no van a definir el resto de tu vida a modo de sentencia, sino que van a marcar el inicio de un camino que luego podrá transformarse, conectarse con otros, desviarse por algún tiempo o regresar al ya transitado desde otro lugar y con otras experiencias vividas.\n\nTendrás que asumir la responsabilidad de tus propios deseos eligiendo con compromiso, pero sabiendo que puedes equivocarte y cambiar el rumbo sin sentir que el futuro se arruina por ello.\n\nSi ya exploraste, investigaste lo suficiente y reflexionaste críticamente… llegó el momento de tomar coraje y asumir nuevos desafíos comprendiendo que 'No se juega la vida en una lección, aunque para elegir haya que jugarse' (Rascovan; 2010)",
    crumb: ["Inicio", "Decidirse", "¿Qué supone?"],
    options: [
      { label: "⬅ Volver", goto: "decidirse" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
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
      "General\nAnalizar la relación entre el uso de la IA con los proyectos de vida de los y las jóvenes que cursan el último año de la escuela secundaria.\n\nEspecíficos\n• Identificar los proyectos vocacionales de los y las jóvenes que cursan el último año de la escuela secundaria en Laboulaye.\n• Reconocer los factores que influyen en la elección de los/as jóvenes logrando explorar qué motivaciones y limitaciones tienen.\n• Explorar sobre las influencias de la IA a la hora de elegir y tomar decisiones vocacionales.\n• Comprender los motivos que impulsan la utilización de aplicaciones de IA.",
    crumb: ["Inicio", "Investigación", "Objetivos"],
    options: [
      { label: "⬅ Volver", goto: "investigacion" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
  iv_metodologia: {
    message:
      "Enfoque metodológico mixto, articulando procedimientos cuantitativos y cualitativos. El estudio se inscribe en el paradigma sociocrítico y asume características de la investigación-acción.\n\nLa recolección de datos se realizó mediante dos procedimientos: la encuesta a través de Formularios de Google y entrevistas en profundidad a profesionales de nuestra ciudad.",
    crumb: ["Inicio", "Investigación", "Metodología"],
    options: [
      { label: "⬅ Volver", goto: "investigacion" },
      { label: "🏠 Menú principal", goto: "start" },
    ],
  },
};
