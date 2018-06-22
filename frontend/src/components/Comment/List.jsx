import React, {Component} from "react";
import {connect} from "react-redux";
import {commentsFetch, deleteCommentPost, voteCommentPost, isEditingComment} from "./../../actions/comments";
import { Header } from "semantic-ui-react";

import ItemComment from "./Item";

class CommentsList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  deleteButtonPress(id, callback) {
    this.props.deleteCommentPost(id, () => {
      this.props.fetchComments()
    })
  }

  voteButtonPress(id, option) {
    this.props.voteCommentPost(id, option, () => {
    })
    this.props.fetchComments()
  }

  render() {
    return (
      <div>
        <Header as='h3' dividing>
          Comments ({this.props.comments.length})
        </Header>

        {this.props.comments.map(comment =>(
          <ItemComment
            key={comment.id}
            voteButton={(id, option) => this.voteButtonPress(id, option)}
            deleteButton={(id) => this.deleteButtonPress(id)}
            comment={comment}
            fetchComment={id => this.props.fetchComment(id)}
            isEditingComment={status => this.props.isEditingComment(status)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {comments: state.comments.comments};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isEditingComment: status => dispatch(isEditingComment(status)),
    fetchComments: () => dispatch(commentsFetch(ownProps.id)),
    // deleteCommentPost: id => dispatch(deleteCommentPost(ownProps.id))
    deleteCommentPost: (id, callback) => dispatch(deleteCommentPost(id, callback)),
    voteCommentPost: (id, option) => dispatch(voteCommentPost(id, option))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
