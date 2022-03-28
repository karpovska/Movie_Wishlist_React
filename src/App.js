import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Wishlist } from "./components/Wishlist";
import { Add } from "./components/Add";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Wishlist />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
