export function debounce(func) {
  let id;

  return (...args) => {
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      func(...args);

      id = undefined;
    }, 100);
  };
}
