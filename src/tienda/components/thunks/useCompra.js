import { useEffect, useState } from 'react';
import { compraApi } from '../../../api';

export const useCompra = () => {
  const [compra, setCompra] = useState([]);

  
  const fetchCompra = async () => {
    try {
      const response = await compraApi.get();
      setCompra(response.data);
    } catch (error) {
      console.error('Error al obtener Compras:', error);
    }
  };


  const agregarCompra = async (nuevaCompra) => {
    try {
      await compraApi.post('', nuevaCompra);
      fetchCompra();
    } catch (error) {
      console.error('Error al realizar compra:', error);
    }
  };

  
  const actualizarCompra = async (id, datosCompra) => {
    try {
      await compraApi.put(`/${id}`, datosCompra);
     
      fetchCompra();
    } catch (error) {
      console.error('Error al actualizar compra:', error);
    }
  };

  // Función para eliminar un producto
  const eliminarCompra = async (id) => {
    try {
      await compraApi.delete(`/${id}`);
      // Actualizar la lista de productos después de eliminar uno
      fetchCompra();
    } catch (error) {
      console.error('Error al eliminar la compra:', error);
    }
  };

  // Llamar a fetchProductos al montar el componente para obtener los productos iniciales
  useEffect(() => {
    fetchCompra();
  }, []);

  // Retornar las funciones y la lista de productos para que puedan ser utilizadas en el componente
  return {
    compra,
    agregarCompra,
    actualizarCompra,
    eliminarCompra,
  };
};
