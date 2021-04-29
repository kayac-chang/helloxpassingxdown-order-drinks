import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { ProductProvider } from "./contexts/products";

import Entry from "./pages/Entry";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import './server'

function App() {
  let [drinks, setDrinks] = useState([])

  // get
  useEffect(() => {
    fetch("/api/drinks")
      .then((response) => response.json())
      .then((json) => setDrinks(json))
  }, [])

  // post
  useEffect(() => {
    fetch("/api/orders", {
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
  }, [])

  console.log(drinks)

  return (
    <ProductProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>

          <Route path={["/products/:product", "/products"]}>
            <ProductProvider>
              <Order />
            </ProductProvider>
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </ProductProvider>
  );
}

export default App;
