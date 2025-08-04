import CategoriasSection from './components/CategoriasSection/CategoriasSection.jsx';

const Home = () => {
  return (
    <section className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a AutoMarket</h1>
      <p className="mb-6">Tu plataforma para compra y venta de autos.</p>
      
      {/* Aquí metemos los carouseles por categorías */}
      <CategoriasSection />
    </section>
  );
};

export default Home;
