import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import CardList from "./components/CardList";
import Default from "./components/Default";
import Model from "./components/Model";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CardList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Model />
      </React.Fragment>
    );
  }
}

export default App;
