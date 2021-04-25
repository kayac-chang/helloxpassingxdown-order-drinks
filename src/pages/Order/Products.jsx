import clsx from "clsx";
import {
  RadialLine,
  ChevronUp,
  ChevronDown,
  BlueLine,
  Menu,
} from "../../components";
import { range } from "ramda";
import { useState } from "react";

export default function Products() {
  const [isExpand, setExpand] = useState(true);

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-4">
        <h1
          className={clsx(
            "text-primary py-2",
            "transition-font-size duration-300 ease-out-expo",
            isExpand ? "text-6xl" : "text-2xl"
          )}
          style={{
            willChange: "font-size",
          }}
        >
          Black Tea
        </h1>

        <div className="relative w-full">
          <div className="absolute left-1/2 bottom-2">
            <RadialLine />
          </div>

          <div className="flex justify-around items-center w-full relative">
            <div
              className={clsx(
                "transition-width duration-300 ease-out-expo transform",
                isExpand ? "w-1/3 scale-60" : "w-12 scale-100"
              )}
              style={{
                willChange: "width transform",
              }}
            >
              <img src="/assets/blacktea.png" alt="blacktea" />
            </div>

            <div
              className={clsx(
                "transition-width duration-300 ease-out-expo",
                isExpand ? "w-1/3" : "w-12"
              )}
              style={{
                willChange: "width transform",
              }}
            >
              <img src="/assets/blacktea.png" alt="blacktea" />
            </div>

            <div
              className={clsx(
                "transition-width duration-300 ease-out-expo transform",
                isExpand ? "w-1/3 scale-60" : "w-12 scale-100"
              )}
              style={{
                willChange: "width transform",
              }}
            >
              <img src="/assets/blacktea.png" alt="blacktea" />
            </div>
          </div>
        </div>

        <nav className="flex w-full justify-center space-x-2 py-4">
          {range(0, 5).map((key) => (
            <a
              key={key}
              href=""
              className={clsx(
                "bg-primary w-3 h-3 rounded-full transform",
                key === 2 || "scale-60 opacity-50"
              )}
            ></a>
          ))}
        </nav>

        <div className="flex w-full justify-center">
          <div className="bg-primary text-on-primary text-lg flex items-center px-2 py-1 space-x-2">
            <button type="button" className="w-8">
              <ChevronUp />
            </button>

            <div className="flex items-center">
              <input
                type="text"
                size="1"
                value="1"
                className="bg-transparent text-3xl text-center border-b-2"
                readOnly
              />

              <span className="text-lg">CUP</span>
            </div>

            <button type="button" className="w-8 opacity-50">
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full"
        onClick={() => setExpand(!isExpand)}
      >
        <BlueLine className="flex justify-center">
          <span className="w-3 text-on-primary">
            <Menu />
          </span>
        </BlueLine>
      </button>
    </div>
  );
}
