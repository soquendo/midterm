import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="productdetail" element={<ProductDetail />} >
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<div>Route Not Found</div>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
