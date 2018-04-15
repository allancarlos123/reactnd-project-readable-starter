import React, { Component } from "react";
import faker from "faker";
import {
  Item,
  Button,
  Icon,
  Segment
} from "semantic-ui-react";

export default class ItemPost extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Image
                rounded
                src="https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg"
              />
              <Item.Content>
                <Item.Header as="a">{faker.lorem.sentence()}</Item.Header>
                <Item.Meta>
                  <span>
                    submitted 12 hours ago by <strong>netWork</strong> in{" "}
                    <strong>Investiments</strong>
                  </span>
                </Item.Meta>
                <Item.Description>{faker.lorem.paragraph(5)}</Item.Description>
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
                  224 comments
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}
