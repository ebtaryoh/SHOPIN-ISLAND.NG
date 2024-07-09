import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import RootLayout from "./layouts/RootLayout";
import CartPage from "./components/CartPage";
import store from "../src/stores";
import { Provider } from "react-redux";
import CartTab from "./components/CartTab";
import Detail from "./pages/Detail";
import CheckoutPage from "./components/CheckoutPage";

const App = () => (
  <Provider store={store}>
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:slug" element={<Detail />} />
            <Route path="/cart1" element={<CartTab />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  </Provider>
);

export default App;
