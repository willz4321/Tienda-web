
import { Route, Routes } from 'react-router-dom'
import { TiendaRoutes } from '../tienda/routes/TiendaRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='/*' element={ <TiendaRoutes/> } />
    
    </Routes>
  )
}
