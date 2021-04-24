import clsx from "clsx";
import {
  Layout,
  RadialLine,
  Range,
  ChevronUp,
  ChevronDown,
  X,
  Circle,
} from "../components";
import { range } from "ramda";
import { useHistory } from "react-router";

function Tabs() {
  return (
    <nav className="space-x-2 flex items-end overflow-scroll px-4">
      {["Tea", "Fruit", "Soy", "Coffee", "Milk", "Ice"].map((item) => (
        <a
          key={item}
          href={`/${item}`}
          className={clsx(
            "h-full flex items-end px-2 py-1",
            true ? "text-2xl border-b-2" : "text-lg"
          )}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

function Products() {
  return (
    <div className="flex flex-col items-center py-4 overflow-hidden">
      <h1 className="text-primary text-6xl py-4">Black Tea</h1>

      <div className="relative">
        <div className="absolute left-1/2 bottom-2">
          <RadialLine />
        </div>

        <div className="flex w-full relative">
          <div className="w-32 transform scale-60">
            <img src="/assets/blacktea.png" alt="blacktea" />
          </div>

          <div className="w-32">
            <img src="/assets/blacktea.png" alt="blacktea" />
          </div>

          <div className="w-32 transform scale-60">
            <img src="/assets/blacktea.png" alt="blacktea" />
          </div>
        </div>
      </div>

      <nav className="flex w-full justify-center space-x-2 py-4">
        {range(0, 5).map((key) => (
          <a
            key={key}
            href=""
            className={clsx(
              "bg-primary w-3 h-3 rounded-full transform",
              key === 2 || "scale-60 opacity-50"
            )}
          ></a>
        ))}
      </nav>

      <div className="flex w-full justify-center">
        <div className="bg-primary text-on-primary text-lg flex items-center px-2 py-1 space-x-2">
          <button type="button" className="w-8">
            <ChevronUp />
          </button>

          <div className="flex items-center">
            <input
              type="text"
              size="1"
              value="1"
              className="bg-transparent text-3xl text-center border-b-2"
              readOnly
            />

            <span className="text-lg">CUP</span>
          </div>

          <button type="button" className="w-8 opacity-50">
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <main className="flex-1 px-2">
      <ol className="divide-y-2 divide-primary">
        {range(0, 2).map((key) => (
          <li key={key}>
            <section className="py-2 text-primary">
              <header>
                <div className="flex items-center justify-between text-on-primary">
                  <h3 className="text-lg">{key + 1}. Black Tea</h3>

                  <button type="button" className="w-4">
                    <X />
                  </button>
                </div>

                <div className="flex justify-end text-xs">
                  Drag to build your drink
                </div>
              </header>

              <ul>
                <li>
                  <div className="flex items-center">
                    <Circle
                      type="outline"
                      size="md"
                      className="flex items-center justify-center"
                    >
                      糖
                    </Circle>

                    <Range />
                  </div>
                </li>

                <li>
                  <div className="flex items-center">
                    <Circle
                      type="outline"
                      size="md"
                      className="flex items-center justify-center"
                    >
                      冰
                    </Circle>

                    <Range />
                  </div>
                </li>
              </ul>
            </section>
          </li>
        ))}
      </ol>
    </main>
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
        <header className="sticky top-0 bg-background border-b-8 border-primary z-10">
          <div className="bg-primary text-on-primary mt-2 pt-1 pb-2">
            <Tabs />
          </div>

          <Products />
        </header>

        <Orders />

        <footer className="bg-background text-on-primary border-t-8 border-primary flex justify-between items-center px-8 py-4">
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
        </footer>
      </form>
    </Layout>
  );
}
