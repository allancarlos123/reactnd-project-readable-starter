import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {deletePost, votePost} from "./../../actions/posts";
import { Container, Header, Icon, Button, Label } from "semantic-ui-react";

class PostShow extends Component {
  deletePost() {
    const { deletePost, history } = this.props
    
    deletePost(() => history.push('/'))
  }

  votePost(id, option) {
    this.props.votePost(id, option, () => {
      this.props.fetchPost(this.props.post.id)
    })
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <Container text style={{ marginTop: "2em" }}>
          <Header as="h1">{post.title}</Header>
        </Container>

        <Container text>
          <Label as='a' basic image>
            <img src='https://image.flaticon.com/icons/svg/149/149071.svg' />
            {post.author}
          </Label>

          <Button
            basic
            size="mini"
            icon
            onClick={() => this.votePost(post.id, "upVote")}>
            <Icon name="chevron up" />
          </Button>

          <Button
            basic
            size="mini"
            icon
            onClick={() => this.votePost(post.id, "downVote")}>
            <Icon name="chevron down" />
          </Button>

          <Label as='a' basic color={post.voteScore > 0 ? 'green' : 'red'} size="large" style={{'verticalAlign': 'middle'}}>
            {post.voteScore}
          </Label>
        
          <Button animated='vertical' as={Link} to={`/${post.category}/${this.props.id}/edit`}>
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

          <p>{post.body}</p>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: callback => dispatch(deletePost(ownProps.id, callback)),
    votePost: (id, option, callback) => dispatch(votePost(id, option, callback))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(PostShow))