import React, { useState } from "react";

const CheckoutForm = ({ onConfirm, confirmado }) => {
  const [form, setForm] = useState({
    numero: "",
    expiracion: "",
    cvv: "",
    nombre: "",
  });

  const [mostrarCVV, setMostrarCVV] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const limpiar = () => {
    setForm({ numero: "", expiracion: "", cvv: "", nombre: "" });
  };

  const validar = () => {
    const cvvValido = /^[0-9]{3}$/.test(form.cvv);
    const fechaValida = /^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiracion);
    const numeroValido = /^[0-9]{16}$/.test(form.numero);
    const nombreValido = form.nombre.trim().length > 0;
    return numeroValido && fechaValida && cvvValido && nombreValido;
  };

  const handleSubmit = () => {
    const valid = validar();
    onConfirm({ ...form, valid });
  };

  return (
    <div className="checkout-form">
      <h3>Información de Tarjeta</h3>

      <input
        name="numero"
        placeholder="Número de tarjeta (16 dígitos)"
        value={form.numero}
        maxLength={16}
        onChange={handleChange}
      />
      <input
        name="expiracion"
        placeholder="MM/AA"
        value={form.expiracion}
        onChange={handleChange}
      />
      <div className="cvv-section">
        <input
          type={mostrarCVV ? "text" : "password"}
          name="cvv"
          placeholder="CVV"
          maxLength={3}
          value={form.cvv}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setMostrarCVV(!mostrarCVV)}>
          {mostrarCVV ? "🙈" : "👁"}
        </button>
      </div>
      <input
        name="nombre"
        placeholder="Nombre del titular"
        value={form.nombre}
        onChange={handleChange}
      />

      <div className="button-group">
        <button type="button" onClick={limpiar}>
          Limpiar
        </button>
        <button type="button" onClick={handleSubmit} disabled={confirmado}>
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
