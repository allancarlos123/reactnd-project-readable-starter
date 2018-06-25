import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {postsFetch, votePost, postsFetchByCategory, deletePost} from "./../../actions/posts";

import ItemPost from "./Item";

class PostsList extends Component {
  componentDidMount() {
    const {fetchPosts, fetchPostsByCategory, match} = this.props
    
    if (typeof match !== 'undefined') {
      fetchPostsByCategory(match.params.category)
    } else {
      fetchPosts()
    }
  }
  
  componentWillUpdate() {
    const {fetchPosts, fetchPostsByCategory, match} = this.props
    typeof match !== 'undefined' && fetchPostsByCategory(match.params.category)
  }

  votePost(id, option) {
    this.props.votePost(id, option, () => {
      this.props.fetchPosts()
    })
  }

  deletePost(id) {
    const { deletePost, history } = this.props

    deletePost(id, () => this.props.fetchPosts())
  }

  render() {
    return (
      this.props.posts.map(post => (
        <ItemPost
          key={post.id}
          post={post}
          votePost={(id, option) => this.votePost(id, option)}
          deletePost={id => this.deletePost(id)}
        />
      ))
    )
  }
}

const mapStateToProps = state => {
  const posts = _.orderBy(state.posts.posts, 'timestamp', 'desc')

  return {posts: posts};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsByCategory: category => dispatch(postsFetchByCategory(category)),
    // fetchPost: id => dispatch(postFetch(id)),
    fetchPosts: () => dispatch(postsFetch()),
    votePost: (id, option, callback) => dispatch(votePost(id, option, callback)),
    deletePost: (id, callback) => dispatch(deletePost(id, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
