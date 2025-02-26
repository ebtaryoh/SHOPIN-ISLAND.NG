import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail"
import RootLayout from "./layouts/RootLayout";
import CartTab from "./components/CardTab";
import Checkout from "./components/Checkout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Detail />} />
        <Route path="/cart" element={<CartTab />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
