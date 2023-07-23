import { Link } from "react-router-dom"
import { CarritoDesplegable} from "./carrito";
import { useState } from "react";


export const Navbar = () => {

    const [showCarrito, setShowCarrito] = useState(false);

  const handleCarritoToggle = () => {
    setShowCarrito((prevState) => !prevState);
  };

  return (
    <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/tienda">
                <img src="../src/assets/logo-tienda.png" alt="logo" style={{ width: "100px", height: "100px" }} />
            </Link>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/pantalones" className="nav-link active text-navbar">PANTALONES</Link>
                </li>
                <li className="nav-item">
                    <Link to="/remeras" className="nav-link active text-navbar">REMERAS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tunicas" className="nav-link active text-navbar">TÚNICAS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/camisas" className="nav-link active text-navbar">CAMISAS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/abrigos" className="nav-link active text-navbar">ABRIGOS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/accesorios" className="nav-link active text-navbar">ACCESORIOS</Link>
                </li>
                </ul>

            <form className="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ transform: 'translateX(-10px)' }}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
               <div onClick={handleCarritoToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" style={{ transform: 'translateX(-10px)', cursor: 'pointer' }} name="carrito-logo" >  
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
               </div> 
            </form>
            </div>
        </div>
        </nav>
          {/* Menú desplegable del carrito */}
      {showCarrito && (
        <div className={`carrito-container ${showCarrito ? "active" : ""}`} >
          <div className="carrito-overlay" >
            <CarritoDesplegable />
            <button className="btn btn-primary" onClick={handleCarritoToggle}>Cerrar</button>
            <div className="lista-carrito-derecha">
                {/* Botón "Ver Carrito" */}
                <Link to="listaCompra" className="btn btn-primary" onClick={handleCarritoToggle}>
                Ver Carrito
                </Link>
                {/* Botón "Finalizar Compra" */}
                <Link to="carrito" className="btn btn-success" onClick={handleCarritoToggle}>
                Finalizar Compra
                </Link>
             </div>
          </div>   
        </div>
      )}
    </>
  )
}
