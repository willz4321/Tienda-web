import { Link } from "react-router-dom";
import { listaProductos } from "../../assets/listaProductos";
import { setDetailsProduct } from "../../store/slices/Tienda/TiendaSlice";
import { useDispatch } from "react-redux";


export const Camisas = () => {
  const dispatch = useDispatch();

  const handleVerDetalle = (id) => {
    const productoSeleccionado = listaProductos.find((producto) => producto.id === id);
    dispatch(setDetailsProduct(productoSeleccionado));
  };
  return (
    <>
      <div className="col-lg-8">
        <div className="padding-title">
          <h1 style={{ fontSize: '4rem' }}>
            Camisas
          </h1>
        </div>
      </div>

      <div>
        <ul className="product-list">
          {listaProductos
            .filter((producto) => producto.tipo === 'camisas')
            .map((producto) => (
              <li className="product-item mt-2" key={producto.id}>
                <div className="col d-flex flex-column align-items-start">
                <Link to={`/producto/${producto.id}`}> {/* Pasar el ID del producto como parámetro de la URL */}
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="img-new"
                      onClick={() => handleVerDetalle(producto.id)}
                    />
                  </Link>
                  <div >
                    <h5 className="text-start">{producto.nombre}</h5>
                    <h6 className="text-start">${producto.precio}</h6>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
