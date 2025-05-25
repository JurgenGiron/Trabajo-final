import React, { useState } from "react";
import RequirementsForm from "./components/RequirementsForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./styles.css";

function App() {
  const [view, setView] = useState("requirements");

  return (
    <CartProvider>
      {view === "requirements" && (
        <RequirementsForm onStart={() => setView("products")} />
      )}
      {view === "products" && (
        <ProductList
          onGoToCart={() => setView("cart")}
          onCancel={() => setView("requirements")}
        />
      )}
      {view === "cart" && (
        <Cart
          onBack={() => setView("products")}
          onCancel={() => setView("requirements")}
        />
      )}
    </CartProvider>
  );
}

export default App;
