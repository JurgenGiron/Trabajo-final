import React from "react";

const CartItem = ({ item, onRemove }) => (
  <div className="cart-item">
    <img src={item.imagen} alt={item.nombre} width="60" />
    <div className="info">
      <p>
        <strong>{item.nombre}</strong>
      </p>
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio.toLocaleString()}</p>
    </div>
    <button onClick={onRemove}>Eliminar</button>
  </div>
);

export default CartItem;
