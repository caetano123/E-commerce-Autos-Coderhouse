import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <button onClick={handleDecrement} className="px-3 py-1 bg-gray-200 rounded">-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} className="px-3 py-1 bg-gray-200 rounded">+</button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;
