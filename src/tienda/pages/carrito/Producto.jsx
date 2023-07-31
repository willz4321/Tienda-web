import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { startLoading, setItemBuys } from '../../../store/slices/Tienda/TiendaSlice';
import { CarritoDesplegable } from './CarritoDesplegable';

export const Producto = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productos = useSelector((state) => state.Tienda.productos);
  const productosLista = useSelector((state) => state.Tienda.clienteCompra.listaProductos);
  const [cantidad, setCantidad] = useState(1);
  const [talle, setTalle] = useState('');
  const [showCarrito, setShowCarrito] = useState(false);

  const handleCantidadChange = (action) => {
    if (action === 'incrementar') {
      setCantidad((prevCantidad) => prevCantidad + 1);
    } else if (action === 'reducir' && cantidad > 1) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };
  
  const handleCarritoToggle = () => {
    setShowCarrito((prevState) => !prevState);
  };
  // Buscar el producto con el ID correspondiente en el estado de Redux
  const productoSeleccionado = productos.find((producto) => producto.id === parseInt(id));

  useEffect(() => {
    // Verificar si el producto seleccionado está disponible antes de continuar
    if (productos.length == 0) {
      startLoading();
    }
  }, [productos]);


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
    handleCarritoToggle();
  };


  return (
    <>
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
              {productoSeleccionado.talles.map((talleP, index) => (
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
  );
};
