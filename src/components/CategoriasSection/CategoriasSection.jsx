import autos from '../../data/autos';
import Item from '../Item/Item';

const CategoriasSection = () => {
  const autos0km = autos.filter(auto => auto.categoria === '0km');
  const autosUsados = autos.filter(auto => auto.categoria === 'usado');
  const autosRecien = autos.filter(auto => auto.categoria === 'recien_llegado');

  return (
    <div>
      <h2>Autos 0km</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', marginBottom: 30 }}>
        {autos0km.map(auto => (
          <Item key={auto.id} {...auto} />
        ))}
      </div>

      <h2>Autos Usados</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', marginBottom: 30 }}>
        {autosUsados.map(auto => (
          <Item key={auto.id} {...auto} />
        ))}
      </div>

      <h2>Recién Llegados</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', marginBottom: 30 }}>
        {autosRecien.map(auto => (
          <Item key={auto.id} {...auto} />
        ))}
      </div>
    </div>
  );
};

export default CategoriasSection;
