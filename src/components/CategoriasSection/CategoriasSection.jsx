import autos from '../../data/autos';
import Item from '../Item/Item';

const CategoriasSection = () => {
  // Extraemos tipos únicos
  const tiposUnicos = [...new Set(autos.map(auto => auto.tipo))];

  return (
    <div>
      {tiposUnicos.map(tipo => {
        const autosPorTipo = autos.filter(auto => auto.tipo === tipo);
        return (
          <div key={tipo} style={{ marginBottom: 40 }}>
            <h2 className="text-2xl font-bold mb-4">{tipo}</h2>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', paddingBottom: 10 }}>
              {autosPorTipo.map(auto => (
                <Item key={auto.id} {...auto} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriasSection;

