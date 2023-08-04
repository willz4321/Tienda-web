import { useDispatch, useSelector } from "react-redux";
import { formatPriceWithCommas } from '../../components/thunks';
import { removeItemFromBuys } from "../../../store/slices/Tienda/TiendaSlice";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const ListaCarrito = () => {
  const productosSeleccionados = useSelector((state) => state.Tienda.clienteCompra.listaProductos);
  const [redirectToTienda, setRedirectToTienda] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId, talle) => {
    dispatch(removeItemFromBuys({ id: productId, talle }));
    };

  const totalCompra = productosSeleccionados.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
    );

      // Verifica si el carrito está vacío
   // Verifica si el carrito está vacío y actualiza el estado
   useEffect(() => {
    if (productosSeleccionados.length === 0) {
      setRedirectToTienda(true);
    }
  }, [productosSeleccionados]);

  // Redirige a la página /tienda si el carrito está vacío
  if (redirectToTienda) {
    return <Navigate to="/" />;
  }
  return (
   
    <div >
      <h1 className="p-5 w-100 d-flex justify-content-center">Carrito</h1>
       <div className="row p-3 border-dark">
      <div className="col-8 list-group lista-carrito-izquierda ">
        {productosSeleccionados.map((producto) => (
          <div key={producto.nombre} className="list-group-item border-start-0 border-end-0">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={producto.imagen} alt={producto.nombre} className="img-listBuys" />
              </div>
              <div className="col-md-4">
                <div>
                  <h6 className="d-flex">{`${producto.nombre} - ${producto.talle}`}</h6>
                </div>
              </div>
              <div className="col-md-2">
                <p>{producto.cantidad}</p>
              </div>
              <div className="col-md-2">
                <p>${formatPriceWithCommas(producto.precio * producto.cantidad)}</p>
              </div>
              <div className="col-md-1">
              <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              onClick={() => handleRemoveItem(producto.id, producto.talle)}
              className="eliminar-btn-list"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-3 m-1 p-1 " style={{ height: "100vh", position: "relative" }}>
      <div className="list-group-item align-items-end card border-dark w-100 position-sticky" style={{ top: '50px' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item">Total del carrito</h4>
            <div className="row list-group-item d-flex align-items-center">
                  <p className='col-8 fs-4 text-secondary'>Subtotal</p>
                  <p className='col'>${formatPriceWithCommas(totalCompra)}</p>
            </div>
            <li className="list-group-item">
              <p className="fs-5 text-secondary">ENVIO</p>  
              <p className="text-secondary">Envio gratis</p>
            </li>
            <li className="row list-group-item d-flex align-items-center">
              <p className='col-8 p-2 text-secondary'>5% DE DESC. CON TRANSFERENCIA BANCARIA</p>  
              <p className='col'>${formatPriceWithCommas((totalCompra*0.05))}</p>
            </li>
            <li className="row list-group-item d-flex align-items-center">
              <p className='col-8 p-2 fs-4 text-secondary'>Total</p>  
              <p className='col '>${formatPriceWithCommas((totalCompra)-(totalCompra*0.05))}</p>
            </li>
          </ul>
              <div className="card-footer">
              
                <Link to="/carrito" style={{textDecoration: 'none', color:'white'}}>
                    <button type="button"  className="btn btn-dark w-100 ">
                     Finalizar compra
                    </button> 
                </Link>
         
              </div>
              </div>
          </div>
       </div>
      </div>
  );
};
