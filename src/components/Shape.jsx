import clsx from "clsx";
import { range } from "ramda";

export function BlueLine({ className, children }) {
  return (
    <div
      className={clsx(
        "block w-full border border-primary bg-primary",
        className
      )}
    >
      {children}
    </div>
  );
}

export function RadialLine() {
  return (
    <div className="relative">
      {range(0, 21).map((key) => (
        <hr
          key={key}
          className="block border-gray-500 border-opacity-10 border-t absolute right-0 transform"
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

export function Circle({ type, size, children, className }) {
  return (
    <div
      className={clsx(
        "border-primary rounded-full p-0.5",
        {
          md: "border",
          lg: "border-6",
        }[size]
      )}
    >
      <div
        className={clsx(
          "rounded-full ",
          {
            solid: "bg-primary",
            outline: "border-primary border-2",
          }[type],
          {
            md: "w-8 h-8",
            lg: "w-18 h-18",
          }[size],
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ChevronUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export function Plus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

export function Minus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  );
}
