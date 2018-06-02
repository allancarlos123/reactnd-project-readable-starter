import React, { Component } from "react";
import faker from "faker";
import { Container, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { postFetch } from "./../../actions/posts";

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  render() {
    return (
      <div>
        <Container text style={{ marginTop: "2em" }}>
          <Header as="h1">{this.props.post.title}</Header>
        </Container>

        <Container text>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(postFetch(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
