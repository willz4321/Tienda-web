import { useSelector } from "react-redux";
import { formatPriceWithCommas } from '../../components/thunks';

export const CarritoDesplegable = () => {
  const productosSeleccionados = useSelector((state) => state.Tienda.listaProductos);

  return (
    <div>
      <div className="list-group" >
        {productosSeleccionados.map((producto) => (
          <div key={producto.nombre} className="list-group-item" style={{backgroundColor: '#323232'}}>
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
      
    </div>
  );
};
