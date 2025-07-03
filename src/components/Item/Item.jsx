const Item = ({
  marca,
  modelo,
  año,
  precio,
  kilometros,
  transmision,
  combustible,
  imagen
}) => {
  return (
    <div className="w-full sm:w-64 border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <img
        src={imagen}
        alt={`${marca} ${modelo}`}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-xl font-semibold">{marca} {modelo}</h3>
      <p className="text-gray-700">Año: {año}</p>
      <p className="text-gray-700">Precio: U$D {precio.toLocaleString()}</p>
      <p className="text-gray-700">Km: {kilometros.toLocaleString()}</p>
      <p className="text-gray-700">Transmisión: {transmision}</p>
      <p className="text-gray-700">Combustible: {combustible}</p>

      <button
        className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => alert(`Auto añadido: ${marca} ${modelo}`)}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Item;
