import { useContext, useState } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { FaArrowLeft } from "react-icons/fa";

const ItemDetail = ({ auto }) => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const {
    id,
    marca,
    modelo,
    motor,
    año,
    precio,
    kilometros,
    combustible,
    transmision,
    potencia,
    traccion,
    puertas,
    color,
    pasajeros,
    stock,
    tipo,
    imagen,
  } = auto || {};

  const cartItem = cartItems.find((item) => item.id === id);
  const isInCart = !!cartItem;

  const handleAdd = (quantity) => {
    addToCart({ ...auto, quantity });
    setAdded(true);
  };

  const handleRemove = () => {
    removeFromCart(id);
    setAdded(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute px-8 py-4 bg-gray-300 rounded-lg hover:bg-gray-400 transition shadow-md"
        aria-label="Volver atrás"
        title="Volver atrás"
      >
        <FaArrowLeft />
      </button>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={imagen}
          alt={`${marca} ${modelo}`}
          className="max-h-80 w-auto object-contain rounded"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">
          {marca} {modelo} ({año})
        </h2>
        <p className="text-gray-700 text-lg mb-1">
          💰 Precio: U$D {precio?.toLocaleString()}
        </p>
        <p className="text-gray-700 text-lg mb-1">
          🚗 Kilómetros: {kilometros?.toLocaleString()} km
        </p>
        <p className="text-gray-700 text-lg mb-1">⚙️ Motor: {motor}</p>
        <p className="text-gray-700 text-lg mb-1">
          ⛽ Combustible: {combustible}
        </p>
        <p className="text-gray-700 text-lg mb-1">
          🔧 Transmisión: {transmision}
        </p>
        <p className="text-gray-700 text-lg mb-1">🐎 Potencia: {potencia} HP</p>
        <p className="text-gray-700 text-lg mb-1">🛞 Tracción: {traccion}</p>
        <p className="text-gray-700 text-lg mb-1">🚪 Puertas: {puertas}</p>
        <p className="text-gray-700 text-lg mb-1">🎨 Color: {color}</p>
        <p className="text-gray-700 text-lg mb-1">🧍‍♂️ Pasajeros: {pasajeros}</p>
        <p className="text-gray-700 text-lg mb-4">🗂️ Tipo: {tipo}</p>
        <p className="text-gray-700 text-lg mb-4">📈 Stock: {stock}</p>

        {stock > 0 ? (
          !isInCart && !added ? (
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          ) : (
            <button
              onClick={handleRemove}
              className="mt-4 px-5 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition"
            >
              🗑️ Quitar del carrito
            </button>
          )
        ) : (
          <p className="mt-4 text-red-600 font-semibold">
            ❌ Producto sin stock
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
