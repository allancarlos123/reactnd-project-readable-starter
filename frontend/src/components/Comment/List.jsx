import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {commentsFetch, deleteCommentPost} from "./../../actions/comments";
import { Header } from "semantic-ui-react";

import ItemComment from "./Item";

class CommentsList extends Component {
  componentDidMount() {
    this
      .props
      .fetchComments();
  }

  deleteButtonPress(id) {
    const {deleteCommentPost, commentsFetch} = this.props;
    
    this.props.deleteCommentPost(id, () => {
      // commentsFetch(postId)
    })
  }

  render() {
    return (
      <div>
        <Header as='h3' dividing>
          Comments
        </Header>

        {this
          .props
          .comments
          .map(comment => (<ItemComment key={comment.id} deleteButton={(id) => this.deleteButtonPress(id)} comment={comment}/>))}
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
    deleteCommentPost: id => dispatch(deleteCommentPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
