import React from "react";
import { Grid } from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostShow from "./../components/Post/Show";
import CommentsList from "./../components/Comment/List";
import CommentForm from "./../components/Comment/Form";

export default function ShowPostScreen(props) {
  return (
    <Grid columns={1} container>
      <Grid.Column>
        <Header />
      </Grid.Column>

      {/* <Grid.Column mobile={16}>
        <CategoriesList />
      </Grid.Column> */}

      <Grid.Column>
        <PostShow {...props} />

        <CommentsList {...props} />
        <CommentForm {...props} />
      </Grid.Column>
    </Grid>
  );
}
