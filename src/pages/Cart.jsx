
import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, auto) => sum + auto.precio, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((auto, index) => (
              <div key={index} className="border rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white shadow-md">
                <div className="flex items-center gap-4">
                  <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} className="w-32 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-lg">{auto.marca} {auto.modelo}</h3>
                    <p className="text-gray-700 text-sm">Año: {auto.año}</p>
                    <p className="text-gray-700 text-sm">Precio: U$D {auto.precio.toLocaleString()}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(auto.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xl font-semibold">
              Total: <span className="text-green-600">U$D {total.toLocaleString()}</span>
            </p>
            <button
              className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
