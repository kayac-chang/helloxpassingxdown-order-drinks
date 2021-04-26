import clsx from "clsx";
import { RadialLine, BlueLine, Menu, Input } from "../../components";
import { useSwipe } from "../../hooks";
import { useCallback, useEffect, useState } from "react";
import { clamp, slice, append } from "ramda";

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

function Product({ className, style, name, img, isExpand, isFocus, onClick }) {
  return (
    <div
      className={clsx(
        "transition-width duration-300 ease-out-expo transform select-none",
        isFocus ? "scale-100" : "scale-60",
        isExpand ? "w-1/3" : "w-12",
        className
      )}
      style={{
        willChange: "width transform",
        ...style,
      }}
      onClick={onClick}
    >
      <img src={img} alt={name} draggable={false} />
    </div>
  );
}

export default function Products({ products, orders, setOrders }) {
  const [isExpand, setExpand] = useState(true);
  const [focus, setFocus] = useState(() => 0);

  const { direction, onPressStart, onPressEnd } = useSwipe();

  const isFocus = useCallback(
    (product) => product.name === products[focus].name,
    [focus]
  );

  useEffect(() => {
    setFocus((focus) => clamp(0, products.length - 1, direction + focus));
  }, [direction]);

  const name = products[focus].name;
  const value = orders[name]?.length || 0;
  const onChange = useCallback(
    (newValue) => {
      const apply =
        newValue - value > 0
          ? append({ id: btoa(performance.now()) })
          : slice(0, -1);

      setOrders((orders) => ({
        ...orders,
        [name]: apply(orders[name]),
      }));
    },
    [name, value]
  );

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-4">
        <Title isExpand={isExpand}>{"Black Tea"}</Title>

        <div
          className="relative w-full"
          onMouseDown={onPressStart}
          onMouseUp={onPressEnd}
          onTouchStart={onPressStart}
          onTouchEnd={onPressEnd}
        >
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
          >
            {products.map((product, index) => (
              <Product
                key={product.name}
                className="flex-shrink-0"
                isExpand={isExpand}
                isFocus={isFocus(product)}
                onClick={() => setFocus(index)}
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
                isFocus(product) || "scale-60 opacity-50"
              )}
              onClick={() => setFocus(index)}
            ></button>
          ))}
        </nav>

        <div className="flex w-full justify-center">
          <Input.Number value={value} onChange={onChange} />
        </div>
      </div>

      <Expand onClick={() => setExpand(!isExpand)} />
    </div>
  );
}
