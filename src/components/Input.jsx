import clsx from "clsx";
import { clamp } from "ramda";
import { useCallback } from "react";
import styles from "./Input.module.scss";
import { BlueLine, Minus, Plus } from "./Shape";
import { digits } from "../utils";

function Circle({ className }) {
  return (
    <div
      className={clsx("bg-primary w-1.5 h-1.5 rounded-full", className)}
    ></div>
  );
}

function Range({
  value,
  onChange,
  max = value ? 10 ** digits(value) : 0,
  min = 0,
  step = 1,
}) {
  return (
    <div
      className={clsx(
        styles.range,
        "text-on-primary w-full relative flex items-center py-10"
      )}
    >
      <div className="w-full border border-primary relative flex items-center text-xxs text-primary mx-3">
        <div className="absolute -top-8 w-full flex justify-between">
          <span className="transform -translate-x-1/2">0%</span>

          <span className="transform translate-x-1/2 -ml-2">50%</span>

          <span className="transform translate-x-1/2">100%</span>
        </div>

        <Circle className="absolute left-0 transform -translate-x-1/2" />
        <BlueLine className="absolute left-1/4 transform -translate-x-1/2 rotate-90 w-4" />
        <BlueLine className="absolute left-2/4 transform -translate-x-1/2 rotate-90 w-4" />
        <BlueLine className="absolute left-3/4 transform -translate-x-1/2 rotate-90 w-4" />
        <Circle className="absolute left-full transform -translate-x-1/2" />
      </div>

      <input
        className="absolute"
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

function Number({ value, onChange, max = 10 ** digits(value), min = 0 }) {
  const update = useCallback((value) => onChange(clamp(min, max, value)), [
    onChange,
    min,
    max,
  ]);

  return (
    <div className="bg-primary text-on-primary text-lg flex items-center px-2 py-1 space-x-2">
      <button type="button" className="w-8" onClick={() => update(value + 1)}>
        <Plus />
      </button>

      <div className="flex items-center">
        <input
          type="number"
          value={value}
          max={max}
          min={min}
          className="bg-transparent text-3xl text-center"
          readOnly
        />

        <span className="text-lg">CUP</span>
      </div>

      <button
        type="button"
        className={clsx(
          "w-8",
          value <= min && "opacity-50 pointer-events-none"
        )}
        onClick={() => update(value - 1)}
      >
        <Minus />
      </button>
    </div>
  );
}

export default { Range, Number };
