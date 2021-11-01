import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Country from "./pages/Country";
import Error from "./pages/Error";
import Weather from "./pages/Weather";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Country />
        </Route>

        <Route path={`/Weather/:country`} exact>
          <Weather />
        </Route>
        <Route path="/*" exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
