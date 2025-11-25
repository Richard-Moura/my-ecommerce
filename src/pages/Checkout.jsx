import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinish = () => {
    alert("Compra finalizada com sucesso!");
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Checkout</h2>
      <p>Seu carrinho está vazio.</p>
      <button onClick={() => navigate("/")}>← Voltar para Home</button>
    </div>
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Checkout</h2>

      {cart.map(item => (
        <div key={item.id} style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "1rem",
          backgroundColor: "#fff"
        }}>
          <img src={item.thumbnail} alt={item.title} style={{ width: "70px", borderRadius: "6px", marginBottom: "0.5rem" }} />
          <div style={{ flex: 1, marginLeft: "1rem" }}>
            <p style={{ margin: 0 }}>{item.title}</p>
            <p style={{ margin: 0 }}>R$ {item.price} x {item.quantity}</p>
          </div>
        </div>
      ))}

      <p style={{ textAlign: "right" }}><strong>Total: R$ {total.toFixed(2)}</strong></p>

      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <button onClick={handleFinish} style={{ marginRight: "1rem" }}>Finalizar compra</button>
        <button onClick={() => navigate("/")}>← Voltar para Home</button>
      </div>
    </div>
  );
};

export default Checkout;
