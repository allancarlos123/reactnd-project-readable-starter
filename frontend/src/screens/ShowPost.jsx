import React, {Component} from "react";
import {connect} from "react-redux";
import {commentFetch, isEditingComment} from "./../actions/comments";

import { Grid } from "semantic-ui-react";
import Header from "./../components/Header/Header";
import PostShow from "./../components/Post/Show";
import CommentsList from "./../components/Comment/List";
import CommentForm from "./../components/Comment/Form";

class ShowPostScreen extends Component {
  render() {
    return (
      <Grid columns={1} container>
        <Grid.Column>
          <Header />
        </Grid.Column>
    
        {/* <Grid.Column mobile={16}>
          <CategoriesList />
        </Grid.Column> */}
    
        <Grid.Column>
          <PostShow {...this.props} />
    
          <CommentsList {...this.props} />
          <CommentForm {...this.props} />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  const isEditingComment = state.comment.isEditing
  
  if (isEditingComment) {
    return {
      comment: state.comment,
      initialValues: state.comment.comment
    }
  } else {
    return {
      comment: state.comment
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isEditingComment: status => dispatch(isEditingComment(status)),
    fetchComment: id => dispatch(commentFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPostScreen);