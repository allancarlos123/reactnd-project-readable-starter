import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {postFetch, deletePost} from "./../actions/posts";
import {commentFetch, isEditingComment} from "./../actions/comments";

import { Grid } from "semantic-ui-react";
import Header from "./../components/Header/Header";
import PostShow from "./../components/Post/Show";
import CommentsList from "./../components/Comment/List";
import CommentForm from "./../components/Comment/Form";

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
    
          <CommentsList {...this.props} editComment={() => this.editComment()} />
          <CommentForm {...this.props} comment={this.props.comment} />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.post,
    comment: state.comment
  }
  // const isEditingComment = state.comment.isEditing
  
  // if (isEditingComment) {
  //   return {
  //     comment: state.comment,
  //     initialValues: state.comment.comment
  //   }
  // } else {
  //   return {
  //     comment: state.comment
  //   }
  // }
}

const mapDispatchToProps = dispatch => {  
  return {
    fetchComment: commentId => console.log('2', commentId),
    fetchPost: id => dispatch(postFetch(id)),
    deletePost: (id, callback) => dispatch(deletePost(id, callback)),
    isEditingComment: status => dispatch(isEditingComment(status))
  }
  
  // return {
    // isEditingComment: status => dispatch(isEditingComment(status)),
    // fetchComment: id => dispatch(commentFetch(id))
  // }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPostScreen));