import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
    <App />
 </BrowserRouter>
    
  
)
