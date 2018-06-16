import React from "react";
import moment from "moment";
import {Comment, Icon} from "semantic-ui-react";

export default function ItemComment(props) {
  const {comment, deleteAction, recommendAction, editComment} = props
  return (
    <Comment.Group>
      <Comment>
        <Comment.Content>
          <Comment.Author as='a'>{comment.author}
          </Comment.Author>
          <Comment.Metadata>
            <span>{moment(comment.timestamp).toNow(true)}</span >
            <div>
              <Icon name='star'/> {comment.voteScore}
            </div>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text >
          <Comment.Actions>
            <a onClick={() => editComment(comment.id)}>Edit</a>
            <Comment.Action>
              <Icon
                name='thumbs up'
                onClick={() => recommendAction(comment.id, 'upVote')}
              />
            </Comment.Action>
            <Comment.Action>
              <Icon
                name='thumbs down'
                onClick={() => recommendAction(comment.id, 'downVote')}
              />
            </Comment.Action>
            <Comment.Action onClick={() => deleteAction(comment.id)}>
              <Icon name='trash'/>
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  )
}