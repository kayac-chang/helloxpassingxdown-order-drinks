import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";

import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";
import Checkout from "./Checkout";
import { useProducts } from "../../contexts/products";
import { useOrderState } from "../../contexts/orders";

export default function Order() {
  const products = useProducts();
  const orders = useOrderState();

  if (products.length <= 0) {
    return <Layout></Layout>;
  }

  return (
    <Layout>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex flex-col"
      >
        <header className="bg-background z-10">
          <div className="bg-primary text-on-primary pt-1 pb-2 px-2">
            <Tabs products={products} />
          </div>

          <Products products={products} orders={orders} />
        </header>

        <main className="flex-1 px-2">
          <Orders orders={orders} />
        </main>

        <footer>
          <Checkout orders={orders} products={products} />
        </footer>
      </form>
    </Layout>
  );
}
