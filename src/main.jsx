import React from 'react'
import ReactDOM from 'react-dom/client'
import AppComponent from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from './contexts/ConfigContext.jsx'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner.jsx'
import axios from 'axios'
import './index.css'

import "react-toastify/dist/ReactToastify.css"
import { UserContextProvider } from './contexts/UserContext.jsx'

axios.defaults.baseURL = import.meta.env.VITE_APIURI || 'http://localhost:8080/api'
//TODO


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <GoogleOAuthProvider clientId='883999343789-7fs09tpcfnnkk2qhlb519l60efolj51k.apps.googleusercontent.com'>
          <UserContextProvider>
            <AppComponent />
            <ToastContainer theme='dark' position='bottom-right'/>
            {/* <LoadingSpinner />  TODO: IMPLEMENT ON components*/}
          </UserContextProvider>
        </GoogleOAuthProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)