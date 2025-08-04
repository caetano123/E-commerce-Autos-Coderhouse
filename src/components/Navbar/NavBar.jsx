import { Link } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/src/assets/logo-shopping-de-autos.svg" alt="Logo" className="w-22 h-18 ml-2" />
        
      </div>

      <ul className="flex gap-6 text-sm sm:text-base">
        <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
        <li><Link to="/vehiculos" className="hover:text-gray-300">Vehículos</Link></li>
        <li><Link to="/contacto" className="hover:text-gray-300">Contacto</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
