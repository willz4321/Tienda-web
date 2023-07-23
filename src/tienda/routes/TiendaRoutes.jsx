import {  Navigate, Route, Routes } from "react-router-dom"
import { TiendaPage } from "../pages/TiendaPage"
import { Abrigos, Accesorios, Camisas, Navbar, Pantalones, Remeras, Tunicas, Footer, CarritoCompra } from "../pages"
import { Producto } from "../pages/carrito/Producto"
import { ListaCarrito } from "../pages/carrito/ListaCarrito"



export const TiendaRoutes = () => {
  return (
    <>
    
    <Navbar/>
 
    <Routes>
        <Route path="/" element={ <TiendaPage/> } />
        
        <Route path="/*" element={ <Navigate to="/" /> } />
        <Route path="carrito" element={ <CarritoCompra /> } />
        <Route path="pantalones" element={ <Pantalones /> } />
        <Route path="remeras" element={ <Remeras />}/>
        <Route path="tunicas" element={ <Tunicas />}/>
        <Route path="camisas" element={ <Camisas />}/>
        <Route path="Abrigos" element={ <Abrigos />}/>
        <Route path="accesorios" element={ <Accesorios />}/>
        <Route path="producto/:id" element={<Producto />} />
        <Route path="listaCompra" element={<ListaCarrito />} />
    </Routes>

    <Footer/>
    </>  
  )
}
