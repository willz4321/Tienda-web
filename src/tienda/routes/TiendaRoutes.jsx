import {  Navigate, Route, Routes } from "react-router-dom"
import { TiendaPage } from "../pages/TiendaPage"
import { Abrigos, Accesorios, Camisas, Navbar, Pantalones, Remeras, Tunicas, Footer } from "../pages"



export const TiendaRoutes = () => {
  return (
    <>
    
    <Navbar/>
 
    <Routes>
        <Route path="/" element={ <TiendaPage/> } />
        
        <Route path="/*" element={ <Navigate to="/" /> } />

        <Route path="pantalones" element={ <Pantalones /> } />
        <Route path="remeras" element={ <Remeras />}/>
        <Route path="tunicas" element={ <Tunicas />}/>
        <Route path="camisas" element={ <Camisas />}/>
        <Route path="Abrigos" element={ <Abrigos />}/>
        <Route path="accesorios" element={ <Accesorios />}/>
    </Routes>

    <Footer/>
    </>  
  )
}
