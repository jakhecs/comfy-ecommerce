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
  Private,
  SingleProduct,
  AuthWrapper,
} from "./pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route
            exact
            path="/checkout"
            element={
              <Private>
                <Checkout />
              </Private>
            }
          />

          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
