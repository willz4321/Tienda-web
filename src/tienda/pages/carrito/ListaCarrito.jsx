import { useSelector } from "react-redux";
import { formatPriceWithCommas } from '../../components/thunks';

export const ListaCarrito = () => {
  const productosSeleccionados = useSelector((state) => state.Tienda.listaProductos);

  return (
    <div>
      <div className="list-group lista-carrito-izquierda">
        {productosSeleccionados.map((producto) => (
          <div key={producto.nombre} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={producto.imagen} alt={producto.nombre} className="img-listBuys" />
              </div>
              <div className="col-md-3">
                <div>
                  <h6 className="d-flex">{`${producto.nombre} - ${producto.talle}`}</h6>
                </div>
              </div>
              <div className="col-md-2">
                <p>{producto.cantidad}</p>
              </div>
              <div className="col-md-3">
                <p>${formatPriceWithCommas(producto.precio * producto.cantidad)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lista-carrito-derecha">
        {/* Aquí irá el total del carrito y el botón "Finalizar compra" */}
      </div>
    </div>
  );
};
