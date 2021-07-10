import React, { Component } from "react";
import { connect } from "react-redux";
import { addBlog } from "../redux/action";

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  onInputChange = (key, value) => {
    this.setState({ [key]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const dataObj = {
      title,
      description,
    };
    this.props.insertBlog(dataObj);
    this.props.history.push("/blog");
  };

  render() {
    const { title, description } = this.state;
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input
            value={title}
            onChange={(e) => this.onInputChange("title", e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => this.onInputChange("description", e.target.value)}
          ></textarea>
          <input type="submit" />
        </form>
      </>
    );
  }
}
const mapDispatchToActions = (dispatch) => {
  return {
    insertBlog: (data) => dispatch(addBlog(data)),
  };
};
export default connect(null, mapDispatchToActions)(SimpleForm);
