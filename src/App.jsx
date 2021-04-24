import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Entry from "./pages/Entry";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Entry />
        </Route>

        <Route path="/order">
          <Order />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
