import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "./../../actions";

import ItemPost from "./Item";


class PostsList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    return (
      this.props.items.map(item => 
        <ItemPost key={item.id} item={item} />
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(itemsFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
