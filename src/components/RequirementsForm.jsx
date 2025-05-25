import React, { useState } from "react";

const RequirementsForm = ({ onStart }) => {
  const [form, setForm] = useState({
    nombre: "",
    presupuesto: "",
    direccion: "",
    entrega: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.nombre || form.nombre.length > 20)
      newErrors.nombre = "Nombre es obligatorio (máx. 20 caracteres)";
    if (
      !form.presupuesto ||
      isNaN(form.presupuesto) ||
      Number(form.presupuesto) <= 0
    )
      newErrors.presupuesto = "Presupuesto debe ser un número válido en pesos";
    if (!form.direccion) newErrors.direccion = "Dirección es obligatoria";
    if (!form.entrega) newErrors.entrega = "Selecciona un tipo de entrega";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onStart(); // pasa a vista de productos
    }
  };

  const handleReset = () => {
    setForm({ nombre: "", presupuesto: "", direccion: "", entrega: "" });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>Floristería</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            maxLength={20}
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
        </div>

        <div>
          <label>Presupuesto (COP):</label>
          <input
            type="number"
            name="presupuesto"
            value={form.presupuesto}
            onChange={handleChange}
          />
          {errors.presupuesto && (
            <span className="error">{errors.presupuesto}</span>
          )}
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
          />
          {errors.direccion && (
            <span className="error">{errors.direccion}</span>
          )}
        </div>

        <div>
          <label>Tipo de entrega:</label>
          <div>
            <label>
              <input
                type="radio"
                name="entrega"
                value="Domicilio"
                checked={form.entrega === "Domicilio"}
                onChange={handleChange}
              />
              Domicilio
            </label>
            <label>
              <input
                type="radio"
                name="entrega"
                value="Recoger en tienda"
                checked={form.entrega === "Recoger en tienda"}
                onChange={handleChange}
              />
              Recoger en tienda
            </label>
          </div>
          {errors.entrega && <span className="error">{errors.entrega}</span>}
        </div>

        <div className="button-group">
          <button type="submit">Iniciar compra</button>
          <button type="button" onClick={handleReset}>
            Limpiar campos
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequirementsForm;
