import React from "react"
import {Link} from "react-router-dom"
import {Button, Icon} from "semantic-ui-react"

export default function ButtonCreatePost(props) {
  return (
    <Button as={Link} to="/new" fluid color="pink" floated="right" icon>
      <Icon name="add"/>
      Create a post
    </Button>
  )
}