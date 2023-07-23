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
    setDetailsBuys: (state, { payload }) => {
      state.clienteCompra = payload;
    },
    setDetailsProduct: (state, { payload }) => {
      state.productos = [payload];
    },
    setItemBuys: (state, action) => {
      const { id, talle, cantidad } = action.payload;
      const existingProduct = state.listaProductos.find(
        (producto) => producto.id === id && producto.talle === talle
      );

      if (existingProduct) {
        existingProduct.cantidad += cantidad;
      } else {
        state.listaProductos.push(action.payload);
      }
    },
    removeItemFromBuys: (state, action) => {
      const { id, talle } = action.payload;
      state.listaProductos = state.listaProductos.filter(
        (producto) => producto.id !== id || producto.talle !== talle
      );
    },
  },
});

export const {
  setDetailsBuys,
  setDetailsProduct,
  setItemBuys,
  removeItemFromBuys,
} = TiendaSlice.actions;
