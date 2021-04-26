import { Input, X, Circle } from "../../components";

function Order({ title, onCancel }) {
  return (
    <section className="py-2 text-primary">
      <header>
        <div className="flex items-center justify-between text-on-primary">
          <h3 className="text-lg">{title}</h3>

          <button type="button" className="w-4" onClick={onCancel}>
            <X />
          </button>
        </div>

        <div className="flex justify-end text-xs">Drag to build your drink</div>
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

            <Input.Range />
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

            <Input.Range />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default function Orders({ orders, setOrders }) {
  const orderList = Object.entries(orders).reduce(
    (list, [name, orders]) => [
      ...list,
      ...orders.map((order) => ({ name, ...order })),
    ],
    []
  );

  return (
    <main className="flex-1 px-2">
      <ol className="divide-y-2 divide-primary">
        {orderList.map((order, index) => (
          <li key={order.id}>
            <Order
              title={`${index + 1}. ${order.name}`}
              onCancel={() => {
                setOrders((orders) => ({
                  ...orders,
                  [order.name]: orders[order.name].filter(
                    ({ id }) => id !== order.id
                  ),
                }));
              }}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}
