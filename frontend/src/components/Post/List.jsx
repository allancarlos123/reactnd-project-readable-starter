import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postsFetch, votePost, postsFetchByCategory } from "./../../actions/posts";

import ItemPost from "./Item";

class PostsList extends Component {
  componentDidMount() {
    const { fetchPosts, fetchPostsByCategory, match } = this.props

    if (typeof match !== 'undefined') {
      fetchPostsByCategory(match.params.category)
    } else {
      fetchPosts()
    }
  }

  render() {
    return this.props.posts.map(post => (
      <ItemPost
        key={post.id}
        post={post}
        votePost={(id, option) => this.props.votePost(id, option)}
      />
    ));
  }
}

const mapStateToProps = state => {
  const posts = _.orderBy(state.posts.posts, ['voteScore', 'timestamp'], ['desc', 'desc'])

  return {
    posts: posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsByCategory: category => dispatch(postsFetchByCategory(category)),
    fetchPosts: () => dispatch(postsFetch()),
    votePost: (id, option) => dispatch(votePost(id, option))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
