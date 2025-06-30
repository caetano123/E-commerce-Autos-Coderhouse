import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout'; 
import App from './App'; 

import Contact from './pages/Contact';
import Vehicles from './pages/Vehicles';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} /> 
        <Route path="vehiculos" element={<Vehicles />} />
        <Route path="contacto" element={<Contact />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
