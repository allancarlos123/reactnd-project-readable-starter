import React from "react";
import {Grid, Header} from "semantic-ui-react";

import HeaderMenu from "./../components/Header/Header";
import PostForm from "./../components/Post/Form";

export default function FormPostScreen(props) {
  return (
    <Grid columns={1} container>
      <Grid.Column>
        <HeaderMenu/>
      </Grid.Column>

      <Grid.Column>
        <Header as='h3' dividing>
          Create a post
        </Header>
        <PostForm {...props}/>
      </Grid.Column>
    </Grid>
  );
}