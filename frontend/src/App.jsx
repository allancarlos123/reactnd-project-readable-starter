import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomeContainer from "./containers/Home";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <HomeContainer />} />
      </Switch>
    );
  }
}
