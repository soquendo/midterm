import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Products from './components/Products.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import ReduxStore from './redux/ReduxStore.js';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxStore>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="productdetail" element={<ProductDetail />}>
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="shoppingcart" element={<ShoppingCart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<div>Route Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxStore>
  </React.StrictMode>,
)
