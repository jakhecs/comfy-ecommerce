import React from "react";
import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Cart,
  About,
  Checkout,
  Error,
  Products,
  PrivateRoute,
  SingleProduct,
} from "./pages";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
