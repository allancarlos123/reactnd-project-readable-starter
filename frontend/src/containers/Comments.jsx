import React, { Component } from "react";
import { connect } from "react-redux";
import { commentFetch, isEditingComment } from "./../actions/comments";
import CommentsList from "./../components/Comment/List";
import CommentForm from "./../components/Comment/Form";

class CommentsContainer extends Component {
	onSubmit() {
		console.log('teste')
	}

	editComment(commentId) {
		this.props.isEditingComment(true)
		this.props.fetchComment(commentId)
		console.log(this.props.initialValues)
	}

  render() {
    const postId = this.props.match.params.id
    return (
      <div>
        <CommentsList editComment={(commentId) => this.editComment(commentId)} postId={postId} />
        <CommentForm {...this.props} isEditing={this.props.comment.isEditing} onSubmit={() => this.onSubmit()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		comment: state.comment,
		initialValues: state.comment.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComment: commentId => dispatch(commentFetch(commentId)),
    isEditingComment: status => dispatch(isEditingComment(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsContainer);
