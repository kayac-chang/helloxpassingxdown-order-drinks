import { useHistory } from "react-router-dom";
import { Layout } from "../../components";
import Tabs from "./Tabs";
import Products from "./Products";
import Orders from "./Orders";

function Checkout() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-end ">
        <span className="text-4xl">$385</span>

        <div className="space-x-1 pb-1">
          <span className="">/5</span>
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

export default function Order() {
  const history = useHistory();

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

          <Products />
        </header>

        <Orders />

        {/* <footer className="w-full bg-background text-on-primary border-t-8 border-primary px-8 py-4">
          <Checkout />
        </footer> */}
      </form>
    </Layout>
  );
}
