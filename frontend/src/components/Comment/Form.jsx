import React, {Component} from 'react'

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createComment, commentsFetch} from './../../actions/comments';
import {Button, Form} from 'semantic-ui-react'
import {InputField, TextAreaField} from 'react-semantic-redux-form';

class CommentForm extends Component {
  onSubmit(values) {
    const postId = this.props.id;
    this.props.createComment(postId, values, () => {
      this.props.fetchComments()
    });
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
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComments: () => dispatch(commentsFetch(ownProps.id)),
    createComment: (id, values, callback) => dispatch(createComment(id, values, callback))
  }
}

export default reduxForm({
  form: 'CommentForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(CommentForm))