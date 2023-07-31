import { useEffect, useState } from 'react';
import { productosApi } from '../../../api'

export const useProducto = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await productosApi.get(); // Aquí se utiliza .get() para hacer la solicitud GET
        setListaProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return listaProductos;
};