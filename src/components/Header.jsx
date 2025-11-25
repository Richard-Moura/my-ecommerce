import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  // Contador de itens no carrinho
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Minha Loja
        </Link>

        <Link to="/cart" style={cartStyle}>
          🛒 Carrinho ({totalItems})
        </Link>
      </div>
    </header>
  );
};

// --- ESTILOS ---
const headerStyle = {
  position: "fixed",   // fixo no topo
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "1rem 0",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  zIndex: 1000,
};

const containerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
};

const cartStyle = {
  fontSize: "1rem",
  color: "#fff",
  textDecoration: "none",
};

export default Header;

