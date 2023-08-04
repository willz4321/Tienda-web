import { Link, Navigate } from "react-router-dom";
import { formatPriceWithCommas } from "../../components/thunks";
import { useSelector } from "react-redux";
import { useFormLogic } from "./carritoLogica";
import { useEffect, useState } from "react";

export const DetallesCompra = () => {
  const { handleFormSubmit, handleResetClienteCompra } = useFormLogic();
  const productosSeleccionados = useSelector((state) => state.Tienda.clienteCompra.listaProductos); 
  const formData = useSelector((state) => state.Tienda.clienteCompra.datosCompra);
  const [redirectToTienda, setRedirectToTienda] = useState(false);
  const totalCompra = productosSeleccionados.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

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
    <div className="container vh-100">
      <h1 className="pt-4">Detalles de la compra</h1>
      <div className="row">
        <div className="col-md-7 pt-4 card text-bg-light mb-3 card-header vh-50" style={{maxHeight: '460px', overflow: 'auto' }}>
          <Link type="button" className="link-info d-flex justify-content-end text-decoration-none" to="/carrito">
            Editar
          </Link>
          <h4>Datos de facturación:</h4>
          <p>
            Nombre: {formData.nombre} {formData.apellido}
          </p>
          <p>Dirección de Calle: {formData.direccion.calle}</p>
          <p>Tipo de Hogar: {formData.direccion.hogar}</p>
          <p>Código Postal: {formData.direccion.cp}</p>
          <p>Región/Provincia: {formData.direccion.provincia}</p>
          <p>Localidad: {formData.direccion.localidad}</p>
          <p>Teléfono: {formData.telefono}</p>
          <p>Correo Electrónico: {formData.correoElectronico}</p>
          <p>Comentarios o Detalles de Compra: {formData.direccion.comentarios}</p>
        </div>
        <div className="col-md-5 mx-auto mt-5" style={{maxHeight: '460px'}}>
          <div className="list-group h-75 overflow-auto">
            <h4>Productos seleccionados:</h4>
            {productosSeleccionados.map((producto) => (
              <div key={producto.nombre} className=" list-group-item justify-content-between border-bottom-0 border-top-0 ">
                <div className="row align-items-center ">
                  <div className="col-md-3">
                    <img src={producto.imagen} alt={producto.nombre} className="img-listBuys" />
                  </div>
                  <div className="col-md-6">
                    <div>
                      <h6 className="d-flex ">{`${producto.nombre} - ${producto.talle}`}</h6>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <p>{producto.cantidad}</p>
                  </div>
                  <div className="col-md-1">
                    <p>${formatPriceWithCommas(producto.precio * producto.cantidad)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="list-group-item align-items-end">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h6>Total:</h6>
              </div>
              <div className="col-md-6">
                <p>${formatPriceWithCommas(totalCompra*0.95)} (Con 5% de desc.)</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-star p-2">
            <button className="col-3 btn btn-dark m-2 p-0 h-100" onClick={handleResetClienteCompra}>
              <Link className="btn-link d-block w-100 h-100"
              to="/"
               style={{ textDecoration: 'none', color: 'white' }}>
                Anular compra
              </Link>
            </button>
            <button className="col-3 btn btn-secondary m-2 p-0 h-100" onClick={handleFormSubmit}>
              <Link className="btn-link d-block w-100 h-100"
              to={{pathname: "/",state: { formData, productosSeleccionados }}}
               style={{ textDecoration: 'none', color: 'white' }}>
                Enviar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


