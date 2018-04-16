import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostsList from "./../components/Posts/List";
import CategoriesList from "./../components/Categories/List";

export default class HomeContainer extends Component {
  render() {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column mobile={16}>
          <CategoriesList />
        </Grid.Column>

        <Grid.Column>
          <PostsList />
        </Grid.Column>
      </Grid>
    );
  }
}