import Image from 'next/image';

const properties = [
  {
    image: "/local1.png",
    title: "Local en Salamanca, Madrid",
    description: "📍 Zona Prime. Ideal para boutique, farmacia o franquicia.",
    profitability: "7.2% anual",
    emailSubject: "Interesado en local Salamanca",
  },
  {
    image: "/local2.png",
    title: "Local en Barrio Gótico, Barcelona",
    description: "📍 Alta visibilidad turística. Ideal para restaurante o galería.",
    profitability: "7.5% anual",
    emailSubject: "Interesado en local Barcelona",
  },
  {
    image: "/local3.png",
    title: "Apartamento en Chamartín, Madrid",
    description: "🏡 2 habitaciones + 2 baños. Ideal para residencia Golden Visa.",
    profitability: "6.8% anual",
    emailSubject: "Interesado en apartamento Chamartín",
  },
];

export default function Propiedades() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10 text-slate-800">
      <h1 className="text-3xl font-bold text-center mb-8">Propiedades Disponibles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div key={index} className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-sm mb-1">{property.description}</p>
              <p className="text-sm text-green-600 font-medium">💸 Rentabilidad: {property.profitability}</p>
              <a
                href={`mailto:alonsoveloz@gmail.com?subject=${encodeURIComponent(property.emailSubject)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded mt-4"
              >
                Solicitar Información
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
