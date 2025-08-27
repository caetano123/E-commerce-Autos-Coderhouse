import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
