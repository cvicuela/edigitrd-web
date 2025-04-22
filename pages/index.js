import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Bienvenido a EDIGIT Abogados
      </h1>
      <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
        Asesoría profesional en trámites migratorios, naturalización y residencia por inversión en España.
      </p>
      <div className="space-x-4">
        <Link href="/residencia-por-inversion" className="bg-yellow-400 text-black px-6 py-3 rounded shadow hover:bg-yellow-500 transition">
          Residencia por Inversión
        </Link>
        <Link href="/propiedades" className="bg-white text-slate-900 px-6 py-3 rounded shadow hover:bg-slate-100 transition">
          Ver Propiedades
        </Link>
      </div>
    </div>
  );
}
