import { Link, Route, Routes } from "react-router-dom"
import { Abrigos } from "./Abrigos"
import { Accesorios } from "./Accesorios"
import { Camisas } from "./Camisas"
import { Navbar } from "./Navbar"
import { Pantalones } from "./Pantalones"
import { Remeras } from "./Remeras"
import { Tunicas } from "./Tunicas"


export const TiendaPage = () => {
  return (

    <>

   <div>
    <div>
      <img src="../src/assets/tienda-img1.png" alt="diseño1" style={{width: "99vw"}}/>
    </div>
   </div>

    <div style={{backgroundColor: "black"}}>
        <div className="container text-white" >
      <div className="row">
        <div className="col">
        <h4>HECHO EN ARGENTINA</h4>
        </div>
        <div className="col">
       <h4>COMPRÁ EN HASTA 6 CUOTAS SIN INTERÉS</h4> 
        </div>
        <div className="col">
        <h4>ENVÍOS A TODO EL PAÍS</h4>
        </div>
      </div>
     </div>
    </div>
    
    <div className="container closs">
        <div className="row">

            <div>
                <div>
                   <img src="../src/assets/pantalonMarron.jpg" alt="presentacion1" className="img-store"/>
                </div>
                <div className="text-link">
                   <h2>
                   PANTALÓN ZELIK PARDO
                   </h2>
                   <a href="">COMPRAR</a>
                </div>
            </div>

            <div>
            <div>
                   <img src="../src/assets/pantalonMarron.jpg" alt="presentacion1" className="img-store"/>
                </div>
                <div className="text-link">
                   <h2>
                   PANTALÓN ZELIK PARDO
                   </h2>
                   <a href="">COMPRAR</a>
                </div>
            </div>

            <div>
            <div>
                   <img src="../src/assets/pantalonMarron.jpg" alt="presentacion1" className="img-store"/>
                </div>
                <div className="text-link">
                   <h2>
                   PANTALÓN ZELIK PARDO
                   </h2>
                   <a href="">COMPRAR</a>
                </div>
            </div>

        </div>
    </div>
    
    </>

  )
}
