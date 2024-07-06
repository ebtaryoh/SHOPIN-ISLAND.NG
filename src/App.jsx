import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => (
 <CartProvider>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  </Router>
 </CartProvider>
);

export default App;

