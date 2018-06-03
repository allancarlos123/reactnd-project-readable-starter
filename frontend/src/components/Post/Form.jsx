import _ from 'lodash';
import React, {Component} from 'react'

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from './../../actions/posts';
import {categoriesFetch} from './../../actions/categories';
import {Button, Form} from 'semantic-ui-react'
import {InputField, TextAreaField, SelectField} from 'react-semantic-redux-form';

class PostForm extends Component {
  componentDidMount() {
    this.props.categoriesFetch();
  }
  
  onSubmit(values) {
    this.props.createPost(values, () => alert('redirecionado...'));
  }

  render() {
    const {handleSubmit, categories} = this.props;

    return (
      <div>
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
            options={
              _.map(categories.categories, category => (
                {key: category.name, value: category.name, text: category.name}
              ))
            }
            placeholder="Choose a category"
          />

          <Form.Field control={Button} type='submit'>
            Create post
          </Form.Field>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default reduxForm({
  form: 'CreatePostForm'
})(
  connect(mapStateToProps, {
    createPost,
    categoriesFetch
  })(PostForm))