import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Carrinho</h2>

      <button 
        onClick={() => navigate("/")} 
        style={{ marginBottom: "1rem" }}
      >
        ← Voltar para Home
      </button>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
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
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "1rem" }}>Remover</button>
            </div>
          ))}

          <div style={{ textAlign: "right" }}>
            <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
            <button onClick={clearCart} style={{ marginRight: "1rem" }}>Limpar carrinho</button>
            <Link to="/checkout"><button>Finalizar compra</button></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
