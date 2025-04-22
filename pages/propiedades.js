const propiedades = [
  {
    tipo: "Apartamento Residencial",
    ciudad: "Madrid",
    precio: "€520,000",
    img: "https://via.placeholder.com/400x250",
  },
  {
    tipo: "Local Comercial",
    ciudad: "Barcelona",
    precio: "€615,000",
    img: "https://via.placeholder.com/400x250",
  },
  {
    tipo: "Nave Industrial",
    ciudad: "Valencia",
    precio: "€780,000",
    img: "https://via.placeholder.com/400x250",
  },
];

export default function Propiedades() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-10 text-center">Propiedades en Venta</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {propiedades.map((prop, i) => (
          <div key={i} className="border rounded-lg shadow-md overflow-hidden">
            <img src={prop.img} alt={prop.tipo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{prop.tipo}</h2>
              <p className="text-sm text-slate-600 mb-1">Ciudad: {prop.ciudad}</p>
              <p className="text-sm text-slate-600 mb-4">Precio: {prop.precio}</p>
              <a
                href="https://forms.monday.com/forms/00ca3fe39a4911dcd295ccf9086dc680?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
                  import Image from 'next/image';
import local1 from '../public/local1.png';
import local2 from '../public/local2.png';

export default function Propiedades() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-slate-800">
      <h1 className="text-3xl font-bold text-center mb-8">Propiedades Disponibles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Propiedad 1 */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image src={local1} alt="Local en Salamanca, Madrid" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Local en Salamanca, Madrid</h2>
            <p className="text-sm mb-2">📍 Zona Prime. Ideal para boutique, farmacia o franquicia.</p>
            <p className="text-sm text-green-600 font-medium">💸 Rentabilidad estimada: 7.2% anual</p>
            <a
              href="mailto:alonsoveloz@gmail.com?subject=Interesado en local Salamanca&body=Hola, estoy interesado en recibir más información sobre el local en Salamanca, Madrid."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                Solicitar Información
              </button>
            </a>
          </div>
        </div>

        {/* Propiedad 2 */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image src={local2} alt="Local en Barrio Gótico, Barcelona" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">

              >
                Solicitar más info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
