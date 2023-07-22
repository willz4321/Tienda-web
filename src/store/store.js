import { configureStore } from '@reduxjs/toolkit'
import { TiendaSlice } from './slices/Tienda/TiendaSlice'


export const store = configureStore({
  reducer: {
    Tienda: TiendaSlice.reducer
  },
})