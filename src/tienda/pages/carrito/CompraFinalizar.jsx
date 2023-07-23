import { useSelector } from "react-redux";
import { formatPriceWithCommas } from "../../components/thunks";
import { useFormLogic } from "./carritoLogica";
import { provinciasArgentina } from "./provinciasDatos";

export const CarritoCompra = () => {

    const { formData, handleChange, handleSubmit } = useFormLogic();
    const productosSeleccionados = useSelector((state) => state.Tienda.listaProductos);  

  return (
    <div className="container">
      <h1>Carrito de Compra</h1>
      <div className="row">
      <div className="col-md-7">
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección de Calle</label>
          <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoHogar" className="form-label">Tipo de Hogar</label>
          <select className="form-control" id="tipoHogar" name="tipoHogar" value={formData.tipoHogar} onChange={handleChange} required>
            <option value="">Seleccionar tipo de hogar</option>
            <option value="apartamento">Apartamento</option>
            <option value="departamento">Departamento</option>
            <option value="casa">Casa</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
          <input type="text" className="form-control" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required />
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
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="correoElectronico" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="correoElectronico" name="correoElectronico" value={formData.correoElectronico} onChange={handleChange} required />
        </div>  
        <button type="submit" className="btn btn-primary">Enviar</button>
       </form>
      </div>

      <div className="col-md-5">
      <div className="list-group">
        {productosSeleccionados.map((producto) => (
          <div key={producto.nombre} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={producto.imagen} alt={producto.nombre} className="img-listBuys" />
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
      </div>
      </div>
    
    </div>
  );
};

