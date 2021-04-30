import clsx from "clsx";
import { equals } from "ramda";
import { useHistory, Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import anime from "animejs";

export default function Tabs({ types }) {
  const { product } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (types.includes(product)) return;

    history.push(`/products/${types[0]}`);
  }, [product]);

  const isActive = equals(product);

  return (
    <nav className="space-x-2 flex flex-nowrap items-end overflow-scroll">
      {types.map((item) => (
        <Link
          key={item}
          className={clsx(
            "h-full whitespace-nowrap px-2 py-1 text-2xl",
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
