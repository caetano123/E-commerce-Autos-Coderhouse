import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { CartProvider } from './components/Context/CartProvider'; // <- Import correcto
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </BrowserRouter>
);