import React, { Component } from "react";
import { connect } from "react-redux";
import { postsFetch } from "./../../actions";

import ItemPost from "./Item";

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return (
      this.props.posts.map(post => 
        <ItemPost key={post.id} post={post} />
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    hasError: state.postsHaveError,
    isLoading: state.postsAreLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(postsFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
