import React, {Component} from "react";
import {connect} from "react-redux";
import {postFetch} from "./../actions/posts";
import {commentFetch, isEditingComment} from "./../actions/comments";
import { Grid } from "semantic-ui-react";

import Header from "./../components/Header/Header";
import PostShow from "./../components/Post/Show";
import CommentsList from "./../components/Comment/List";
import CommentForm from "./../components/Comment/Form";
import Page404 from './Page404';

class ShowPostScreen extends Component {
  componentDidMount() {
    this.props.postFetch(this.props.id)
  }
  
  render() {
    const { post, postFetching } = this.props

    if (!postFetching && Object.keys(post).length === 0) {
      return <Page404/>
    }

    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>

        <Grid.Column>
          <PostShow {...this.props} />
    
          <CommentsList {...this.props} />
          <CommentForm {...this.props} />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = ({ comment, post }) => ({  
  comment,
  initialValues: comment.isEditing ? comment.comment : undefined,
  post: post.post,
  postFecthing: post.isFetching
})

const mapDispatchToProps = dispatch => {
  return {
    postFetch: id => dispatch(postFetch(id)),
    isEditingComment: status => dispatch(isEditingComment(status)),
    fetchComment: id => dispatch(commentFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPostScreen);