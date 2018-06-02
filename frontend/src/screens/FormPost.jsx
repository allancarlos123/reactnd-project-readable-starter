import React from "react";
import {Grid} from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostForm from "./../components/Post/Form";
// import CategoriesList from "./../components/Category/List";

export default function FormPostScreen({id}) {
  return (
    <Grid columns={1} container>
      <Grid.Column>
        <Header/>
      </Grid.Column>

      {/* <Grid.Column mobile={16}>
        <CategoriesList />
      </Grid.Column> */}

      <Grid.Column>
        <PostForm id={id}/>
      </Grid.Column>
    </Grid>
  );
}
