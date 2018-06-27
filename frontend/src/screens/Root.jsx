import React, {Component} from "react";
import {Grid, Menu} from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostsList from "./../components/Post/List";
import CategoriesList from "./../components/Category/List";
import ButtonCreatePost from './../components/UI/Button/CreatePost';

export default class RootScreen extends Component {
  state = {
    activeSortBy: 'recently'
  }

  handleSortBy = (e, { name }) => this.setState({ activeSortBy: name })

  render() {
    const {activeSortBy} = this.state;
    
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header/>
        </Grid.Column>

        <Grid.Column mobile={16}>
          <CategoriesList category={this.props.category}/>
        </Grid.Column>

        <Grid.Column mobile={16} computer={16}>
          <ButtonCreatePost/>
        </Grid.Column>

        <Grid.Column computer={4}>
          <Menu text vertical>
            <Menu.Item header>Sort By</Menu.Item>
            <Menu.Item
              name='recently'
              active={activeSortBy === 'recently'}
              onClick={this.handleSortBy}
            />
            <Menu.Item
              name='mostPopular'
              active={activeSortBy === 'mostPopular'}
              onClick={this.handleSortBy}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column computer={12}>
          <PostsList sortBy={activeSortBy} />
        </Grid.Column>
      </Grid>
    );
  }
}