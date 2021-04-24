import { range } from "ramda";
import { Logo, Layout, RadialLine } from "../components";

export default function Checkout() {
  return (
    <Layout>
      <header className="flex justify-center z-10">
        <Logo />
      </header>

      <main className="flex-1 px-4 space-y-8 z-10">
        <div className="py-4 text-primary">
          <h1 className="text-6xl">Thank you</h1>

          <h2 className="text-2xl">for your purchase</h2>
        </div>

        <div className="flex divide-x divide-primary text-on-primary">
          <div className="w-52">
            <ol className="space-y-4">
              {range(0, 4).map((key) => (
                <li key={key}>
                  <div>
                    <h3 className="text-lg">{key + 1}. Black Tea</h3>
                    <p className="text-primary text-xs">Sugar 50%, Ice 20%</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center px-4">
            <h2 className="text-4xl">$385</h2>
            <p className="w-full flex justify-end">/5 CUPS</p>
          </div>
        </div>
      </main>

      <footer className="px-8 py-4 relative">
        <div className="absolute left-1/2 mt-4">
          <RadialLine />
        </div>

        <button className="bg-primary text-on-primary px-4 py-2 w-full border-2 border-on-primary relative">
          SHARE THE PURCHASE
        </button>
      </footer>
    </Layout>
  );
}