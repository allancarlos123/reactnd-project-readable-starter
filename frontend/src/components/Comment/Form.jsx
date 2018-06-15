import React, {Component} from 'react'

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {editComment, createComment, commentsFetch, commentFetch, isEditingComment} from './../../actions/comments';
import {Button, Form} from 'semantic-ui-react'
import {InputField, TextAreaField} from 'react-semantic-redux-form';

class CommentForm extends Component { 
  onSubmit(values) {
    const isEditingComment = this.props.comment.isEditing;

    if (isEditingComment) {
      const commentId = this.props.comment.comment.id
      this.props.editComment(commentId, values, () => {
        this.props.fetchComments()
      })
    } else {
      const postId = this.props.id;
      this.props.createComment(postId, values, () => {
        this.props.fetchComments()
      });
    }
    
  }

  cancelEdit(e) {
    this.props.isEditingComment(false)
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div>
        <Form reply onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name = 'author'
            component = {InputField}
            placeholder = 'Author'
          />

          <Field
            name="body"
            component={TextAreaField}
            placeholder="Content"
          />
          
          <Form.Field
            control={Button}
            type="submit"
            content='Add Comment'
            labelPosition='left'
            icon='edit'
            primary>
          </Form.Field>

          {this.props.comment.isEditing &&
            <Button
              onClick={(e) => this.cancelEdit(e)}
              content="Cancel"
            />
          }
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment,
    comments: state.comments.comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isEditingComment: status => dispatch(isEditingComment(status)),
    editComment: (id, values, callback) => dispatch(editComment(id, values, callback)),
    fetchComments: () => dispatch(commentsFetch(ownProps.id)),
    createComment: (id, values, callback) => dispatch(createComment(id, values, callback))
  }
}

CommentForm = reduxForm({
  form: 'CommentForm',
  enableReinitialize: true
})(CommentForm);

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);