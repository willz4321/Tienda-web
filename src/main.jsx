import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tienda } from './Tienda.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Tienda />
    </BrowserRouter>
  </React.StrictMode>
  
)
