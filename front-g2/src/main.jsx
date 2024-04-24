import React from 'react'
import App from './App.jsx';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import Reserva from './components/reserva/Reserva.jsx' // agregado
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
)
