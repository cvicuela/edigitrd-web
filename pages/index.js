import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b border-slate-700">
        <div className="text-xl font-bold tracking-wide">EDIGIT Abogados</div>
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-yellow-400">Inicio</Link>
          <Link href="/residencia-por-inversion" className="hover:text-yellow-400">Residencia por Inversión</Link>
          <Link href="/propiedades" className="hover:text-yellow-400">Propiedades</Link>
          <a href="#" className="hover:text-yellow-400">Contacto</a>
        </nav>
      </header>

      <main className="px-6 py-20 text-center bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Soluciones Migratorias para España
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Somos un despacho de abogados especializado en ofrecer soluciones legales para residir, trabajar y obtener la nacionalidad española.
          </p>
          <a
            href="https://forms.monday.com/forms/00ca3fe39a4911dcd295ccf9086dc680?r=use1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Solicitar una consulta
          </a>
        </div>
      </main>

      <footer className="px-6 py-8 text-sm text-slate-400 border-t border-slate-700 mt-20 text-center">
        &copy; {new Date().getFullYear()} EDIGIT Abogados. Todos los derechos reservados.
      </footer>
    </div>
  );
}
