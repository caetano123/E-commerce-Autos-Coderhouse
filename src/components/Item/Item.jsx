import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";


const Item = ({ id, marca, modelo, año, precio, kilometros, transmision, combustible, imagen }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const auto = { id, marca, modelo, año, precio, kilometros, transmision, combustible, imagen };
  const isInCart = cartItems.some(item => item.id === id);

  const handleClick = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(auto);
    }
  };

  return (
    <div className="w-full sm:w-64 border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      {/* Toda la parte clickeable redirige al detalle */}
      <Link to={`/detalle/${id}`}>
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
      </Link>

      <button
        onClick={handleClick}
        className={`mt-3 w-full px-4 py-2 rounded transition
          ${isInCart ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}
          text-white
        `}
      >
        {isInCart ? '🗑️ Quitar del carrito' : 'Añadir al carrito'}
      </button>
    </div>
  );
};

export default Item;
