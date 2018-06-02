import React from "react";
import { Grid } from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostShow from "./../components/Post/Show";
// import CategoriesList from "./../components/Category/List";

export default function ShowPostScreen({ id }) {
  return (
    <Grid columns={1} container>
      <Grid.Column>
        <Header />
      </Grid.Column>

      {/* <Grid.Column mobile={16}>
        <CategoriesList />
      </Grid.Column> */}

      <Grid.Column>
        <PostShow id={id} />
      </Grid.Column>
    </Grid>
  );
}
