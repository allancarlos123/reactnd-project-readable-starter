import React, {Component} from "react";
import moment from "moment";
import {Comment, Icon} from "semantic-ui-react";

class ItemComment extends Component {
  render() {
    return (
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author as='a'>{this.props.comment.author}</Comment.Author>
            <Comment.Metadata>
              <span>{moment(this.props.comment.timestamp).toNow(true)}</span>
              <div>
                <Icon name='star' />
                {this.props.comment.voteScore}
              </div>
            </Comment.Metadata>
            <Comment.Text>{this.props.comment.body}</Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
              <Comment.Action>
                <Icon name='thumbs up' onClick={() => this.props.voteButton(this.props.comment.id, 'upVote')} />
              </Comment.Action>
              <Comment.Action>
                <Icon name='thumbs down' onClick={() => this.props.voteButton(this.props.comment.id, 'downVote')} />
              </Comment.Action>
              <Comment.Action onClick={() => this.props.deleteButton(this.props.comment.id)}>
                <Icon name = 'trash' />
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );
  }
}

export default ItemComment;