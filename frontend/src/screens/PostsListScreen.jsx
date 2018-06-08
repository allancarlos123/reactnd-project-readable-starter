import React from "react";
import { Link } from "react-router-dom";
import { Grid, Icon, Button } from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostsList from "./../components/Post/List";
import CategoriesList from "./../components/Category/List";

export default function PostsListScreen(props) {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column mobile={16}>
          <CategoriesList category={props.category} />
        </Grid.Column>

        <Grid.Column>
          <h3>filtered category by: {props.match.params.category}</h3>
          <PostsList {...props} />
        </Grid.Column>
      </Grid>
    );
}