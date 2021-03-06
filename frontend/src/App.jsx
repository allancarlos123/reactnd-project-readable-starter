import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import RootScreen from "./screens/Root";
import ShowPostScreen from "./screens/ShowPost";
import FormPostScreen from "./screens/FormPost";
import PostsListScreen from './screens/PostsListScreen';
import Page404 from './screens/Page404';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RootScreen} />
        <Route exact path="/new" render={() => <FormPostScreen />} />
        <Route exact path="/:category" render={props => <PostsListScreen {...props} />} />
        <Route exact path="/:category/:id" render={({ match }) => <ShowPostScreen id={match.params.id} />} />
        <Route exact path="/:category/:id/edit" component={props => <FormPostScreen {...props} />} />
        <Route component={Page404} />
      </Switch>
    );
  }
}
