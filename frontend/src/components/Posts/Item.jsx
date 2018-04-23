import React, { Component } from "react";
import faker from "faker";
import { Item, Label, Button, Icon, Segment } from "semantic-ui-react";

export default class ItemPost extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header as="a">{this.props.item.title}</Item.Header>
                <Item.Meta>
                  <small>
                    submitted 12 hours ago by{" "}
                    <strong>{this.props.item.author}</strong> in{" "}
                    <strong>{this.props.item.category}</strong>
                  </small>
                </Item.Meta>
                <Item.Description>{this.props.item.body}</Item.Description>
                <Item.Extra>
                  <Button basic size="mini" icon>
                    <Icon name="chevron up" />
                  </Button>
                  <Button basic size="mini" icon>
                    <Icon name="chevron down" />
                  </Button>

                  {this.props.item.voteScore > 0
                  ? <Label circular color="green">{this.props.item.voteScore}</Label>
                  : <Label circular color="red">{this.props.item.voteScore}</Label>
                  }
                  <Icon name="comment outline" />
                  {this.props.item.commentCount} comments
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}
