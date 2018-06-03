import React from "react";
import {Grid, Header} from "semantic-ui-react";

import HeaderMenu from "./../components/Header/Header";
import PostForm from "./../components/Post/Form";

export default class FormPostScreen extends React.Component {
  render() {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <HeaderMenu />
        </Grid.Column>

        <Grid.Column>
          <Header as='h3' dividing>
            Create a post
          </Header>
          <PostForm />
        </Grid.Column>
      </Grid>
    );
  }
}