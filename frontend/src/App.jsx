import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import RootScreen from "./screens/Root";
import ShowPostScreen from "./screens/ShowPost";
import FormPostScreen from "./screens/FormPost";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <RootScreen />} />
        <Route exact path="/new" render={() => <FormPostScreen />} />
        <Route exact path="/:id" render={({ match }) => <ShowPostScreen id={match.params.id} />} />
      </Switch>
    );
  }
}
