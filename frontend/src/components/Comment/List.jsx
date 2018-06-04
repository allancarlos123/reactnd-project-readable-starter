import React, {Component} from "react";
import {connect} from "react-redux";
import {commentsFetch, deleteCommentPost, voteCommentPost} from "./../../actions/comments";
import { Header } from "semantic-ui-react";

import ItemComment from "./Item";

class CommentsList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  deleteButtonPress(id) {
    this.props.deleteCommentPost(id, () => {
      // commentsFetch(postId)
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
          Comments
        </Header>

        {this.props.comments.map(comment =>(
          <ItemComment
            key={comment.id}
            voteButton={(id, option) => this.voteButtonPress(id, option)}
            deleteButton={(id) => this.deleteButtonPress(id)}
            comment={comment}
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
    fetchComments: id => dispatch(commentsFetch(ownProps.id)),
    // deleteCommentPost: id => dispatch(deleteCommentPost(ownProps.id))
    deleteCommentPost: id => dispatch(deleteCommentPost(id)),
    voteCommentPost: (id, option) => dispatch(voteCommentPost(id, option))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
