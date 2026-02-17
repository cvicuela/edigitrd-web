import React, { useState } from 'react';
import Link from 'next/link';

const PROFILES = {
  gastador: {
    name: 'Gastador',
    icon: '💳',
    color: 'from-red-500 to-pink-500',
    description: 'Disfrutas gastar dinero en experiencias y placer',
    traits: ['Impulsivo', 'Busca experiencias', 'Vive el presente', 'Generoso', 'Espontáneo'],
    limitingBeliefs: [
      'El dinero es para gastar y disfrutar',
      'Ahorrar es aburrido',
      'Merezco tener todo ahora',
      'No puedo resistirme a una buena oferta'
    ],
    inheritedBeliefs: [
      'Un padre que gastaba sin control',
      'Creencia de "la vida es ahora"',
      'Castigo económico en la infancia',
      'Falta de educación financiera familiar'
    ],
    strengths: [
      'Disfruta de la vida',
      'Crea experiencias memorables',
      'Socialmente generoso',
      'Flexible y adaptable'
    ],
    challenges: [
      'Deudas acumuladas',
      'Falta de ahorro',
      'Impulsividad financiera',
      'Estrés económico'
    ],
    actionPlan: [
      'Crear un presupuesto con límites claros para gastos discrecionales',
      'Implementar la regla "esperar 48 horas" antes de compras importantes',
      'Abrir una cuenta de ahorros automática (antes de gastar)',
      'Diferenciar entre necesidades y deseos',
      'Buscar experiencias de calidad con menor costo'
    ],
    courses: ['Finanzas Personales 101', 'Presupuestos Inteligentes', 'Deudas Zero']
  },
  ahorrador: {
    name: 'Ahorrador',
    icon: '🏦',
    color: 'from-green-500 to-emerald-500',
    description: 'Prefieres ahorrar y acumular dinero para seguridad',
    traits: ['Prudente', 'Disciplinado', 'Planificador', 'Cauteloso', 'Responsable'],
    limitingBeliefs: [
      'Nunca hay suficiente dinero',
      'Debo ahorrar para cada emergencia',
      'Gastar es pecado',
      'No merezco disfrutar ahora'
    ],
    inheritedBeliefs: [
      'Vivir "escasez" en la familia',
      'Padres que sufrieron crisis económicas',
      'Culpa asociada al gasto',
      'Mensaje de "hay que trabajar duro y ahorrar"'
    ],
    strengths: [
      'Estabilidad económica',
      'Capacidad de planificación',
      'Disciplina financiera',
      'Preparado para emergencias'
    ],
    challenges: [
      'Dificultad para disfrutar',
      'Estrés por insuficiencia',
      'Relaciones tensas por dinero',
      'Pérdida de oportunidades de crecimiento'
    ],
    actionPlan: [
      'Crear un "fondo de placer" permitido cada mes',
      'Diferenciar entre ahorros de emergencia y ahorros de crecimiento',
      'Establecer metas claras para saber cuándo es "suficiente"',
      'Invertir en experiencias personales de calidad',
      'Revisar creencias heredadas sobre el dinero'
    ],
    courses: ['Inversiones Inteligentes', 'Libertad Financiera', 'Psicología del Dinero']
  },
  evitador: {
    name: 'Evitador',
    icon: '👻',
    color: 'from-purple-500 to-indigo-500',
    description: 'Prefieres no pensar en dinero ni responsabilidades financieras',
    traits: ['Despreocupado', 'Negador', 'Pasivo', 'Delegador', 'Desorganizado'],
    limitingBeliefs: [
      'El dinero es complicado y estresante',
      'No soy bueno con números',
      'Alguien más debe manejar esto',
      'Ignorar es más fácil que enfrentar'
    ],
    inheritedBeliefs: [
      'Un padre que ignoraba asuntos financieros',
      'Madre que manejaba todo en secreto',
      'Ansiedad asociada al dinero',
      'Mensaje: "No es cosa para ti"'
    ],
    strengths: [
      'Menos estrés aparente',
      'Confianza en otros',
      'Optimismo',
      'Creatividad sin límites'
    ],
    challenges: [
      'Crisis financieras inesperadas',
      'Sobreendeudamiento',
      'Dependencia de otros',
      'Fraude y mala administración'
    ],
    actionPlan: [
      'Crear un sistema simple de tracking de gastos (app o hoja)',
      'Automatizar pagos y ahorros para no "pensar"',
      'Educación financiera gradual y sin presión',
      'Enfrentar una verdad financiera pequeña cada mes',
      'Buscar apoyo: asesor, pareja o amigo responsable'
    ],
    courses: ['Finanzas para Principiantes', 'Sistema Financiero Simplificado', 'Automatización Inteligente']
  },
  acumulador: {
    name: 'Acumulador',
    icon: '🏰',
    color: 'from-blue-500 to-cyan-500',
    description: 'Acumulas dinero como fuente de seguridad y poder',
    traits: ['Controlador', 'Ambicioso', 'Estratégico', 'Desconfiado', 'Independiente'],
    limitingBeliefs: [
      'El dinero = poder y seguridad',
      'Nunca puedo bajar la guardia',
      'Todos quieren mi dinero',
      'Debo tenerlo todo bajo control'
    ],
    inheritedBeliefs: [
      'Pérdida o inseguridad económica en la infancia',
      'Padres controladores del dinero',
      'Mensaje: "Sólo el dinero te protege"',
      'Experiencia de abandono económico'
    ],
    strengths: [
      'Generación de riqueza',
      'Independencia financiera',
      'Capacidad de inversión',
      'Seguridad económica real'
    ],
    challenges: [
      'Aislamiento emocional',
      'Relaciones frías con dinero',
      'Falta de disfrute',
      'Paranoia sobre pérdidas'
    ],
    actionPlan: [
      'Crear una jerarquía clara: familia > salud > dinero',
      'Aprender que el dinero es medio, no fin',
      'Practicar la generosidad controlada (donaciones, regalo)',
      'Invertir en relaciones personales significativas',
      'Explorar qué seguridad real necesitas vs. miedos iracionales'
    ],
    courses: ['Riqueza Integral', 'Inversiones Estratégicas', 'Mindfulness Financiero']
  },
  dador: {
    name: 'Dador',
    icon: '💝',
    color: 'from-yellow-500 to-orange-500',
    description: 'Disfrutas compartir y ayudar a otros con tu dinero',
    traits: ['Generoso', 'Empático', 'Solidario', 'Desinteresado', 'Servidor'],
    limitingBeliefs: [
      'Debo sacrificarme por otros',
      'Mi valor está en lo que doy',
      'Pedir ayuda es debilidad',
      'No merezco tener para mí'
    ],
    inheritedBeliefs: [
      'Padres que se sacrificaban constantemente',
      'Rol de "salvador" en la familia',
      'Amor condicionado a dar',
      'Mensaje: "Tu felicidad es cuidar a otros"'
    ],
    strengths: [
      'Impacto social positivo',
      'Relaciones auténticas',
      'Propósito de vida claro',
      'Comunidad fuerte'
    ],
    challenges: [
      'Insostenibilidad financiera',
      'Explotación emocional',
      'Falta de límites',
      'Resentimiento acumulado'
    ],
    actionPlan: [
      'Establecer límites claros: cuánto puedo dar sin afectar mi futuro',
      'Crear un presupuesto separado para "dar" (limitado)',
      'Aprender a decir "no" sin culpa',
      'Diferenciar entre ayudar y habilitar dependencia',
      'Valorar tu propia seguridad financiera como prioridad'
    ],
    courses: ['Generosidad Inteligente', 'Límites Saludables', 'Riqueza y Propósito']
  }
};

const QUESTIONS = [
  {
    id: 1,
    question: '¿Cómo te sientes ante una compra impulsiva?',
    answers: [
      { text: 'Es emocionante, lo hago seguido', profile: 'gastador' },
      { text: 'Me arrepiento después', profile: 'gastador' },
      { text: 'Casi nunca me pasa, pienso primero', profile: 'ahorrador' },
      { text: 'No pienso mucho en ello', profile: 'evitador' },
      { text: 'Razono si es parte de una estrategia', profile: 'acumulador' }
    ]
  },
  {
    id: 2,
    question: '¿Cuál es tu relación con el ahorro?',
    answers: [
      { text: 'Ahorrar es vivir menos, no lo hago', profile: 'gastador' },
      { text: 'Es mi prioridad antes de cualquier gasto', profile: 'ahorrador' },
      { text: 'Lo intento pero se me olvida', profile: 'evitador' },
      { text: 'Ahorro agresivamente para tener control', profile: 'acumulador' },
      { text: 'Ahorro moderadamente, comparto también', profile: 'dador' }
    ]
  },
  {
    id: 3,
    question: '¿Qué sientes cuando ayudas económicamente a otros?',
    answers: [
      { text: 'Es un gasto que disfruto, como cualquier otro', profile: 'gastador' },
      { text: 'Prefiero no hacerlo para proteger mis ahorros', profile: 'ahorrador' },
      { text: 'No pienso mucho al respecto', profile: 'evitador' },
      { text: 'Desconfianza de que sea mal usado', profile: 'acumulador' },
      { text: 'Es lo que más me hace feliz', profile: 'dador' }
    ]
  },
  {
    id: 4,
    question: '¿Cómo describe tu familia tu relación con el dinero?',
    answers: [
      { text: 'Como alguien que disfruta gastando', profile: 'gastador' },
      { text: 'Como ahorrador/a responsable', profile: 'ahorrador' },
      { text: 'Como alguien despreocupado/a', profile: 'evitador' },
      { text: 'Como alguien que controla bien su dinero', profile: 'acumulador' },
      { text: 'Como alguien generoso/a', profile: 'dador' }
    ]
  },
  {
    id: 5,
    question: '¿Cuál es tu mayor miedo financiero?',
    answers: [
      { text: 'Que se termine el dinero y no pueda divertirme', profile: 'gastador' },
      { text: 'Que no tenga suficiente para emergencias', profile: 'ahorrador' },
      { text: 'Lidiar con papeleos y números', profile: 'evitador' },
      { text: 'Perder el control o el poder que da el dinero', profile: 'acumulador' },
      { text: 'No poder ayudar a quien lo necesita', profile: 'dador' }
    ]
  },
  {
    id: 6,
    question: '¿Qué heredaste de tus padres sobre el dinero?',
    answers: [
      { text: '"Disfruta la vida ahora, mañana no se sabe"', profile: 'gastador' },
      { text: '"Hay que ahorrar y ser prudente"', profile: 'ahorrador' },
      { text: '"Es complicado, mejor no pensar en ello"', profile: 'evitador' },
      { text: '"El dinero es poder y seguridad"', profile: 'acumulador' },
      { text: '"Lo importante es ayudar a otros"', profile: 'dador' }
    ]
  },
  {
    id: 7,
    question: '¿Cuál es tu objetivo financiero principal?',
    answers: [
      { text: 'Vivir bien y disfrutar mis ganancias', profile: 'gastador' },
      { text: 'Tener un colchón de seguridad siempre', profile: 'ahorrador' },
      { text: 'Que alguien más se encargue', profile: 'evitador' },
      { text: 'Alcanzar la máxima independencia financiera', profile: 'acumulador' },
      { text: 'Poder ser generoso y ayudar', profile: 'dador' }
    ]
  },
  {
    id: 8,
    question: '¿Cómo te sientes con tus deudas?',
    answers: [
      { text: 'Las ignoro o las veo como normales', profile: 'gastador' },
      { text: 'Me estresa tenerlas', profile: 'ahorrador' },
      { text: 'No sé exactamente cuántas tengo', profile: 'evitador' },
      { text: 'Las evito a toda costa', profile: 'acumulador' },
      { text: 'Me siento culpable de no poder pagar todas', profile: 'dador' }
    ]
  }
];

export default function PerfilFinanciero() {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    gastador: 0,
    ahorrador: 0,
    evitador: 0,
    acumulador: 0,
    dador: 0
  });
  const [userEmail, setUserEmail] = useState('');

  const handleAnswer = (profile) => {
    const newScores = { ...scores };
    newScores[profile]++;
    setScores(newScores);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const getPrimaryProfile = () => {
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  };

  const getSecondaryProfile = () => {
    const primary = getPrimaryProfile();
    const remaining = Object.keys(scores).filter(p => p !== primary);
    return remaining.reduce((a, b) => scores[a] > scores[b] ? a : b);
  };

  const handleStartQuiz = () => {
    if (!userEmail) {
      alert('Por favor ingresa tu email');
      return;
    }
    setCurrentStep('quiz');
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setCurrentQuestion(0);
    setScores({
      gastador: 0,
      ahorrador: 0,
      evitador: 0,
      acumulador: 0,
      dador: 0
    });
    setUserEmail('');
  };

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <header className="bg-blue-950 text-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">EDIGIT Abogados</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li><Link href="/"><span className="hover:text-yellow-400 cursor-pointer">Inicio</span></Link></li>
              <li><Link href="/perfil-financiero"><span className="hover:text-yellow-400 cursor-pointer">Perfil Financiero</span></Link></li>
              <li><Link href="/residencia-por-inversion"><span className="hover:text-yellow-400 cursor-pointer">Residencia</span></Link></li>
              <li><a href="mailto:alonsoveloz@gmail.com" className="hover:text-yellow-400">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <section className="text-center py-24 px-4">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            ¿Cuál es tu relación real con el dinero?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Descubre tu perfil financiero-psicológico y comprende qué creencias heredadas guían tus decisiones de dinero
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12 mt-16">
            {Object.entries(PROFILES).map(([key, profile]) => (
              <div key={key} className={`bg-gradient-to-br ${profile.color} p-6 rounded-lg text-white shadow-lg`}>
                <div className="text-4xl mb-2">{profile.icon}</div>
                <h3 className="font-bold text-lg">{profile.name}</h3>
                <p className="text-sm text-gray-100 mt-2">{profile.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Comienza tu análisis</h3>
            <input
              type="email"
              placeholder="Tu email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-4 py-2 rounded mb-4 text-gray-900"
            />
            <button
              onClick={handleStartQuiz}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded transition"
            >
              Comenzar Test (8 preguntas)
            </button>
            <p className="text-sm text-gray-400 mt-4">* Recibirás tu plan personalizado y acceso a recursos exclusivos</p>
          </div>
        </section>
      </div>
    );
  }

  if (currentStep === 'quiz') {
    const question = QUESTIONS[currentQuestion];
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <header className="bg-blue-950 text-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">EDIGIT Abogados</h1>
            <div className="text-sm">Pregunta {currentQuestion + 1} de {QUESTIONS.length}</div>
          </nav>
        </header>

        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
              <h3 className="text-2xl font-bold mb-8">{question.question}</h3>
              <div className="space-y-3">
                {question.answers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(answer.profile)}
                    className="w-full p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition font-medium"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Results step
  const primaryProfile = getPrimaryProfile();
  const secondaryProfile = getSecondaryProfile();
  const primary = PROFILES[primaryProfile];
  const secondary = PROFILES[secondaryProfile];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-blue-950 text-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">EDIGIT Abogados</h1>
        </nav>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Result */}
          <div className={`bg-gradient-to-br ${primary.color} rounded-lg p-8 mb-8 shadow-2xl`}>
            <div className="text-6xl mb-4">{primary.icon}</div>
            <h2 className="text-4xl font-bold mb-2">Eres un {primary.name}</h2>
            <p className="text-xl text-white text-opacity-90">{primary.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Traits */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">✨ Características principales</h3>
              <ul className="space-y-2">
                {primary.traits.map((trait, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="text-purple-400">•</span> {trait}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">💪 Fortalezas</h3>
              <ul className="space-y-2">
                {primary.strengths.map((strength, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="text-green-400">•</span> {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">⚠️ Desafíos</h3>
              <ul className="space-y-2">
                {primary.challenges.map((challenge, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="text-red-400">•</span> {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Limiting Beliefs */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🔗 Creencias limitantes</h3>
              <ul className="space-y-2">
                {primary.limitingBeliefs.map((belief, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="text-yellow-400">•</span> {belief}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inherited Beliefs */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">👨‍👩‍👧 Creencias heredadas de tus padres</h3>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {primary.inheritedBeliefs.map((belief, idx) => (
                <li key={idx} className="text-gray-300 flex items-center gap-2">
                  <span className="text-blue-400">→</span> {belief}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Plan */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">📋 Tu Plan Personalizado</h3>
            <ol className="space-y-4">
              {primary.actionPlan.map((action, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-2xl font-bold text-purple-400 flex-shrink-0">{idx + 1}</span>
                  <p className="text-gray-100">{action}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Secondary Profile */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-3">🎭 Tu perfil secundario: {secondary.name} {secondary.icon}</h3>
            <p className="text-gray-300 mb-4">{secondary.description}</p>
            <p className="text-gray-400 text-sm">Tu segundo perfil también influencia tus decisiones financieras. Combinas características de ambos tipos.</p>
          </div>

          {/* CTA Courses */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">🎓 Cursos personalizados para ti</h3>
            <p className="text-white mb-6">Aprende a transformar tu relación con el dinero con estos cursos diseñados específicamente para tu perfil:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {primary.courses.map((course, idx) => (
                <div key={idx} className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">📚 {course}</h4>
                  <button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-2 rounded transition mt-2">
                    Ver más
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Email Capture */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">📧 Recibe tu análisis detallado</h3>
            <p className="text-gray-300 mb-4">Hemos enviado tu perfil personalizado y un plan de acción a:</p>
            <p className="text-purple-400 font-bold text-lg">{userEmail}</p>
            <p className="text-gray-400 text-sm mt-4">Revisa tu bandeja (y spam) para acceso exclusivo a recursos y contenido premium.</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded transition"
            >
              Repetir Test
            </button>
            <Link href="/">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded transition">
                Volver al Inicio
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 text-gray-400 py-6 text-center text-sm mt-16">
        © 2025 EDIGIT Abogados | Todos los derechos reservados
      </footer>
    </div>
  );
}
