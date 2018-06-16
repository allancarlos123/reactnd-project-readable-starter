import React, {Component} from "react";
import {connect} from "react-redux";
import {commentsFetch, deleteCommentPost, voteCommentPost} from "./../../actions/comments";
import { Header } from "semantic-ui-react";

import ItemComment from "./Item";

class CommentsList extends Component {
  componentDidMount() {
    const {postId} = this.props
    this.props.fetchComments(postId)
  }

  deleteAction(commentId, callback) {
    const {postId} = this.props

    this.props.deleteCommentPost(commentId, () => {
      this.props.fetchComments(postId)
    })
  }

  recommendAction(id, option) {
    const {postId} = this.props
    const {voteCommentPost, fetchComments} = this.props
    voteCommentPost(id, option, () => fetchComments(postId))
  }

  render() {
    return (
      <div>
        <Header as='h3' dividing>
          Comments
        </Header>

        {this.props.comments.map(comment =>(
          <ItemComment
            key={comment.id}
            comment={comment}
            recommendAction={(id, option, callback) => this.recommendAction(id, option, callback)}
            deleteAction={commentId => this.deleteAction(commentId)}
            editComment={commentId => this.props.editComment(commentId)}
            // isEditingComment={status => this.props.isEditingComment(status)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {comments: state.comments.comments};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (id) => dispatch(commentsFetch(id)),
    deleteCommentPost: (id, callback) => dispatch(deleteCommentPost(id, callback)),
    voteCommentPost: (id, option, callback) => dispatch(voteCommentPost(id, option, callback))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
