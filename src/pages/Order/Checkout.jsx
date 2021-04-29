import clsx from "clsx";

export default function Checkout({ total, count }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-end ">
        <span className="text-4xl">${total}</span>

        <div className="space-x-1 pb-1">
          <span>/{count}</span>
          <span>CUPS</span>
        </div>
      </div>

      <button
        type="submit"
        className={clsx(
          "flex flex-col items-center bg-primary border border-on-primary px-4 py-2 ml-auto",
          count || "pointer-events-none"
        )}
      >
        <span className="text-xl">PLACE</span>
        <span>the order</span>
      </button>
    </div>
  );
}
