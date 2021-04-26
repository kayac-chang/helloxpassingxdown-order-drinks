import { Input, X, Circle } from "../../components";

function Order({ title }) {
  return (
    <section className="py-2 text-primary">
      <header>
        <div className="flex items-center justify-between text-on-primary">
          <h3 className="text-lg">{title}</h3>

          <button type="button" className="w-4">
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

export default function Orders({ items = [] }) {
  return (
    <main className="flex-1 px-2">
      <ol className="divide-y-2 divide-primary">
        {items.map((key) => (
          <li key={key}>
            <Order title={`${key + 1}. Black Tea`} />
          </li>
        ))}
      </ol>
    </main>
  );
}
