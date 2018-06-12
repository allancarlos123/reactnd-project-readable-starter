import _ from 'lodash';
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createPost, editPost } from './../../actions/posts';
import { categoriesFetch } from './../../actions/categories';

import { Button, Form, Header } from 'semantic-ui-react'
import { InputField, TextAreaField, SelectField } from 'react-semantic-redux-form';

class PostForm extends Component {
  componentDidMount() {
    const { categoriesFetch } = this.props
    categoriesFetch()
  }

  onSubmit(values) {
    const { match, history } = this.props

    if (typeof match.params.id !== 'undefined') {
      this.props.editPost(match.params.id, values, () => history.push('/'))
    } else {
      this.props.createPost(values, () => history.push('/'))
    }
  }

  render() {
    const { handleSubmit, categories, match } = this.props

    return (
      <div>
        <Header as='h3' dividing>
          {typeof match.params.id === 'undefined' ? 'Create post' : 'Edit post'}
        </Header>

        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name='title'
            component={InputField}
            label='Title'
            placeholder='Title'
          />

          <Field
            name='body'
            component={TextAreaField}
            label='Content'
            placeholder='Content'
          />

          {typeof match.params.id === 'undefined' &&
            <div>
              <Field
                name='author'
                component={InputField}
                label='Author'
                placeholder='Author'
              />

              <Field
                component={SelectField}
                name='category'
                label="Choose a category"
                placeholder="Choose a category"
                options={
                  _.map(categories.categories, category => (
                    { key: category.name, value: category.name, text: category.name }
                  ))
                }
              />
            </div>
          }

          <Form.Field control={Button} type='submit'>
            {typeof this.props.match.params.id !== 'undefined' ? "Edit post" : "Create post"}
          </Form.Field>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (values, callback) => dispatch(createPost(values, callback)),
    editPost: (id, values, callback) => dispatch(editPost(id, values, callback)),
    categoriesFetch: () => dispatch(categoriesFetch())
  }
}

export default withRouter(
  reduxForm({ form: 'PostForm' }
)(
  connect(mapStateToProps, mapDispatchToProps)(PostForm))
)