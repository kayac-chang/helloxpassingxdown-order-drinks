import clsx from "clsx";
import { RadialLine, BlueLine, Menu, Input } from "../../components";
import { useCallback, useState } from "react";
import { debounce } from "../../utils";

function Title({ children, isExpand }) {
  return (
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
      {children}
    </h1>
  );
}

function Expand({ onClick }) {
  return (
    <button type="button" className="w-full" onClick={onClick}>
      <BlueLine className="flex justify-center">
        <span className="w-3 text-on-primary">
          <Menu />
        </span>
      </BlueLine>
    </button>
  );
}

function Product({ className, style, name, img, isExpand, isFocus }) {
  return (
    <div
      className={clsx(
        "transition-width duration-300 ease-out-expo transform",
        isFocus ? "scale-100" : "scale-60",
        isExpand ? "w-1/3" : "w-12",
        className
      )}
      style={{
        willChange: "width transform",
        ...style,
      }}
    >
      <img src={img} alt={name} />
    </div>
  );
}

const products = [
  { name: "Black Tea A", img: "/assets/blacktea.png" },
  { name: "Black Tea B", img: "/assets/blacktea.png" },
  { name: "Black Tea C", img: "/assets/blacktea.png" },
  { name: "Black Tea D", img: "/assets/blacktea.png" },
  { name: "Black Tea E", img: "/assets/blacktea.png" },
];
export default function Products() {
  const [isExpand, setExpand] = useState(true);
  const [focus, setFocus] = useState(() => 0);

  const onPointerMove = useCallback(
    debounce((event) => {
      const dir = -1 * Math.sign(event.movementX);

      setFocus((focus) => focus + dir);
    }),
    []
  );

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-4">
        <Title isExpand={isExpand}>{"Black Tea"}</Title>

        <div className="relative w-full">
          <div className="absolute left-1/2 bottom-2">
            <RadialLine />
          </div>

          <div
            className={clsx(
              "flex flex-nowrap justify-around transform",
              "transition-transform duration-300"
            )}
            style={{
              willChange: "transform",
              "--tw-translate-x": isExpand
                ? `calc(100vw * (${2 - focus} / 3))`
                : "0",
            }}
            onPointerMove={onPointerMove}
          >
            {products.map((product) => (
              <Product
                key={product.name}
                className="flex-shrink-0"
                isExpand={isExpand}
                isFocus={product.name === products[focus].name}
                {...product}
              />
            ))}
          </div>
        </div>

        <nav className="flex w-full justify-center space-x-2 py-4">
          {products.map((product, index) => (
            <button
              type="button"
              key={product.name}
              className={clsx(
                "bg-primary w-3 h-3 rounded-full transform",
                product.name === products[focus].name || "scale-60 opacity-50"
              )}
              onClick={() => setFocus(index)}
            ></button>
          ))}
        </nav>

        <div className="flex w-full justify-center">
          <Input.Number />
        </div>
      </div>

      <Expand onClick={() => setExpand(!isExpand)} />
    </div>
  );
}