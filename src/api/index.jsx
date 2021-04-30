export function getDrinks() {
  return fetch("/api/drinks").then((response) => response.json());
}

/**
 * 
 *     fetch("/api/orders", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          name: 'Drink Name 1',
          sugar: 2,
          ice: 3
        },
        {
          name: 'Drink Name 2',
          sugar: 1,
          ice: 5
        },
      ]),
    })
      .then((response) => response.json())
      .then((json) => setDrinks(json))
 * 
 */
export function createOrder(orders) {
  return fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orders),
  }).then((response) => response.json());
}
