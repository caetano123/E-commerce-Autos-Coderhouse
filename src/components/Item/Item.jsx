import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../components/Context/CartContext";

const Item = ({
  id,
  marca,
  modelo,
  año,
  precio,
  kilometros,
  transmision,
  combustible,
  imagen,
  stock = 10,
}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const isInCart = cartItems.some((item) => item.id === id);
  const auto = {
    id,
    marca,
    modelo,
    año,
    precio,
    kilometros,
    transmision,
    combustible,
    imagen,
    quantity,
  };

  const handleAddToCart = () => {
    addToCart(auto);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const increment = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-full sm:w-64 border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <Link to={`/detalle/${id}`}>
        <img
          src={imagen}
          alt={`${marca} ${modelo}`}
          className="w-full h-40 object-cover rounded mb-3"
        />
        <h3 className="text-xl font-semibold">
          {marca} {modelo}
        </h3>
        <p className="text-gray-700">Año: {año}</p>
        <p className="text-gray-700">Precio: U$D {precio.toLocaleString()}</p>
        <p className="text-gray-700">Km: {kilometros.toLocaleString()}</p>
        <p className="text-gray-700">Transmisión: {transmision}</p>
        <p className="text-gray-700">Combustible: {combustible}</p>
      </Link>

      {stock > 0 ? (
        !isInCart ? (
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <button
                onClick={decrement}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increment}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              🛒 Añadir al carrito
            </button>
          </div>
        ) : (
          <button
            onClick={handleRemoveFromCart}
            className="mt-3 w-full px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition"
          >
            🗑️ Quitar del carrito
          </button>
        )
      ) : (
        <p className="mt-3 text-red-600 font-semibold">❌ Producto sin stock</p>
      )}
    </div>
  );
};

export default Item;
