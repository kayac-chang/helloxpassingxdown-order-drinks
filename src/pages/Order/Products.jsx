import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clamp } from "ramda";

import { BlueLine, Input } from "../../components";
import { useSwipe } from "../../hooks";
import { useOrderDispatch } from "../../contexts/orders";

function Title({ name, price }) {
  return (
    <div className="py-2 max-w-xxs">
      <h1 className="text-5xl text-primary">{name}</h1>
      <h2 className="text-2xl text-on-primary">${price}</h2>
    </div>
  );
}
function Product({ className, style, name, img, isFocus, onClick }) {
  return (
    <div
      className={clsx(
        "transition-width duration-300 ease-out-expo transform select-none w-1/3",
        isFocus ? "scale-100" : "scale-60",
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

export default function Products({ products, orders }) {
  const { product } = useParams();
  const { direction, onPressStart, onPressEnd } = useSwipe();
  const dispatch = useOrderDispatch();

  const [focus, setFocus] = useState(0);

  useEffect(() => {
    setFocus(0);
  }, [product]);

  useEffect(() => {
    setFocus((focus) => clamp(0, products.length - 1, direction + focus));
  }, [direction]);

  const display = products.filter(({ type }) => type === product);
  const name = display[focus]?.name;
  const price = display[focus]?.price;
  const value = orders[name]?.length || 0;

  const onChange = useCallback(
    (newValue) => {
      const type = newValue - value > 0 ? "add" : "remove";

      dispatch({ type, payload: { name } });
    },
    [name, value]
  );

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-4">
        <Title name={name} price={price} />

        <div
          className="relative w-full"
          onMouseDown={onPressStart}
          onMouseUp={onPressEnd}
          onTouchStart={onPressStart}
          onTouchEnd={onPressEnd}
        >
          <div
            className={clsx(
              "flex flex-nowrap transform",
              "transition-transform duration-300"
            )}
            style={{
              willChange: "transform",
              "--tw-translate-x": `calc(100vw * (${1 - focus} / 3))`,
            }}
          >
            {display.map((product, index) => (
              <Product
                key={product.name}
                className="flex-shrink-0"
                isFocus={index === focus}
                onClick={() => setFocus(index)}
                {...product}
              />
            ))}
          </div>
        </div>

        <nav className="flex w-full justify-center space-x-2 py-4">
          {display.map((product, index) => (
            <button
              type="button"
              key={product.name}
              className={clsx(
                "bg-primary w-3 h-3 rounded-full transform",
                index === focus || "scale-60 opacity-50"
              )}
              onClick={() => setFocus(index)}
            ></button>
          ))}
        </nav>

        <div className="flex w-full justify-center">
          <Input.Number
            value={value}
            unit={`CUP${value > 1 ? "S" : ""}`}
            onChange={onChange}
          />
        </div>
      </div>

      <BlueLine className="mt-2 h-2" />
    </div>
  );
}
