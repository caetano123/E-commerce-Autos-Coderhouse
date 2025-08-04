import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout'; 
import Home from './Home'; 

import Contact from './pages/Contact';
import Vehicles from './pages/Vehicles';
import Cart from './pages/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="vehiculos" element={<Vehicles />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="carrito" element={<Cart />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
