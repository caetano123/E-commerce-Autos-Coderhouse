import { useContext, useState } from "react";
import { CartContext } from "../components/Context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp, doc, updateDoc } from "firebase/firestore";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce((sum, auto) => sum + auto.precio * auto.quantity, 0);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleConfirmPurchase = async (e) => {
  e.preventDefault();
  if (!buyer.nombre || !buyer.email || !buyer.telefono) return alert("Completa todos los campos");

     const outOfStock = cartItems.some(auto => auto.quantity > (auto.stock || 0));
  if (outOfStock) {
    return alert("Uno o más productos no tienen stock suficiente.");
  }

  const order = {
    buyer,
    items: cartItems.map(({ id, marca, modelo, precio, quantity }) => ({
      id, marca, modelo, precio, quantity
    })),
    total,
    date: Timestamp.fromDate(new Date())
  };

  try {
    setLoading(true);
    const docRef = await addDoc(collection(db, "orders"), order);
    setOrderId(docRef.id);

    // Actualizar stock de cada producto
    for (const auto of cartItems) {
  const productRef = doc(db, "cars", auto.id);
  const newStock = auto.stock !== undefined ? Math.max(0, auto.stock - auto.quantity) : 0;
  await updateDoc(productRef, { stock: newStock });
}


    clearCart();
  } catch (error) {
    console.error("Error al generar la orden:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>

      {cartItems.length === 0 && !orderId ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : orderId ? (
        <div className="p-4 bg-green-100 rounded">
          <h3 className="text-xl font-semibold">¡Compra realizada!</h3>
          <p>Tu ID de orden es: <span className="font-bold">{orderId}</span></p>
          <p>Estaremos en contacto contigo a la brevedad.</p>
          <p className="font-bold"> Guarda la ID de la orden para cuando te contactemos.</p>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((auto) => (
              <div key={auto.id} className="border rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white shadow-md">
                <div className="flex items-center gap-4">
                  <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} className="w-32 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-lg">{auto.marca} {auto.modelo}</h3>
                    <p className="text-gray-700 text-sm">Año: {auto.año}</p>
                    <p className="text-gray-700 text-sm">Precio unitario: U$D {auto.precio.toLocaleString()}</p>
                    <p className="text-gray-700 text-sm">Cantidad: {auto.quantity}</p>
                    <p className="text-gray-700 text-sm font-semibold">
                      Subtotal: U$D {(auto.precio * auto.quantity).toLocaleString()}
                    </p>
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
            <div className="flex gap-2">
              <button
                className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setCheckout(true)}
              >
                Siguiente
              </button>
            </div>
          </div>

          {checkout && (
            <form className="mt-6 max-w-md p-4 border rounded bg-gray-50" onSubmit={handleConfirmPurchase}>
              <h3 className="text-xl font-semibold mb-3">Datos del comprador</h3>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={buyer.nombre}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={buyer.email}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={buyer.telefono}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                {loading ? "Procesando..." : "Confirmar compra"}
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
