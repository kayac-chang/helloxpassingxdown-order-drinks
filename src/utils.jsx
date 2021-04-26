export function digits(number) {
  return (number + "").replace(".", "").length;
}

export function debounce(ms = 100, func) {
  let id;

  return (...args) => {
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      func(...args);

      id = undefined;
    }, ms);
  };
}

export function throttle(ms = 100, func) {
  let id;

  return (...args) => {
    if (id) return;

    id = setTimeout(() => {
      func(...args);

      id = undefined;
    }, ms);
  };
}
