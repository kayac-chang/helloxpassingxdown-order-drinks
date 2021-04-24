import clsx from "clsx";
import {
  Layout,
  RadialLine,
  Range,
  ChevronUp,
  ChevronDown,
  X,
  Circle,
  BlueLine,
  Menu,
} from "../components";
import { equals, range } from "ramda";
import { useHistory, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import anime from "animejs";

function Tabs() {
  const products = ["Tea", "Fruit", "Soy", "Coffee", "Milk", "Ice"];
  const { product } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (products.includes(product)) return;

    history.push(`/products/${products[0]}`);
  }, [product]);

  const isActive = equals(product);

  return (
    <nav className="space-x-2 flex items-end overflow-scroll">
      {products.map((item) => (
        <Link
          key={item}
          className={clsx(
            "h-full flex items-end px-2 py-1 text-2xl",
            "transform transition-transform ease-out-expo duration-300",
            isActive(item) ? "scale-100 border-b-2" : "scale-75"
          )}
          style={{ transformOrigin: "50% 75%" }}
          to={`/products/${item}`}
          onClick={({ target }) =>
            anime({
              targets: target.parentElement,
              scrollLeft: target.offsetLeft - 10,
              easing: "easeOutCirc",
              duration: 350,
            })
          }
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}

function Products() {
  const [isExpand, setExpand] = useState(true);

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-4">
        <h1
          className={clsx(
            "text-primary py-2",
            "transition-font-size duration-300 ease-out-expo",
            isExpand ? "text-6xl" : "text-2xl"
          )}
          style={{
            willChange: "font-size",
          }}
        >
          Black Tea
        </h1>

        <div className="relative w-full">
          <div className="absolute left-1/2 bottom-2">
            <RadialLine />
          </div>

          <div className="flex justify-around items-center w-full relative">
            <div
              className={clsx(
                "transition-width duration-300 ease-out-expo transform",
                isExpand ? "w-1/3 scale-60" : "w-12 scale-100"
              )}
              style={{
                willChange: "width transform",
              }}
            >
              <img src="/assets/blacktea.png" alt="blacktea" />
            </div>

            <div
              className={clsx(
                "transition-width duration-300 ease-out-expo",
                isExpand ? "w-1/3" : "w-12"
              )}
              style={{
                willChange: "width transform",
              }}
            >
              <img src="/assets/blacktea.png" alt="blacktea" />
            </div>

            <div
              className={clsx(
                "transition-width duration-300 ease-out-expo transform",
                isExpand ? "w-1/3 scale-60" : "w-12 scale-100"
              )}
              style={{
                willChange: "width transform",
              }}
            >
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

      <button
        type="button"
        className="w-full"
        onClick={() => setExpand(!isExpand)}
      >
        <BlueLine className="flex justify-center">
          <span className="w-3 text-on-primary">
            <Menu />
          </span>
        </BlueLine>
      </button>
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
        <header className="sticky top-0 bg-background z-10">
          <div className="bg-primary text-on-primary mt-2 pt-1 pb-2 px-2">
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
