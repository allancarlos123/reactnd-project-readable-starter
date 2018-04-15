import React, { Component } from "react";
import HeaderMenu from "./../components/Header/Menu";
import PostsList from "./../components/Posts/List";
import { Container } from "semantic-ui-react";

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <Container>
          <HeaderMenu />

          <PostsList />
        </Container>
      </div>
    );
  }
}
