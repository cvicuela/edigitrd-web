
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-950 text-white font-sans">
      {/* NAVBAR */}
      <header className="bg-blue-950 text-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">EDIGIT Abogados</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><Link href="/"><span className="hover:text-yellow-400 cursor-pointer">Inicio</span></Link></li>
            <li><Link href="/perfil-financiero"><span className="hover:text-yellow-400 cursor-pointer">Perfil Financiero</span></Link></li>
            <li><Link href="/residencia-por-inversion"><span className="hover:text-yellow-400 cursor-pointer">Residencia</span></Link></li>
            <li><Link href="/propiedades"><span className="hover:text-yellow-400 cursor-pointer">Propiedades</span></Link></li>
            <li><a href="mailto:alonsoveloz@gmail.com" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-24 px-4 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">Asesoría migratoria y de inversión en España</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Especialistas en Golden Visa, naturalización española y adquisición de inmuebles rentables. Servicios 100% legales y acompañamiento personalizado desde Dominicana.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/residencia-por-inversion">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold px-6 py-3 rounded transition">Residencia por Inversión</button>
          </Link>
          <Link href="/propiedades">
            <button className="bg-white hover:bg-gray-200 text-blue-900 font-semibold px-6 py-3 rounded transition">Ver Propiedades</button>
          </Link>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-2">✅ Residencia Legal</h3>
            <p className="text-gray-300 text-sm">Obtenla en 20 días con una inversión inmobiliaria desde 500,000 €.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-2">💼 Asesoría Completa</h3>
            <p className="text-gray-300 text-sm">Desde la compra del inmueble hasta la obtención de la visa.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-2">📍 En España y RD</h3>
            <p className="text-gray-300 text-sm">Te acompañamos desde Santo Domingo y Madrid.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN PERFIL FINANCIERO */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Conoce Tu Perfil Financiero-Psicológico</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            ¿Cuál es tu relación real con el dinero? Descubre si eres gastador, ahorrador, evitador, acumulador o dador. Identifica tus creencias limitantes heredadas y recibe un plan personalizado para transformar tu vida financiera.
          </p>
          <Link href="/perfil-financiero">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-lg transition text-lg">
              Realizar Test Gratuito →
            </button>
          </Link>
          <p className="text-gray-300 text-sm mt-4">8 preguntas • Resultados instantáneos • Acceso a cursos de finanzas personales</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-gray-400 py-6 text-center text-sm">
        © 2025 EDIGIT Abogados | Todos los derechos reservados
      </footer>
    </div>
  );
}
