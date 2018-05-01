import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import RootScreen from "./screens/Root";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <RootScreen />} />
      </Switch>
    );
  }
}
