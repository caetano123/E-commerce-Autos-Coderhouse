import { useState } from 'react';
import autos from '../../data/autos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [filtros, setFiltros] = useState({
    marca: '',
    transmision: '',
    añoDesde: '',
    añoHasta: '',
    precioDesde: '',
    precioHasta: ''
  });

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const autosFiltrados = autos.filter(auto => {
    const coincideMarca = filtros.marca === '' || auto.marca === filtros.marca;
    const coincideTransmision = filtros.transmision === '' || auto.transmision === filtros.transmision;
    const coincideAñoDesde = filtros.añoDesde === '' || auto.año >= parseInt(filtros.añoDesde);
    const coincideAñoHasta = filtros.añoHasta === '' || auto.año <= parseInt(filtros.añoHasta);
    const coincidePrecioDesde = filtros.precioDesde === '' || auto.precio >= parseInt(filtros.precioDesde);
    const coincidePrecioHasta = filtros.precioHasta === '' || auto.precio <= parseInt(filtros.precioHasta);
    return coincideMarca && coincideTransmision && coincideAñoDesde && coincideAñoHasta && coincidePrecioDesde && coincidePrecioHasta;
  });

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Catálogo de Autos</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <select name="marca" value={filtros.marca} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Todas las marcas</option>
          <option value="Toyota">Toyota</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Ford">Ford</option>
        </select>

        <select name="transmision" value={filtros.transmision} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Todas las transmisiones</option>
          <option value="Manual">Manual</option>
          <option value="Automática">Automática</option>
        </select>

        <input
          type="number"
          name="añoDesde"
          value={filtros.añoDesde}
          placeholder="Año desde"
          onChange={handleChange}
          className="border rounded px-3 py-2 w-32"
        />

        <input
          type="number"
          name="añoHasta"
          value={filtros.añoHasta}
          placeholder="Año hasta"
          onChange={handleChange}
          className="border rounded px-3 py-2 w-32"
        />

        <input
          type="number"
          name="precioDesde"
          value={filtros.precioDesde}
          placeholder="Precio mínimo"
          onChange={handleChange}
          className="border rounded px-3 py-2 w-36"
        />

        <input
          type="number"
          name="precioHasta"
          value={filtros.precioHasta}
          placeholder="Precio máximo"
          onChange={handleChange}
          className="border rounded px-3 py-2 w-36"
        />
      </div>

      <ItemList autos={autosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
