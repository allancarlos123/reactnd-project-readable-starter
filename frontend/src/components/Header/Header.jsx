import React from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const HeaderMenu = () => (
  <Header as={Link} to="/" className="app-header" textAlign="center">
    <h1>Reable</h1>
  </Header>
);

export default HeaderMenu;
