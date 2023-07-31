import { createSlice } from '@reduxjs/toolkit';

export const TiendaSlice = createSlice({
  name: 'Tienda',
  initialState: {

    productos: [],

    clienteCompra: {
      
      listaProductos: [],
      datosCompra: {

        direccion: {
          calle: '',
          hogar: '',
          cp: '',
          provincia: '',
          localidad: ''
        }
      }
    },

    tipoProducto: ''
  },
  reducers: {

    tipoProductoSelect: (state, action) => {
        state.tipoProducto =action.payload;
     },
    setDetailsBuys: (state, { payload }) => {


      state.clienteCompra.datosCompra.direccion.calle = payload.direccion;
      state.clienteCompra.datosCompra.direccion.hogar = payload.tipoHogar;
      state.clienteCompra.datosCompra.direccion.cp = payload.codigoPostal;
      state.clienteCompra.datosCompra.direccion.provincia = payload.regionProvincia;
      state.clienteCompra.datosCompra.direccion.localidad = payload.localidad;

      // Asignar los demás datos del cliente
      state.clienteCompra.datosCompra.nombre = payload.nombre;
      state.clienteCompra.datosCompra.apellido = payload.apellido;
      state.clienteCompra.datosCompra.telefono = payload.telefono;
      state.clienteCompra.datosCompra.correoElectronico = payload.correoElectronico;
    },
    setDetailsProduct: (state, { payload }) => {
      state.productos = [payload];
    },
    setItemBuys: (state, action) => {
      // Lógica para agregar un producto al clienteCompra
      const { id, talle, cantidad } = action.payload;
      const existingProduct = state.clienteCompra.listaProductos.find(
        (producto) => producto.id === id && producto.talle === talle
      );
    
      if (existingProduct) {
        existingProduct.cantidad += cantidad;
      } else {
        state.clienteCompra.listaProductos.push(action.payload);
      }
    },
    removeItemFromBuys: (state, action) => {
      const { id, talle } = action.payload;
      state.clienteCompra.listaProductos = state.clienteCompra.listaProductos.filter(
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
  startLoading, 
  tipoProductoSelect
} = TiendaSlice.actions;
