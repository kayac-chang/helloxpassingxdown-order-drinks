import clsx from "clsx";
import { useHistory } from "react-router";
import { SubmitAction, useOrderDispatch } from "../../contexts/orders";

export default function Checkout({ orders, products }) {
  const history = useHistory();
  const dispatch = useOrderDispatch();

  const { total, count } = Object.entries(orders).reduce(
    ({ total, count }, [name, orders]) => {
      const { price } = products.find((product) => product.name === name);

      return {
        total: total + orders.length * price,
        count: count + orders.length,
      };
    },
    { total: 0, count: 0 }
  );

  function onSubmit(event) {
    event.preventDefault();

    dispatch(SubmitAction(orders)).then((orders) =>
      history.push("/checkout", { orders })
    );
  }

  if (count <= 0) return <></>;

  return (
    <div className="text-on-primary border-t-8 border-primary px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-end ">
          <span className="text-4xl">${total}</span>

          <div className="pb-1">
            /{count} CUP{count > 1 && "S"}
          </div>
        </div>

        <button
          type="submit"
          className={clsx(
            "flex flex-col items-center bg-primary border border-on-primary px-4 py-2 ml-auto",
            count || "pointer-events-none"
          )}
          onClick={onSubmit}
        >
          <span className="text-xl">PLACE</span>
          <span>the order</span>
        </button>
      </div>
    </div>
  );
}
