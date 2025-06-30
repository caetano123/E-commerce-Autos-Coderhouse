const Item = ({
  marca,
  modelo,
  año,
  precio,
  kilometros,
  transmision,
  combustible,
  imagen
}) => {
  return (
    <div className="item" >
      <img src={imagen} alt={`${marca} ${modelo}`} width="200" />
      <h3>{marca} {modelo}</h3>
      <p>Año: {año}</p>
      <p>Precio: U$D {precio}</p>
      <p>Km: {kilometros}</p>
      <p>Transmisión: {transmision}</p>
      <p>Combustible: {combustible}</p>
    </div>
  );
};

export default Item;
