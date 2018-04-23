import React, { Component } from "react";
import faker from "faker";
import { Item, Button, Icon, Segment } from "semantic-ui-react";

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
                    submitted 12 hours ago by <strong>{this.props.item.author}</strong> in{" "}
                    <strong>{this.props.item.category}</strong>
                  </small>
                </Item.Meta>
                <Item.Description>{this.props.item.body}</Item.Description>
                <Item.Extra>
                  <Button basic size="mini" icon labelPosition="left">
                    <Icon name="chevron up" />
                    238
                  </Button>
                  <Button basic size="mini" icon labelPosition="left">
                    151
                    <Icon name="chevron down" />
                  </Button>
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
