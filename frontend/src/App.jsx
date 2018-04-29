import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ScreensRoot from "./screens/Root";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <ScreensRoot />} />
      </Switch>
    );
  }
}
