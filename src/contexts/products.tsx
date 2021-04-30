import { createContext, useContext, useEffect, useState } from "react";
import { getDrinks } from "../api";

const ProductContext = createContext(undefined);

function toProduct({ name, type, options }) {
  const img = "/assets/01.png";
  const price = options[0].price;

  return { name, type, img, price };
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDrinks()
      .then((data) => data.map(toProduct))
      .then(setProducts);
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
}
