import { Navigate, Route, Routes } from "react-router-dom";
import { TiendaPage } from "../pages/TiendaPage";
import {
  Accesorios,
  Navbar,
  ProductCategory,
  Footer,
  CompraFinalizar,
  ListaCarrito,
  Producto,
  DetallesCompra
} from "../pages";
import PropTypes from 'prop-types';

const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

WithNavbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TiendaRoutes = () => {
  return (
    <>
      <Routes>
        {/* Rutas con Navbar */}
        <Route path="/" element={<WithNavbar><TiendaPage /></WithNavbar>} />
        <Route path="list" element={<WithNavbar><ProductCategory /></WithNavbar>} />
        <Route path="accesorios" element={<WithNavbar><Accesorios /></WithNavbar>} />

        {/* Ruta sin Navbar */}
        <Route path="carrito" element={<CompraFinalizar />} />
        <Route path="details" element={<DetallesCompra />} />

        {/* Rutas de productos con Navbar */}
        <Route path="producto/:id" element={<WithNavbar><Producto /></WithNavbar>} />

        {/* Ruta de carrito con Navbar */}
        <Route path="listaCompra" element={<WithNavbar><ListaCarrito /></WithNavbar>} />

        {/* Redirección para rutas no encontradas */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      
      <Footer />
    </>
  );
};
