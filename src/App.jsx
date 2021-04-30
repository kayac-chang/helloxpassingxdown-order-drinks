import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductProvider } from "./contexts/products";
import { OrderProvider } from "./contexts/orders";

import Entry from "./pages/Entry";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";

import "./server";

function App() {
  return (
    <ProductProvider>
      <OrderProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Entry />
            </Route>

            <Route path={["/products/:product", "/products"]}>
              <Order />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </OrderProvider>
    </ProductProvider>
  );
}

export default App;
