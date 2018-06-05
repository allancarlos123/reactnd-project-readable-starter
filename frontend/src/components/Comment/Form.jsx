import _ from 'lodash';
import React, {Component} from 'react'

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createComment} from './../../actions/comments';
import {Button, Comment, Form} from 'semantic-ui-react'
import {InputField, TextAreaField, SelectField} from 'react-semantic-redux-form';

class CommentForm extends Component {
  onSubmit(values) {
    values.id = Math.floor((1 + Math.random()) * 0x10000),
    values.timestamp = Date.now();
    values.parentId = this.props.id;
    this.props.createComment(this.props.id, values);
  }

  render() {
    const {handleSubmit, categories} = this.props;

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
    // categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: (id, values) => dispatch(createComment(id, values))
  }
}

export default reduxForm({
  form: 'CreateCommentForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(CommentForm))