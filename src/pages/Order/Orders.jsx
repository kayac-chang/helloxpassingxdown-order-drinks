import { useCallback } from "react";
import { Input, X, Circle } from "../../components";
import { useOrderDispatch } from "../../contexts/orders";

function Order({ title, onCancel, sugar, ice, onSugarChange, onIceChange }) {
  return (
    <section className="py-4 text-primary">
      <header className="flex items-center justify-between ">
        <h3 className="text-lg text-on-primary">{title}</h3>

        <div className="flex items-center space-x-2">
          <div className="flex justify-end text-xs">
            Drag to build your drink
          </div>

          <button
            type="button"
            className="w-5 text-on-primary"
            onClick={onCancel}
          >
            <X />
          </button>
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

            <Input.Range
              max={100}
              step={25}
              value={sugar}
              onChange={(event) => onSugarChange(Number(event.target.value))}
            />
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

            <Input.Range
              max={100}
              step={25}
              value={ice}
              onChange={(event) => onIceChange(Number(event.target.value))}
            />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default function Orders({ orders }) {
  const dispatch = useOrderDispatch();

  const orderList = Object.entries(orders)
    .map(([name, orders]) => orders.map((order) => ({ ...order, name })))
    .flat();

  const onCancel = useCallback(
    ({ name, id }) => dispatch({ type: "remove", payload: { name, id } }),
    []
  );

  const onChange = useCallback(
    ({ name, id, sugar, ice }) =>
      dispatch({ type: "update", payload: { name, id, sugar, ice } }),
    []
  );

  return (
    <ol className="divide-y-2 divide-primary">
      {orderList.map((order, index) => (
        <li key={order.id}>
          <Order
            title={`${index + 1}. ${order.name}`}
            onCancel={() => onCancel(order)}
            sugar={order.sugar}
            onSugarChange={(sugar) => onChange({ ...order, sugar })}
            ice={order.ice}
            onIceChange={(ice) => onChange({ ...order, ice })}
          />
        </li>
      ))}
    </ol>
  );
}
