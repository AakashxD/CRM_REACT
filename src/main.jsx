import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './Reducers/AuthReducer.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  </BrowserRouter>
)
