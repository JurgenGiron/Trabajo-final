import React from "react";

const Navbar = ({ onCancel, onCart }) => (
  <nav className="navbar">
    <button onClick={onCancel}>Cancelar Compra</button>
    <button onClick={onCart}>Completar Compra</button>
  </nav>
);

export default Navbar;
