const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-6 text-gray-600">
        ¿Tenés dudas sobre la compra o venta de tu auto? ¡Escribinos!
      </p>

      <div className="mb-8">
        <p><strong>Email:</strong> contacto@automarket.com</p>
        <p><strong>Teléfono:</strong> +598 1234 5678</p>
        <p><strong>Dirección:</strong> Montevideo, Uruguay</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="tucorreo@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Mensaje</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Escribí tu mensaje aquí..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
