import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "200px" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", borderRadius: "6px" }} />
      <h3>{product.title}</h3>
      <p>R$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;

