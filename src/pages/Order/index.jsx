import { useHistory } from "react-router-dom";
import { Layout } from "../../components";
import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";
import { useState } from "react";
import { isEmpty } from "ramda";

function Checkout({ orders, products }) {
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

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-end ">
        <span className="text-4xl">${total}</span>

        <div className="space-x-1 pb-1">
          <span className="">/{count}</span>
          <span className="">CUPS</span>
        </div>
      </div>

      <button
        type="submit"
        className="flex flex-col items-center bg-primary border border-on-primary px-4 py-2"
      >
        <span className="text-xl">PLACE</span>
        <span>the order</span>
      </button>
    </div>
  );
}

const products = [
  { name: "Black Tea A", img: "/assets/blacktea.png", price: 50 },
  { name: "Black Tea B", img: "/assets/blacktea.png", price: 100 },
  { name: "Black Tea C", img: "/assets/blacktea.png", price: 75 },
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
      <form onSubmit={onSubmit}>
        <header className="sticky top-0 bg-background z-10">
          <div className="bg-primary text-on-primary pt-1 pb-2 px-2">
            <Tabs />
          </div>

          <Products products={products} orders={orders} setOrders={setOrders} />
        </header>

        <Orders orders={orders} setOrders={setOrders} />

        {!isEmpty(orders) && (
          <footer className="w-full bg-background text-on-primary border-t-8 border-primary px-8 py-4">
            <Checkout products={products} orders={orders} />
          </footer>
        )}
      </form>
    </Layout>
  );
}
