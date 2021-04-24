import clsx from "clsx";
import styles from "./Input.module.scss";

import { BlueLine } from "./Shape";

function Circle({ className }) {
  return (
    <div
      className={clsx("bg-primary w-1.5 h-1.5 rounded-full", className)}
    ></div>
  );
}

export function Range() {
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

      <input className="absolute" type="range" min="0" max="100" step="25" />
    </div>
  );
}
