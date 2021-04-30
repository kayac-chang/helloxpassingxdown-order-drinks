import { range } from "ramda";
import { useLocation } from "react-router-dom";
import { Logo, Layout } from "../components";

export default function Checkout() {
  const location = useLocation();
  const { orders } = location.state;

  console.log(orders);

  return (
    <Layout>
      <header className="flex justify-center z-10">
        <Logo />
      </header>

      <main className="flex-1 px-8 space-y-8 z-10 mt-6">
        <div className="py-4 text-primary">
          <h1 className="text-6xl">Thank you</h1>

          <h2 className="text-2xl">for your purchase</h2>
        </div>

        <div className="flex divide-x divide-primary text-on-primary">
          <div className="flex-1">
            <ol className="space-y-4">
              {orders.items.map(({ name, sugar, ice }, index) => (
                <li key={name + index}>
                  <div>
                    <h3 className="text-lg">
                      {index + 1}. {name}
                    </h3>
                    <p className="text-primary text-xs">
                      Sugar {sugar}%, Ice {ice}%
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="text-4xl">${orders.price}</h2>
            <p className="w-full flex justify-end">
              /{orders.items.length} CUP{orders.items.length > 1 ? "S" : ""}
            </p>
          </div>
        </div>
      </main>

      <footer className="px-8 py-4 relative mt-6">
        <button className="bg-primary text-on-primary px-4 py-2 w-full border-2 border-on-primary relative text-xl">
          SHARE THE PURCHASE
        </button>
      </footer>
    </Layout>
  );
}
