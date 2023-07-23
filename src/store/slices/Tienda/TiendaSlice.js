import { createSlice } from '@reduxjs/toolkit';

export const TiendaSlice = createSlice({
    name: 'Tienda',
    initialState: {

       productos: [],
       listaProductos: [],
       isLoading: false,
       clienteCompra: [],
      
 },
reducers: {
  
    setDetailsBuys: (state, {payload}) => {
        state.clienteCompra = payload
     },
     setDetailsProduct: (state, {payload}) => {
        state.productos = [payload]
     },
     setItemBuys: (state, action) => {
      const { id, cantidad } = action.payload;
      const existingProduct = state.listaProductos.find((producto) => producto.id === id);
      if (existingProduct) {
        existingProduct.cantidad += cantidad;
      } else {
        state.listaProductos.push(action.payload);
      }
    },
  }
});
export const { setDetailsBuys, setDetailsProduct, setItemBuys } = TiendaSlice.actions;