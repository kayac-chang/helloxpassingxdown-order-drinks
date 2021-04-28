import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout } from "../../components";

import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";
import Checkout from "./Checkout";

const products = [
  { name: "Black Tea A", img: "/assets/01.png", price: 50 },
  { name: "Boboa Tea B", img: "/assets/02.png", price: 100 },
  { name: "Milk Tea C", img: "/assets/03.png", price: 75 },
  { name: "Black Tea D", img: "/assets/blacktea.png", price: 55 },
  { name: "Black Tea E", img: "/assets/blacktea.png", price: 30 },
];

export default function Order() {
  const history = useHistory();
  const [orders, setOrders] = useState({});

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

        <footer className="bg-background text-on-primary border-t-8 border-primary px-8 py-4">
          <Checkout products={products} orders={orders} />
        </footer>
      </form>
    </Layout>
  );
}
