import React from "react";

import { Grid } from "semantic-ui-react";
import Header from "./../components/Header/Header";
import PostsList from "./../components/Post/List";
import CategoriesList from "./../components/Category/List";
import ButtonCreatePost from './../components/UI/Button/CreatePost';

export default function RootScreen(props) {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column mobile={16}>
          <CategoriesList category={props.category} />
        </Grid.Column>

        <Grid.Column mobile={16} computer={3}>
          <ButtonCreatePost />
        </Grid.Column>

        <Grid.Column>
          <PostsList />
        </Grid.Column>
      </Grid>
    );
}