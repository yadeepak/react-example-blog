import React, { Component } from "react";
import { connect } from "react-redux";
import { addBlog } from "../redux/action";
import { UserContext } from "../context/UserContext";
import axios from "axios";
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

  onFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const config = {
      Authorization: 'Bearer '+token
    };
    const reqData = {
      product_id: 123,
      product_name: "product 1"
    };
    const {data} = await axios.post("https://mern-be-2.herokuapp.com/product", reqData,{
      headers:config
    });

    console.log(data);

    // this.props.insertBlog(dataObj);
    // this.props.history.push("/blog");
  };

  render() {
    const { title, description } = this.state;
    return (
      <UserContext.Consumer>
        {(data) => {
          const { user } = data;
          return (
            <form onSubmit={this.onFormSubmit}>
              <input
                value={title || user.name}
                onChange={(e) => this.onInputChange("title", e.target.value)}
              />
              <textarea
                value={description || user.lastName}
                onChange={(e) =>
                  this.onInputChange("description", e.target.value)
                }
              ></textarea>
              <input type="submit" />
            </form>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
const mapDispatchToActions = (dispatch) => {
  return {
    insertBlog: (data) => dispatch(addBlog(data)),
  };
};
export default connect(null, mapDispatchToActions)(SimpleForm);
