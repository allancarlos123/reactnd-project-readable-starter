import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postFetch, deletePost } from "./../../actions/posts";

import { Container, Header } from "semantic-ui-react";

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id)
  }

  deletePost() {
    const { deletePost, history } = this.props
    
    deletePost(() => history.push('/'))
  }

  render() {
    return (
      <div>
        <Container text style={{ marginTop: "2em" }}>
          <Header as="h1">{this.props.post.title}</Header>
        </Container>

        <Container text>
          <Link to={`/${this.props.post.category}/${this.props.id}/edit`}>Edit Post</Link>

          &nbsp;&nbsp;
          <button onClick={() => this.deletePost()}>Delete post</button>
          <p>{this.props.post.body}</p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post.post
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPost: id => dispatch(postFetch(id)),
    deletePost: callback => dispatch(deletePost(ownProps.id, callback))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow))