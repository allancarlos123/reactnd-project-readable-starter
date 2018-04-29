import React, { Component } from "react";
import Slider from "react-slick";
import { Segment } from "semantic-ui-react";
import sliderSettings from "./../../utils/slickConfig";
import { connect } from "react-redux";
import { categoriesFetch } from "./../../actions/categories";

class CategoriesList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <Segment>
          <Slider {...sliderSettings}>
            {this.props.categories.categories.map(category => (
              <div key={category.path}>
                <strong>{category.name}</strong>
              </div>
            ))}
          </Slider>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(categoriesFetch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
