import React, {Component} from "react";
import moment from "moment";
import {Item, Label, Button, Icon, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class ItemPost extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header as={Link} to={`${this.props.post.category}/${this.props.post.id}`}>{this.props.post.title}</Item.Header>
                <Item.Meta>
                  <small>submitted {moment(this.props.post.timestamp).toNow(true)}
                    by {" "}
                    <strong>{this.props.post.author}</strong>
                    in{" "}
                    <strong>{this.props.post.category}</strong>
                  </small>
                </Item.Meta>
                <Item.Description>{this.props.post.body}</Item.Description>
                <Item.Extra>
                  <Button size="mini" animated='vertical' as={Link} to={`/${this.props.post.category}/${this.props.post.id}/edit`}>
                    <Button.Content hidden>Edit</Button.Content>
                    <Button.Content visible>
                      <Icon name='pencil' />
                    </Button.Content>
                  </Button>

                  <Button size="mini" animated='vertical' onClick={() => this.props.deletePost(this.props.post.id)}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                      <Icon name='trash' />
                    </Button.Content>
                  </Button>

                  <Button
                    basic
                    size="mini"
                    icon
                    onClick={() => this.props.votePost(this.props.post.id, "upVote")}>
                    <Icon name="chevron up"/>
                  </Button>
                  <Button
                    basic
                    size="mini"
                    icon
                    onClick={() => this.props.votePost(this.props.post.id, "downVote")}>
                    <Icon name="chevron down"/>
                  </Button>
                  {this.props.post.voteScore > 0
                    ? (
                      <Label circular color="green">
                        {this.props.post.voteScore}
                      </Label>
                    )
                    : (
                      <Label circular color="red">
                        {this.props.post.voteScore}
                      </Label>
                    )}
                  <Icon name="comment outline"/> {this.props.post.commentCount}
                  comments
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}