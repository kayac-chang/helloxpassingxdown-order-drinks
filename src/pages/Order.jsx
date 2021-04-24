import clsx from "clsx";
import { useState } from "react";
import { Layout, RadialLine, Range } from "../components";
import { equals, range } from "ramda";

function ChevronUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function Circle({ children }) {
  return (
    <div className="inline-block border-primary border rounded-full p-0.5">
      <div className="border-primary border-2 rounded-full w-8 h-8 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function Order() {
  const [active, setActive] = useState("Tea");
  const isActive = equals(active);

  return (
    <Layout>
      <header className="bg-primary text-on-primary mt-2 pt-1 pb-2 z-10">
        <nav className="space-x-2 flex items-end overflow-scroll px-4">
          {["Tea", "Fruit", "Soy", "Coffee", "Milk", "Ice"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className={clsx(
                "h-full flex items-end px-2 py-1",
                isActive(item) ? "text-2xl border-b-2" : "text-lg"
              )}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex-1">
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
              <button className="w-8">
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

              <button className="w-8 opacity-50">
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-8 border-b-8 border-primary px-2">
          <ol className="divide-y-2 divide-primary">
            {range(0, 2).map((key) => (
              <li key={key}>
                <section className="py-2 text-primary">
                  <header>
                    <div className="flex items-center justify-between text-on-primary">
                      <h3 className="text-lg">{key + 1}. Black Tea</h3>

                      <button className="w-4">
                        <X />
                      </button>
                    </div>

                    <div className="flex justify-end">
                      <span className="text-xs">Drag to build your drink</span>
                    </div>
                  </header>

                  <ul>
                    <li>
                      <div className="flex items-center">
                        <Circle>糖</Circle>

                        <Range />
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center">
                        <Circle>冰</Circle>

                        <Range />
                      </div>
                    </li>
                  </ul>
                </section>
              </li>
            ))}
          </ol>
        </div>
      </main>

      <footer className="bg-background text-on-primary flex justify-between items-center px-8 py-4">
        <div className="flex items-end ">
          <span className="text-4xl">$385</span>

          <div className="space-x-1 pb-1">
            <span className="">/5</span>
            <span className="">CUPS</span>
          </div>
        </div>

        <button className="flex flex-col items-center bg-primary border border-on-primary px-4 py-2">
          <span className="text-xl">PLACE</span>
          <span>the order</span>
        </button>
      </footer>
    </Layout>
  );
}
