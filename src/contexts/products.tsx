import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(undefined);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = [
      { name: "Black Tea", img: "/assets/01.png", price: 50 },
      { name: "Boboa Tea", img: "/assets/02.png", price: 100 },
      { name: "Milk Tea", img: "/assets/03.png", price: 75 },
      { name: "Black Tea D", img: "/assets/01.png", price: 55 },
      { name: "Black Tea E", img: "/assets/01.png", price: 30 },
    ];

    setTimeout(() => setProducts(products), 1000);
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
