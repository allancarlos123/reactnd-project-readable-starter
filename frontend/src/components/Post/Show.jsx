import React from "react";
import { Link } from "react-router-dom";

import { Container, Header } from "semantic-ui-react";

export default function PostShow(props) {
  const {post, deletePost} = props

  return (
    <div>
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h1">{post.title}</Header>
      </Container>

      <Container text>
        <Link to="/">Edit Post</Link>

        &nbsp;&nbsp;
        <button onClick={() => deletePost()}>Delete post</button>
        <p>{post.body}</p>
      </Container>
    </div>
  )
}