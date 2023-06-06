import React from 'react'
import ReactDOM from 'react-dom/client'
import AppComponent from './App.jsx'
import './index.css'

import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
)
