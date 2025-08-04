import { useParams } from "react-router-dom";
import autos from "../../data/autos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const auto = autos.find(auto => auto.id === parseInt(id));

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
