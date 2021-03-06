import _ from 'lodash';
import React, { Component } from 'react'
import { Field, reduxForm, destroy } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createPost, postFetch, editPost } from './../../actions/posts';
import { categoriesFetch } from './../../actions/categories';

import { Button, Form, Header } from 'semantic-ui-react'
import { InputField, TextAreaField, SelectField } from 'react-semantic-redux-form';

class PostForm extends Component {
  componentDidMount() {
    const { categoriesFetch, postFetch, match } = this.props

    if (typeof match.params.id !== 'undefined') {
      postFetch(match.params.id)
    } else {
      categoriesFetch()
    }
  }

  onSubmit(values) {
    const { match, history } = this.props

    if (typeof match.params.id !== 'undefined') {
      this.props.editPost(match.params.id, values, () => history.push('/'))
    } else {
      this.props.createPost(values, () => history.push('/'))
    }
      this.props.limpar('PostForm')
  }

  render() {
    const { handleSubmit, pristine, submitting, categories, match } = this.props
    
    return (
      <div>
        <Header as='h3' dividing>
          {typeof match.params.id === 'undefined'
            ? 'Create post'
            : 'Edit post'
          }
        </Header>

        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            required
            name='title'
            component={InputField}
            label='Title'
            placeholder='Title'
          />

          <Field
            required
            name='body'
            component={TextAreaField}
            label='Content'
            placeholder='Content'
          />

            {typeof match.params.id === 'undefined' && <div>
              <Field
                required
                name='author'
                component={InputField}
                label='Author'
                placeholder='Author'
              />

              <Field
                required
                component={SelectField}
                name='category'
                label="Choose a category"
                placeholder="Choose a category"
                options={_.map(categories.categories, category => ({ key: category.name, value: category.name, text: category.name }))}
              />
            </div>
          }

          <Form.Field control={Button} type='submit' disabled={submitting}>
            {typeof this.props.match.params.id !== 'undefined'
              ? "Edit post"
              : "Create post"}
          </Form.Field>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const isEditPost = typeof ownProps.match.params.id !== 'undefined'

  if (isEditPost) {
    return {
      categories: state.categories,
      post: state.post,
      initialValues: state.post.post
    }
  } else {
      return {
        categories: state.categories
      }
  }

}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (values, callback) => dispatch(createPost(values, callback)),
    editPost: (id, values, callback) => dispatch(editPost(id, values, callback)),
    categoriesFetch: () => dispatch(categoriesFetch()),
    postFetch: id => dispatch(postFetch(id)),
    limpar: form => dispatch(destroy(form))
  }
}


PostForm = reduxForm({
  form: 'PostForm',
  enableReinitialize: true
})(PostForm);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))