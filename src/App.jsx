import React from "react";
import { Routes, Route } from "react-router-dom";  // Apenas importa as rotas aqui
import CartProvider from "./context/CartProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>  {/* Apenas as rotas, sem o Router */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
