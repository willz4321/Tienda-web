


import { setDetailsProduct } from '../../../store/slices/Tienda/TiendaSlice';

export const getProducto = () => async () => {
  try {
    // Simulación de obtener los datos de los productos de una API
    const response = await fetch(setDetailsProduct);
    const data = await response.json();
    console.log(data);
    
    // Después de obtener los datos de la API, despachamos la acción del reducer para actualizar el estado con los productos
  } catch (error) {
    console.error('Error al obtener los productos desde la API:', error);
  }
};


