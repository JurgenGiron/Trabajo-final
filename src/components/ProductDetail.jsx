import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-detail">
      <h3>{product.nombre}</h3>
      <img src={product.imagen} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>
        <strong>Precio:</strong> ${product.precio.toLocaleString()}
      </p>
      <p>
        <strong>Tipo:</strong> {product.tipo}
      </p>
      <p>
        <strong>Color:</strong> {product.color}
      </p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
