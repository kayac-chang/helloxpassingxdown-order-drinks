import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductProvider } from "./contexts/products";

import Entry from "./pages/Entry";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";

import "./server";

function App() {
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
