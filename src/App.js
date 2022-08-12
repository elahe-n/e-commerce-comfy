import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  Home,
  Auth,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
  AuthWrapper,
} from "./pages/index";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<Auth />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
