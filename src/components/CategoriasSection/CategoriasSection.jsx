import autos from '../../data/autos';
import Item from '../Item/Item';

const CategoriasSection = () => {
  const tiposUnicos = [...new Set(autos.map(auto => auto.tipo))];

  return (
    <div>
      {tiposUnicos.map(tipo => {
        const autosPorTipo = autos.filter(auto => auto.tipo === tipo);
        return (
          <div key={tipo} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{tipo}</h2>
            <div
              className="
                flex overflow-x-auto
                gap-20
                px-4 py-2
                snap-x snap-mandatory
                scroll-pl-6 sm:scroll-pl-0
              "
              style={{ scrollPaddingLeft: '1.5rem' }} // Igual a scroll-pl-6 para navegadores que no soportan Tailwind scroll-padding
            >
              {autosPorTipo.map(auto => (
                <div
                  key={auto.id}
                  className="
                    flex-shrink-0
                    w-72 sm:w-56 md:w-48
                    snap-center
                  "
                >
                  <Item {...auto} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriasSection;

