import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tienda } from './Tienda.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Tienda />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
)
