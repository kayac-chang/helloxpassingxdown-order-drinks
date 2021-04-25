import { Input, X, Circle } from "../../components";
import { range } from "ramda";

export default function Orders() {
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
          </li>
        ))}
      </ol>
    </main>
  );
}
