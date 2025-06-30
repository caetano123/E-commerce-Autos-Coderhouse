import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1 rounded-lg shadow-md select-none">
      <BsCart4 size={24} />
      <span className="font-semibold text-lg">3</span>
    </div>
  );
};

export default CartWidget;
