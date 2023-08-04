import { useDispatch } from "react-redux";
import { formatPriceWithCommas, useProducto } from "../components/thunks";
import { setDetailsProduct } from "../../store/slices/Tienda/TiendaSlice";
import { Link } from "react-router-dom";



export const TiendaPage = () => {

   const dispatch = useDispatch();
   const listaProductos = useProducto();
   const handleVerDetalle = (id) => {
      const productoSeleccionado = listaProductos.find((producto) => producto.id === id);
      dispatch(setDetailsProduct(productoSeleccionado));
    };
  return (

    <>

   <div>
    <div>
      <img src="../src/assets/tienda-img1.png" alt="diseño1" style={{width: "99vw"}}/>
    </div>
   </div>

    <div style={{backgroundColor: "black"}}>
        <div className="container text-white  p-5 mt-5 mb-5" >
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-2">
        <h4 style={{textAlign: 'center'}}>HECHO EN ARGENTINA</h4>
        </div>
        <div className="col-3">
       <h4 style={{textAlign: 'center'}}>COMPRÁ EN HASTA 6 CUOTAS SIN INTERÉS</h4> 
        </div>
        <div className="col-2">
        <h4 style={{textAlign: 'center'}}>ENVÍOS A TODO EL PAÍS</h4>
        </div>
      </div>
     </div>
    </div>

    <div className="closs mb-5 pe-2">
      <ul className="row product-list">
          {listaProductos
            .filter((producto) => producto.tipo === 'saleFor')
            .map((producto) => (
              <li className="product-item text-relative mt-2" key={producto.id}>
                <div className="col d-flex flex-column align-items-center">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="img-new"   
                    />
                  <div className="text-link">
                    <h2 className="text-center">{producto.nombre}</h2>
                    <Link to={`/producto/${producto.id}`}>
                    <button type="button" className="btn btn-light img-store-s" onClick={() => handleVerDetalle(producto.id)}>COMPRAR</button>
                    </Link>
                    
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>

    <div>
      <div>
         <img src="../src/assets/tienda-img2.png" alt="font2" style={{width: "99vw"}} />
      </div>
    </div>

    <div>
      <div>
         <h3>
             Nuevos productos
         </h3>
      </div>

      <div>
  <div className="container me-0 ms-0">
    <div className="row vw-100">
      {listaProductos
        .filter((producto) => producto.tipo === 'new')
        .map((producto) => (
          <div className="col col-3 mb-5" key={producto.id}>
            <div className="d-flex flex-column align-items-start">
              <Link to={`/producto/${producto.id}`}>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-new"
                  onClick={() => handleVerDetalle(producto.id)}
                />
              </Link>
              <div className="mt-2">
                <h5 className="text-start">{producto.nombre}</h5>
                <h6 className="text-start text-secondary">${formatPriceWithCommas(producto.precio)}</h6>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>


    </div>

    <div style={{backgroundColor: "black"}}>
        <div className="container text-white p-5 mt-5 mb-5" >
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col">
        <div>
         <h4>TIENDA</h4>
         </div>
         <div>
            <h4 style={{textAlign: 'center'}}>HORARIOS DE ATENCIÓN LUNES A VIERNES: 11 A 19 HS SÁBADOS: 13 A 19 HS</h4>
         </div>
        </div>

        <div className="col">
         <div>
            <h4 style={{textAlign: 'center'}}>DESPACHOS</h4> 
         </div>
         <div>
            <h4 style={{textAlign: 'center'}}>
            LOS PEDIDOS SE DESPACHAN DE LUNES A VIERNES 
            </h4> 
         </div>
            <div>
            <h4 style={{textAlign: 'center'}}>
            CABA Y GBA: ENTREGA EN 24HS
            </h4> 
            </div>
        </div>

      </div>
     </div>
    </div>
    
    <div className="sec_row container-fluid"><div className="vc_row wpb_row vc_row-fluid no-padding"><div className="wpb_column vc_column_container vc_col-sm-12 et-dark-column"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_gmaps_widget wpb_content_element"><div className="wpb_wrapper"><div className="wpb_map_wraper"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.029815560024!2d-58.404398290317644!3d-34.59751585452102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca919e227429%3A0xd40839a1300252b8!2sParaguay%202488%2C%20C1121ABN%20CABA!5e0!3m2!1ses-419!2sar!4v1682689555589!5m2!1ses-419!2sar" width="100%" height="300" style={{ border: "0px", pointerEvents: "none" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div></div></div></div></div></div></div></div>

         
    </>


  )
}
