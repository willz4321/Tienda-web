import { Link } from "react-router-dom"
import { CarritoDesplegable} from "./carrito";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tipoProductoSelect } from "../../store/slices/Tienda/TiendaSlice";


export const Navbar = () => {
 
    const productosLista = useSelector((state) => state.Tienda.clienteCompra.listaProductos);
    const [showCarrito, setShowCarrito] = useState(false);
    const handleCarritoToggle = () => {
    setShowCarrito((prevState) => !prevState);
  };
  const dispatch = useDispatch();

  const handleTipoProductoSelect = (tipo) => {
    dispatch(tipoProductoSelect(tipo));
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
                    <Link to="/list" className="nav-link active text-navbar" onClick={() => handleTipoProductoSelect('pantalones')}>PANTALONES</Link>
                </li>
                <li className="nav-item">
                    <Link to="/list" className="nav-link active text-navbar" onClick={() => handleTipoProductoSelect('remeras')}>REMERAS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/list" className="nav-link active text-navbar" onClick={() => handleTipoProductoSelect('tunicas')}>TÚNICAS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/list" className="nav-link active text-navbar" onClick={() => handleTipoProductoSelect('camisas')}>CAMISAS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/list" className="nav-link active text-navbar" onClick={() => handleTipoProductoSelect('abrigos')}>ABRIGOS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/accesorios" className="nav-link active text-navbar">ACCESORIOS</Link>
                </li>
                </ul>

            <form className="d-flex">
              
               <div onClick={handleCarritoToggle} style={{paddingLeft: '15px'}}>
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
        <div className={`carrito-container ${showCarrito ? "active" : ""}`} onClick={handleCarritoToggle}>
          <div className="carrito-overlay" >
            <CarritoDesplegable />
            <div className="lista-carrito-derecha pt-5">
            {productosLista.length > 0 && ( // Only render if there are products in the cart
                <>
                  {/* Botón "Ver Carrito" */}
                  <Link to="/listaCompra" className="btn btn btn-outline-light" onClick={handleCarritoToggle}>
                    Ver Carrito
                  </Link>
                  {/* Botón "Finalizar Compra" */}
                  <Link to="/carrito" className="btn btn-outline-info" onClick={handleCarritoToggle}>
                    Finalizar Compra
                  </Link>
                </>
              )}
             </div>
             {productosLista.length <= 0 && <h3 className='carrito-vacio'>El carrito está vacío</h3>}
          </div>   
        </div>
      )}
    </>
  )
}
