import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { startLoading, setItemBuys } from '../../../store/slices/Tienda/TiendaSlice';
import { CarritoDesplegable } from './CarritoDesplegable';
import { formatPriceWithCommas } from '../../components/thunks';

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
    <div className="container vw-100 ms-0 ps-0 me-0 pe-0">
      <div className="row vw-100">
        <div className="col-md-7 img-prod">
          <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="img-fluid w-100 h-100" />
        </div>
        <div className="col-md-4 d-flex flex-column ms-5 mt-5 position-sticky" style={{margin: '0px', height: "100vh", position: "relative", top: '40px'}}>
          <h1>{productoSeleccionado.nombre}</h1>
          <h4 className='text-secondary'>${formatPriceWithCommas(productoSeleccionado.precio)}</h4>
          <ul className='mt-4'>
            {productoSeleccionado.descripcion.map((item, index) => (
              <li className='text-secondary mt-1' key={index}>{item}</li>
            ))}
          </ul>

          <div className='text-secondary mt-2'>
            <h4 className="d-inline">Talle: </h4>
            <h5 className="d-inline">{talle}</h5>
          </div>

          <ul className='ps-0'>
              {productoSeleccionado.talles.map((talleP, index) => (
                <div key={index} className="btn-group mt-4 " role="group" aria-label="Basic radio toggle button group" style={{ marginLeft: '15px' }}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-base"
                    id={`option${index + 4}`}
                    autoComplete="off"
                    checked={talle === talleP}
                    onChange={() => setTalle(talleP)}
                  />
                  <label className={`btn ${talle === talleP ? ' selected-talle' : 'btn-outline-secondary'}`} htmlFor={`option${index + 4}`}>
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

            <div className='p-4 vw-100'>
            <button type="button" className="btn btn-dark w-100" style={{height: '50px'}} onClick={handleAgregarAlCarrito} disabled={!talle}>Añadir al carrito</button>
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
