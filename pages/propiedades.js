import Image from 'next/image';
import local1 from '../public/local1.png';
import local2 from '../public/local2.png';
import local3 from '../public/local3.png';

export default function Propiedades() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-slate-800">
      <h1 className="text-3xl font-bold text-center mb-8">Propiedades Disponibles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* Local 1 */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image src={local1} alt="Local en Salamanca, Madrid" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Local en Salamanca, Madrid</h2>
            <p className="text-sm mb-1">📍 Zona Prime. Ideal para boutique, farmacia o franquicia.</p>
            <p className="text-sm text-green-600 font-medium">💸 Rentabilidad: 7.2% anual</p>
            <a
              href="mailto:alonsoveloz@gmail.com?subject=Interesado en local Salamanca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded mt-4"
            >
              Solicitar Información
            </a>
          </div>
        </div>

        {/* Local 2 */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image src={local2} alt="Local en Barrio Gótico, Barcelona" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Local en Barrio Gótico, Barcelona</h2>
            <p className="text-sm mb-1">📍 Alta visibilidad turística. Ideal para restaurante o galería.</p>
            <p className="text-sm text-green-600 font-medium">💸 Rentabilidad: 7.5% anual</p>
            <a
              href="mailto:alonsoveloz@gmail.com?subject=Interesado en local Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded mt-4"
            >
              Solicitar Información
            </a>
          </div>
        </div>

        {/* Apartamento */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image src={local3} alt="Apartamento en Chamartín, Madrid" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Apartamento en Chamartín, Madrid</h2>
            <p className="text-sm mb-1">🏡 2 habitaciones + 2 baños. Ideal para residencia Golden Visa.</p>
            <p className="text-sm text-green-600 font-medium">💸 Rentabilidad: 6.8% anual</p>
            <a
              href="mailto:alonsoveloz@gmail.com?subject=Interesado en apartamento Chamartín"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded mt-4"
            >
              Solicitar Información
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
