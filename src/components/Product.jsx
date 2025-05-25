import React from "react";

const Product = ({ product, onSelect }) => (
  <div className="product-card">
    <img src={product.imagen} alt={product.nombre} />
    <h4>{product.nombre}</h4>
    <p>{product.descripcion}</p>
    <p>
      <strong>${product.precio.toLocaleString()}</strong>
    </p>
    <button onClick={onSelect}>Ver detalle</button>
  </div>
);

export default Product;
