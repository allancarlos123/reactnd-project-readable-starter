import React, {Component} from "react";
import faker from "faker";
import {Container, Header} from "semantic-ui-react";
import {connect} from "react-redux";
import {postFetch} from "./../../actions/posts";

class PostForm extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>criar post ou editar</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
