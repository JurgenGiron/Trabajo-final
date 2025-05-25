import React, { useState, useEffect } from "react";
import productsData from "../data/products";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Filter from "./Filter";
import Navbar from "./Navbar";

const ProductList = ({ onGoToCart, onCancel }) => {
  const [productsShown, setProductsShown] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({ tipo: "", color: "" });
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [hasMore, setHasMore] = useState(true);

  const ITEMS_PER_LOAD = 15;

  const loadMore = () => {
    const nextBatch = filteredProducts.slice(
      nextIndex,
      nextIndex + ITEMS_PER_LOAD
    );
    setProductsShown((prev) => [...prev, ...nextBatch]);
    setNextIndex((prev) => prev + ITEMS_PER_LOAD);
    if (nextIndex + ITEMS_PER_LOAD >= filteredProducts.length)
      setHasMore(false);
  };

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      if (hasMore) loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleFilter = (filtrosAplicados) => {
    setFilters(filtrosAplicados);
    const filtrados = productsData.filter(
      (p) =>
        (!filtrosAplicados.tipo || p.tipo === filtrosAplicados.tipo) &&
        (!filtrosAplicados.color ||
          p.color.toLowerCase().includes(filtrosAplicados.color.toLowerCase()))
    );
    setFilteredProducts(filtrados);
    setProductsShown([]);
    setNextIndex(0);
    setHasMore(true);
  };

  return (
    <div>
      <Navbar onCancel={onCancel} onCart={onGoToCart} />
      <h2>Productos - Floristería</h2>
      <Filter onFilter={handleFilter} />

      <div className="products-layout">
        <div className="products-scroll">
          {productsShown.map((product) => (
            <Product
              key={product.id}
              product={product}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
          {!hasMore && <p>No hay más productos para mostrar.</p>}
        </div>

        <div className="product-detail-section">
          {selectedProduct ? (
            <ProductDetail product={selectedProduct} />
          ) : (
            <p>Selecciona un producto para ver los detalles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
