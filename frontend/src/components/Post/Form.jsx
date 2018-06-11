import _ from 'lodash';
import React, {Component} from 'react'

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost, editPost} from './../../actions/posts';
import {categoriesFetch} from './../../actions/categories';
import {Button, Form} from 'semantic-ui-react'
import {InputField, TextAreaField, SelectField} from 'react-semantic-redux-form';

class PostForm extends Component {
  componentDidMount() {
    const {categoriesFetch} = this.props;
    categoriesFetch();
  }
  
  onSubmit(values) {
    const { match } = this.props;
    
    if (typeof match !== 'undefined') {
      this.props.editPost(match.params.id, values, () => alert('redirecionado...'));
    } else {
      this.props.createPost(values, () => alert('redirecionado...'));
    }
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
            value="aula"
          />

          <Field
            name='body'
            component={TextAreaField}
            label='Content'
            placeholder='Content'
          />

          {typeof this.props.match === 'undefined' &&
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
                    {key: category.name, value: category.name, text: category.name}
                  ))
                }
              />
            </div>
          }

          <Form.Field control={Button} type='submit'>
            {typeof this.props.match !== 'undefined' ? "Edit post" : "Create post"}
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
    createPost: values => dispatch(createPost(values)),
    editPost: (id, values, callback) => dispatch(editPost(id, values, callback)),
    categoriesFetch: () => dispatch(categoriesFetch())
  }
}

export default reduxForm({
  form: 'PostForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(PostForm))