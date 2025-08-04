import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <Link to="/carrito">
      <div className="flex items-center gap-2 cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1 rounded-lg shadow-md select-none">
        <BsCart4 size={24} />
        <span className="font-semibold text-lg">{cartCount}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
