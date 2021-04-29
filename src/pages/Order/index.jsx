import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout } from "../../components";

import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";
import Checkout from "./Checkout";

const products = [
  { name: "Black Tea", img: "/assets/01.png", price: 50 },
  { name: "Boboa Tea", img: "/assets/02.png", price: 100 },
  { name: "Milk Tea", img: "/assets/03.png", price: 75 },
  { name: "Black Tea D", img: "/assets/01.png", price: 55 },
  { name: "Black Tea E", img: "/assets/01.png", price: 30 },
];

export default function Order() {
  const history = useHistory();
  const [orders, setOrders] = useState({});

  console.log(orders);

  const { total, count } = Object.entries(orders).reduce(
    ({ total, count }, [name, orders]) => {
      const { price } = products.find((product) => product.name === name);

      return {
        total: total + orders.length * price,
        count: count + orders.length,
      };
    },
    { total: 0, count: 0 }
  );

  function onSubmit(event) {
    event.preventDefault();

    history.push("/checkout");
  }

  return (
    <Layout>
      <form onSubmit={onSubmit} className="flex flex-col">
        <header className="bg-background z-10">
          <div className="bg-primary text-on-primary pt-1 pb-2 px-2">
            <Tabs />
          </div>

          <Products products={products} orders={orders} setOrders={setOrders} />
        </header>

        <main className="flex-1 px-2">
          <Orders orders={orders} setOrders={setOrders} />
        </main>

        {count > 0 && (
          <footer className="bg-background text-on-primary border-t-8 border-primary px-8 py-4">
            <Checkout total={total} count={count} />
          </footer>
        )}
      </form>
    </Layout>
  );
}
