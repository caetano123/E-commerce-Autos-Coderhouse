import Item from '../Item/Item';

const ItemList = ({ autos }) => {
  if (autos.length === 0) {
    return <p>No se encontraron autos con esos filtros.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {autos.map(auto => (
        <Item key={auto.id} {...auto} />
      ))}
    </div>
  );
};

export default ItemList;