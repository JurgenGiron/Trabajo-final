// data/products.js
const products = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  nombre: `Ramo de Flores ${i + 1}`,
  descripcion: "Hermoso ramo de flores frescas, ideal para cualquier ocasión.",
  imagen: "https://via.placeholder.com/150",
  precio: 35000 + (i % 10) * 1000,
  tipo: i % 2 === 0 ? "Natural" : "Artificial",
  color: ["Rojo", "Amarillo", "Rosa", "Blanco"][i % 4],
}));

export default products;
