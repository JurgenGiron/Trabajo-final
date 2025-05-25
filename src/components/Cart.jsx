// components/Cart.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = ({ onBack, onCancel }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [confirmado, setConfirmado] = useState(false);
  const [error, setError] = useState("");
  const [compraRealizada, setCompraRealizada] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.precio, 0);
  const cargoDomicilio = 10000;
  const totalConDomicilio = total + cargoDomicilio;

  const handleCompra = (tarjetaInfo) => {
    if (!tarjetaInfo.valid) {
      setError("Información de la tarjeta inválida.");
      return;
    }

    const presupuestoMax = 1000000; // Simulación (se debería traer de contexto o props)
    if (totalConDomicilio > presupuestoMax) {
      setError("Se ha superado el presupuesto máximo.");
      return;
    }

    setConfirmado(true);
    setTimeout(() => {
      setCompraRealizada(true);
      clearCart();
    }, 1500);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compra</h2>
      <div className="navbar">
        <button onClick={onCancel}>Cancelar Compra</button>
        <button onClick={onBack}>Seguir Comprando</button>
      </div>

      {cart.length === 0 && !compraRealizada && (
        <p>No hay productos en el carrito.</p>
      )}
      {compraRealizada && (
        <p>
          ✅ ¡Compra realizada con éxito! Gracias por confiar en nuestra
          floristería.
        </p>
      )}

      {cart.length > 0 && (
        <>
          <div className="cart-table">
            {cart.slice(0, 20).map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </div>

          <div className="cart-summary">
            <p>Total productos: {cart.length}</p>
            <p>Subtotal: ${total.toLocaleString()}</p>
            <p>Cargo domicilio: ${cargoDomicilio.toLocaleString()}</p>
            <p>
              <strong>Total: ${totalConDomicilio.toLocaleString()}</strong>
            </p>
          </div>

          <CheckoutForm onConfirm={handleCompra} confirmado={confirmado} />
          {error && <p className="error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default Cart;
