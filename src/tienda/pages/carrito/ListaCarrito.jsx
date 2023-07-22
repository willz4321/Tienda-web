import { useSelector } from "react-redux";

export const ListaCarrito = () => {
    const productosSeleccionados = useSelector((state) => state.Tienda.listaProductos);
  
    return (
      <div>
        <div className="lista-carrito-izquierda">
          {productosSeleccionados.map((producto) => (
            <div key={producto.nombre} className="producto-carrito">
              <span>{producto.nombre}</span>
              <span>Cantidad: {producto.cantidad}</span>
              <span>Precio: ${producto.precio * producto.cantidad}</span>
            </div>
          ))}
        </div>
        <div className="lista-carrito-derecha">
          {/* Aquí irá el total del carrito y el botón "Finalizar compra" */}
        </div>
      </div>
    );
  };
  