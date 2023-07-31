import { useDispatch, useSelector } from "react-redux";
import { formatPriceWithCommas } from '../../components/thunks';
import { removeItemFromBuys } from "../../../store/slices/Tienda/TiendaSlice";

export const CarritoDesplegable = () => {
  const productosSeleccionados = useSelector((state) => state.Tienda.clienteCompra.listaProductos);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId, talle) => {
    dispatch(removeItemFromBuys({ id: productId, talle }));
  };
  const totalCompra = productosSeleccionados.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );
  

  return (
    <div style={{height: '80vh'}}>
      <div className="list-group overflow-auto h-100" >
        {productosSeleccionados.map((producto) => (
          <div key={`${producto.id}-${producto.talle}`} className="list-group-item" style={{backgroundColor: '#323232'}}>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              onClick={() => handleRemoveItem(producto.id, producto.talle)}
              className="eliminar-btn"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src={producto.imagen} alt={producto.nombre} className="img-listBuys" />
              </div>
              <div className="col-md-4 ">
                <div>
                  <h6  className="text-white">{`${producto.nombre} - ${producto.talle}`}</h6>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p  className="text-white">{producto.cantidad}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <p  className="text-white">${formatPriceWithCommas(producto.precio * producto.cantidad)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {productosSeleccionados.length > 0 &&  <div className='align-items-end  text-light' >
           <div className="row p-2 ">
                <div className="col col-md-6 ">
                  <h5>Total:</h5>
                </div>
                <div className="col col-md-4">
                  <p>${formatPriceWithCommas(totalCompra)}</p>
                </div>
             </div>
      </div>}
    </div>
  );
};
