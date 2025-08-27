import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useAuto from "../../hooks/useAuto";
import PulseLoader from "react-spinners/PulseLoader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { auto, cargando } = useAuto(id);

  if (cargando) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <PulseLoader color="#2563EB" size={30} />
      </div>
    );
  }

  return (
    <div className="p-6">
      {auto ? (
        <ItemDetail auto={auto} />
      ) : (
        <h2 className="text-2xl font-bold text-red-600">Auto no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;

