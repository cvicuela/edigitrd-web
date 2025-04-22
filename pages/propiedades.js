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
