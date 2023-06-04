import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { TiendaRoutes } from '../tienda/routes/TiendaRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='/auth/*' element={ <AuthRoutes/> } />

        <Route path='/*' element={ <TiendaRoutes/> } />
    
    </Routes>
  )
}
