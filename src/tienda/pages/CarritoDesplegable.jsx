import { useState } from "react";


export const CarritoCompra = () => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [totalAPagar, setTotalAPagar] = useState(0);

  const listaProductos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    { id: 3, nombre: 'Producto 3', precio: 20 },
    // Agrega más productos según tus necesidades
  ];

  const handleAgregarProducto = (producto) => {
    setProductosSeleccionados([...productosSeleccionados, producto]);
    setTotalAPagar(totalAPagar + producto.precio);
  };

  const handleEliminarProducto = (producto) => {
    const nuevosProductos = productosSeleccionados.filter((p) => p.id !== producto.id);
    setProductosSeleccionados(nuevosProductos);
    setTotalAPagar(totalAPagar - producto.precio);
  };

  return (
    <div>
      {/* Botón desplegable */}
      <div className="mb-3">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Carrito de Compra ({productosSeleccionados.length})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {productosSeleccionados.length === 0 ? (
            <li className="dropdown-item" disabled>No hay productos en el carrito</li>
          ) : (
            <>
              {productosSeleccionados.map((producto) => (
                <li key={producto.id} className="dropdown-item">
                  {producto.nombre} - ${producto.precio}
                  <button type="button" className="btn btn-sm btn-danger ms-2" onClick={() => handleEliminarProducto(producto)}>
                    Eliminar
                  </button>
                </li>
              ))}
              <div className="dropdown-divider"></div>
              <li className="dropdown-item">
                Total a pagar: ${totalAPagar}
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mostrar la lista de productos disponibles */}
      <div>
        <h2>Productos Disponibles</h2>
        <ul>
          {listaProductos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
              <button type="button" className="btn btn-sm btn-success ms-2" onClick={() => handleAgregarProducto(producto)}>
                Agregar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

