import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {postFetch, deletePost} from "./../actions/posts";
import {commentFetch, isEditingComment} from "./../actions/comments";

import { Grid } from "semantic-ui-react";
import Header from "./../components/Header/Header";
import PostShow from "./../components/Post/Show";
import CommentsContainer from "./../containers/Comments";

class ShowPostScreen extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  deletePost = () => {
    const {deletePost, history, post} = this.props
    deletePost(post.post.id, () => history.push('/'))
  }

  editComment(commentId) {
    const { fetchComment, isEditingComment } = this.props
    console.log('1', commentId)
    fetchComment(commentId)
    isEditingComment(true)
  }

  render() {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column>
          <PostShow {...this.props.post} deletePost={() => this.deletePost()} />

          <CommentsContainer {...this.props} />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(postFetch(id)),
    deletePost: (id, callback) => dispatch(deletePost(id, callback)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPostScreen));