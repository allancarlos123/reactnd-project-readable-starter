import React from "react";
import { Link } from "react-router-dom";
import { Grid, Icon, Button } from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostsList from "./../components/Post/List";
import CategoriesList from "./../components/Category/List";

export default function RootScreen() {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column mobile={16}>
          <CategoriesList />
        </Grid.Column>

        <Grid.Column mobile={16} computer={3}>
          <Button as={Link} to="/new" fluid color="pink" floated="right" icon>
            <Icon name="add" />
            Create a post
          </Button>
        </Grid.Column>

        <Grid.Column>
          <PostsList />
        </Grid.Column>
      </Grid>
    );
}