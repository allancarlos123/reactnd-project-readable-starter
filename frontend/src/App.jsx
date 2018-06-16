import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import RootScreen from "./screens/Root";
import ShowPostScreen from "./screens/ShowPost";
import FormPostScreen from "./screens/FormPost";
import PostsListScreen from './screens/PostsListScreen';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <RootScreen />} />
        <Route exact path="/new" render={() => <FormPostScreen />} />
        <Route exact path="/:category" component={props => <PostsListScreen {...props} />} />
        <Route exact path="/:category/:id" component={props => <ShowPostScreen {...props} />} />
        <Route exact path="/:category/:id/edit" component={props => <FormPostScreen {...props} />} />
      </Switch>
    );
  }
}
