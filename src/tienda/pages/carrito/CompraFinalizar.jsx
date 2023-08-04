import { useSelector } from "react-redux";
import { formatPriceWithCommas } from "../../components/thunks";
import { useFormLogic } from "./carritoLogica";
import { provinciasArgentina } from "./provinciasDatos";

import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";



export const CompraFinalizar = () => {

    const { formData, handleChange, handleSubmit, redirectToDetails } = useFormLogic();
    const productosSeleccionados = useSelector((state) => state.Tienda.clienteCompra.listaProductos);  
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
    if (redirectToDetails) {
      return <Navigate to="/details" />;
    }
  
  return (
    <div className="container-fluid vh-100">
     <h1 className="pt-4">Detalles de facturacion</h1>
      <div className="row">
            
      <div className="col-md-7 pt-4">
      <form  onSubmit={handleSubmit}>

        <div className="row mb-3">
      <div className="col">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div className="col">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
            <label htmlFor="direccion" className="form-label">Dirección de Calle</label>
            <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
          </div>
          <div className="col-4">
          <label htmlFor="tipoHogar" className="form-label">Tipo de Hogar</label>
          <select className="form-control" id="tipoHogar" name="tipoHogar" value={formData.tipoHogar} onChange={handleChange} required>
            <option value="">Seleccionar tipo de hogar</option>
            <option value="apartamento">Apartamento</option>
            <option value="departamento">Departamento</option>
            <option value="casa">Casa</option>
          </select>
        </div>
        <div className="col mb-1">
          <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
          <input type="text" className="form-control" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required />
        </div>
      </div>
        
        
       
        <div className="mb-3">
          <label htmlFor="regionProvincia" className="form-label">Región/Provincia</label>
          <select className="form-control" id="regionProvincia" name="regionProvincia" value={formData.regionProvincia} onChange={handleChange} required>
            <option value="">Seleccionar región/provincia</option>
            {provinciasArgentina.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="localidad" className="form-label">Localidad</label>
          <input type="text" className="form-control" id="localidad" name="localidad" value={formData.localidad} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="correoElectronico" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="correoElectronico" name="correoElectronico" value={formData.correoElectronico} onChange={handleChange} required />
        </div>  
        <div className="mb-3">
          <label htmlFor="comentarios" className="form-label">Comentarios o Detalles de Compra</label>
          <textarea className="form-control" id="comentarios" name="comentarios" value={formData.comentarios} onChange={handleChange}></textarea>
        </div>
        <div className="row justify-content-between p-3">
                
                <button  type="submit" className="col-8 btn btn-dark rounded-0 " >Procesar pedido</button>
               
              
                  <button type="button"  className="col-3 btn btn-secondary rounded-0 p-0 ">
                    <Link to="/tienda" className="btn-link d-block w-100"
                      style={{textDecoration: 'none',
                              color: 'white'}}>
                        Volver
                    </Link>
          </button>  
             </div>
       </form>
      </div>

      <div className="col-md-5 mx-auto mt-5" style={{height: '75vh'}}>
      <div className="list-group h-75 overflow-auto">
        {productosSeleccionados.map((producto) => (
          <div key={producto.nombre} className="list-group-item justify-content-between">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={producto.imagen} alt={producto.nombre}  className="img-listBuys" />
              </div>
              <div className="col-md-6">
                <div>
                  <h6 className="d-flex">{`${producto.nombre} - ${producto.talle}`}</h6>
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
         {/* Muestra el total de la compra */}
         <div className="list-group-item align-items-end">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h6>Total:</h6>
                </div>
                <div className="col-md-6">
                  <p>${formatPriceWithCommas(totalCompra)}</p>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    
    </div>
  );
};

