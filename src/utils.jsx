export function digits(number) {
  return (number + "").replace(".", "").length;
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  ); // ...and ensure strings of whitespace fail
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
