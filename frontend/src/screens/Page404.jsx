import React from "react";
import {Link} from "react-router-dom";

import { Grid } from "semantic-ui-react";
import Header from "./../components/Header/Header";
import CategoriesList from "./../components/Category/List";

export default function Page404(props) {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column mobile={16}>
          <CategoriesList category={props.category} />
        </Grid.Column>

        <Grid.Column>
          <h1>Não encontramos nenhuma página!</h1>
          <Link to="/">Voltar para home</Link>
        </Grid.Column>
      </Grid>
    );
}