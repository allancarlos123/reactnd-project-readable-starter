import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { categoriesFetch } from "./../../actions/categories";
import sliderSettings from "./../../utils/slickConfig";

import Slider from "react-slick";
import { Segment } from "semantic-ui-react";

class CategoriesList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
        <Segment loading={this.props.categories.isFetching}>
          <Slider {...sliderSettings}>
            {_.map(this.props.categories.categories, category => (
              <div key={category.path}>
                <Link to={`/${category.name}`}>{category.name}</Link>
              </div>
            ))}
          </Slider>
        </Segment>
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
