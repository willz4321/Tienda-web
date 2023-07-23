import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , useParams } from 'react-router-dom';
import { setItemBuys } from '../../../store/slices/Tienda/TiendaSlice';

export const Producto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const productos = useSelector((state) => state.Tienda.productos);
  const [cantidad, setCantidad] = useState(1);
  const [talle, setTalle] = useState('');

  const handleCantidadChange = (action) => {
    if (action === 'incrementar') {
      setCantidad((prevCantidad) => prevCantidad + 1);
    } else if (action === 'reducir' && cantidad > 1) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };
  
  // Buscar el producto con el ID correspondiente en el estado de Redux
  const productoSeleccionado = productos.find((producto) => producto.id === parseInt(id));

  const handleAgregarAlCarrito = () => {
    const productoParaCarrito = { 
      id : productoSeleccionado.id,
      nombre : productoSeleccionado.nombre,
      precio :  productoSeleccionado.precio,
      imagen :  productoSeleccionado.imagen,
      cantidad, // Agrega la cantidad si también la necesitas en el carrito
      talle
     }
      
    dispatch(setItemBuys(productoParaCarrito));
    navigate('/listaCompra');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{productoSeleccionado.nombre}</h2>
          <p>Precio: ${productoSeleccionado.precio}</p>
          <h4>Descripción:</h4>
          <ul>
            {productoSeleccionado.descripcion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>Talle: {talle}</h4>
          <ul>
              {productoSeleccionado.talle.map((talleP, index) => (
                <div key={index} className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ marginLeft: '15px' }}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id={`btnradio${index + 1}`}
                    autoComplete="off"
                    checked={talle === talleP}
                    onChange={() => setTalle(talleP)}
                  />
                  <label className={`btn btn-outline-primary ${talle === talleP ? 'active' : ''}`} htmlFor={`btnradio${index + 1}`}>
                    {talleP}
                  </label>
                </div>
              ))}
            </ul>


          <div className="d-flex align-items-center">
            <div className="quantity d-flex align-items-center">
              <span onClick={() => handleCantidadChange('reducir')} style={{ cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
              <input
                type="number"
                id="quantity_64bae375bb7b4"
                className="input-text qty text"
                name="quantity"
                value={cantidad}
                aria-label="Cantidad de productos"
                size="4"
                min="1"
                max="3"
                step="1"
                placeholder=""
                inputMode="numeric"
                autoComplete="off"
                readOnly
              />
              <span onClick={() => handleCantidadChange('incrementar')} style={{ cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </div>

            <div className='p-4'>
            <button className="btn btn-success" onClick={handleAgregarAlCarrito} disabled={!talle}>Añadir al carrito</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
