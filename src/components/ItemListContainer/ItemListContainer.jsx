import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import useAutos from "../../hooks/useAutos"; // <-- hook

const ItemListContainer = () => {
  const { autos, cargando } = useAutos(); // <-- useAutos en vez de array estático
  const [filtros, setFiltros] = useState({
    marca: "",
    transmision: "",
    añoDesde: "",
    añoHasta: "",
    precioDesde: "",
    precioHasta: ""
  });

  const [autosFiltrados, setAutosFiltrados] = useState([]);

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  // Marcas y transmisiones únicas ahora se calculan de los datos de Firestore
  const marcasUnicas = [...new Set(autos.map(auto => auto.marca))];
  const transmisionesUnicas = [...new Set(autos.map(auto => auto.transmision))];

  useEffect(() => {
    const filtrados = autos.filter(auto => {
      const coincideMarca = filtros.marca === "" || auto.marca === filtros.marca;
      const coincideTransmision = filtros.transmision === "" || auto.transmision === filtros.transmision;
      const coincideAñoDesde = filtros.añoDesde === "" || auto.año >= parseInt(filtros.añoDesde);
      const coincideAñoHasta = filtros.añoHasta === "" || auto.año <= parseInt(filtros.añoHasta);
      const coincidePrecioDesde = filtros.precioDesde === "" || auto.precio >= parseInt(filtros.precioDesde);
      const coincidePrecioHasta = filtros.precioHasta === "" || auto.precio <= parseInt(filtros.precioHasta);
      return coincideMarca && coincideTransmision && coincideAñoDesde && coincideAñoHasta && coincidePrecioDesde && coincidePrecioHasta;
    });
    setAutosFiltrados(filtrados);
  }, [filtros, autos]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Catálogo de Autos</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {/* Filtros */}
        <select name="marca" value={filtros.marca} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Todas las marcas</option>
          {marcasUnicas.map((marca) => <option key={marca} value={marca}>{marca}</option>)}
        </select>

        <select name="transmision" value={filtros.transmision} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Todas las transmisiones</option>
          {transmisionesUnicas.map((transmision) => <option key={transmision} value={transmision}>{transmision}</option>)}
        </select>

        <input type="number" name="añoDesde" value={filtros.añoDesde} onChange={handleChange} placeholder="Año desde" className="border rounded px-3 py-2 w-32"/>
        <input type="number" name="añoHasta" value={filtros.añoHasta} onChange={handleChange} placeholder="Año hasta" className="border rounded px-3 py-2 w-32"/>
        <input type="number" name="precioDesde" value={filtros.precioDesde} onChange={handleChange} placeholder="Precio mínimo" className="border rounded px-3 py-2 w-36"/>
        <input type="number" name="precioHasta" value={filtros.precioHasta} onChange={handleChange} placeholder="Precio máximo" className="border rounded px-3 py-2 w-36"/>
      </div>

      {cargando ? (
        <div className="h-[60vh] flex justify-center items-start pt-24">
          <PulseLoader color="#2563EB" size={30} />
        </div>
      ) : (
        <ItemList autos={autosFiltrados} />
      )}
    </div>
  );
};

export default ItemListContainer;
