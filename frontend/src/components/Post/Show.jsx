import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postFetch, deletePost } from "./../../actions/posts";

import { Container, Header, Icon, Button } from "semantic-ui-react";

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
          <Button animated='vertical' as={Link} to={`/${this.props.post.category}/${this.props.id}/edit`}>
            <Button.Content hidden>Edit</Button.Content>
              <Button.Content visible>
                <Icon name='pencil' />
            </Button.Content>
          </Button>

          <Button animated='vertical' onClick={() => this.deletePost()}>
            <Button.Content hidden>Delete</Button.Content>
              <Button.Content visible>
                <Icon name='trash' />
            </Button.Content>
          </Button>

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