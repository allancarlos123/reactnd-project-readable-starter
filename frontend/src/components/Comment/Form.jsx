import React from 'react'
import {Field, reduxForm} from 'redux-form';

import {Button, Form} from 'semantic-ui-react'
import {InputField, TextAreaField} from 'react-semantic-redux-form';

function CommentForm(props) {
  const {handleSubmit, cancelEdit, onSubmit, isEditing} = props;

  return (
    <div>
    <Form reply onSubmit={handleSubmit(onSubmit.bind(this))}>
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

      {isEditing &&
        <Button
          onClick={(e) => cancelEdit(e)}
          content="Cancel"
        />
      }
    </Form>
    </div>
  )
}

CommentForm = reduxForm({
  form: 'CommentForm',
  enableReinitialize: true
})(CommentForm);

export default CommentForm;



// import React, {Component} from 'react'

// import {Field, reduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// import {editComment, createComment, commentsFetch, isEditingComment} from './../../actions/comments';
// import {Button, Form} from 'semantic-ui-react'
// import {InputField, TextAreaField} from 'react-semantic-redux-form';

// class CommentForm extends Component {
//   onSubmit(values) {
//     const isEditingComment = this.props.comment.isEditing;
//     const postId = this.props.match.params.id

//     if (isEditingComment) {
//       const commentId = this.props.comment.comment.id
//       this.props.editComment(commentId, values, () => {
//         this.props.fetchComments(postId)
//       })
//     } else {
//       this.props.createComment(postId, values, () => {
//         this.props.fetchComments(postId)
//       });
//     }

//   }

//   cancelEdit(e) {
//     this.props.isEditingComment(false)
//   }

//   render() {
//     const {handleSubmit} = this.props;

//     return (
//       <div>
//         <Form reply onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//           <Field
//             name = 'author'
//             component = {InputField}
//             placeholder = 'Author'
//           />

//           <Field
//             name="body"
//             component={TextAreaField}
//             placeholder="Content"
//           />

//           <Form.Field
//             control={Button}
//             type="submit"
//             content='Add Comment'
//             labelPosition='left'
//             icon='edit'
//             primary>
//           </Form.Field>

//           {this.props.comment.isEditing &&
//             <Button
//               onClick={(e) => this.cancelEdit(e)}
//               content="Cancel"
//             />
//           }
//         </Form>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
// console.log(state.comment.comment)
//   return {
//     comment: state.comment,
//     comments: state.comments.comments,
//     initialValues: state.comment.comment
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const postId = ownProps.match.params.id

//   return {
//     isEditingComment: status => dispatch(isEditingComment(status)),
//     editComment: (id, values, callback) => dispatch(editComment(postId, values, callback)),
//     fetchComments: () => dispatch(commentsFetch(postId)),
//     createComment: (id, values, callback) => dispatch(createComment(id, values, callback))
//   }
// }

// CommentForm = reduxForm({
//   form: 'CommentForm',
//   enableReinitialize: true
// })(CommentForm);

// export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);