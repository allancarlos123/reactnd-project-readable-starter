import React, { Component } from "react";
import Slider from "react-slick";
import { Segment } from "semantic-ui-react";
import slickSettings from "./../../utils/slickConfig";

export default class CategoriesList extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Slider {...slickSettings}>
            <div>
              <strong>All topics</strong>
            </div>

            <div>
              <strong>Games</strong>
            </div>

            <div>
              <strong>Music</strong>
            </div>

            <div>
              <strong>Science</strong>
            </div>

            <div>
              <strong>Entertainment</strong>
            </div>

            <div>
              <strong>Technology</strong>
            </div>

            <div>
              <strong>Politics</strong>
            </div>

            <div>
              <strong>Sports</strong>
            </div>

            <div>
              <strong>Travel</strong>
            </div>
          </Slider>
        </Segment>
      </div>
    );
  }
}
