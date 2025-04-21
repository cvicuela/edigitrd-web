import React from "react";

export default function ResidenciaPorInversion() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-slate-900">
          Obtén tu residencia en España invirtiendo en propiedades
        </h1>
        <p className="text-lg text-center mb-10 text-slate-600">
          Invierte desde 500.000 € en bienes raíces y accede a la Golden Visa española con beneficios para toda tu familia.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">¿Qué necesitas?</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Invertir un mínimo de <strong>500.000 € sin hipoteca</strong></li>
            <li>Comprar propiedad residencial, local comercial o nave industrial</li>
            <li>No tener antecedentes penales</li>
            <li>Contar con seguro médico y medios económicos estables</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">¿Qué beneficios obtienes?</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Residencia legal en España desde el primer año</li>
            <li>Entrada libre en el espacio Schengen</li>
            <li>Permiso para vivir y trabajar</li>
            <li>Residencia también para cónyuge e hijos menores</li>
            <li>Camino a la nacionalidad española en solo 2 años</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <a
            href="https://forms.monday.com/forms/00ca3fe39a4911dcd295ccf9086dc680?r=use1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg shadow-lg text-lg transition"
          >
            Solicita una asesoría personalizada
          </a>
        </section>
      </div>
    </div>
  );
}
