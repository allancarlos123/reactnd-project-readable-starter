import React from "react";
import {Grid} from "semantic-ui-react";

import HeaderMenu from "./../components/Header/Header";
import PostForm from "./../components/Post/Form";

export default function FormPostScreen(props) {
  return (
    <Grid columns={1} container>
      <Grid.Column>
        <HeaderMenu/>
      </Grid.Column>

      <Grid.Column>
        <PostForm {...props}/>
      </Grid.Column>
    </Grid>
  );
}