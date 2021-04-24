import clsx from "clsx";
import { range } from "ramda";

export function BlueLine({ className }) {
  return <hr className={clsx("block w-full border-primary", className)} />;
}

export function RadialLine() {
  return (
    <div className="relative">
      {range(0, 21).map((key) => (
        <hr
          key={key}
          className="block border-gray-500 border-opacity-20 border-t absolute right-0 transform"
          style={{
            width: `${100}vh`,
            transformOrigin: "right",
            "--tw-rotate": `${-10 + key * 10}deg`,
          }}
        />
      ))}
    </div>
  );
}
