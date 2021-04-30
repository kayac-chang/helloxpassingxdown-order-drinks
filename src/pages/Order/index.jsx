import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Layout } from "../../components";

import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";
import Checkout from "./Checkout";
import { useProducts } from "../../contexts/products";

export default function Order() {
  const { product } = useParams();
  const products = useProducts();
  const [orders, setOrders] = useState({});

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
            <Tabs types={[...new Set(products.map(({ type }) => type))]} />
          </div>

          <Products
            products={products.filter(({ type }) => type === product)}
            orders={orders}
            setOrders={setOrders}
          />
        </header>

        <main className="flex-1 px-2">
          <Orders orders={orders} setOrders={setOrders} />
        </main>

        <footer>
          <Checkout orders={orders} products={products} />
        </footer>
      </form>
    </Layout>
  );
}
