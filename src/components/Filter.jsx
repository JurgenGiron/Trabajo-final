import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [tipo, setTipo] = useState("");
  const [color, setColor] = useState("");

  const applyFilters = () => {
    onFilter({ tipo, color });
  };

  const clearFilters = () => {
    setTipo("");
    setColor("");
    onFilter({ tipo: "", color: "" });
  };

  return (
    <div className="filter-container">
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Todos</option>
          <option value="Natural">Natural</option>
          <option value="Artificial">Artificial</option>
        </select>
      </label>

      <label>
        Color:
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Ej. Rojo"
        />
      </label>

      <button onClick={applyFilters}>Filtrar</button>
      <button onClick={clearFilters}>Limpiar Filtros</button>
    </div>
  );
};

export default Filter;
