import { useCallback, useState } from "react";

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

export function useSwipe() {
  const [direction, setDirection] = useState(0);
  const [originX, setOriginX] = useState(0);

  const onPressStart = useCallback((e) => {
    e = unify(e);

    setOriginX(e.clientX);
  }, []);

  const onPressEnd = useCallback(
    (e) => {
      e = unify(e);

      setDirection(-1 * Math.sign(e.clientX - originX));
      setOriginX(0);

      requestAnimationFrame(() => setDirection(0));
    },
    [originX]
  );

  return { direction, onPressStart, onPressEnd };
}
