import React, { Component } from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import { addBlog } from "../redux/action";
import { connect } from "react-redux";
class CreateForm extends Component {
  title = "";
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      description: "",
      shouldShowAuthorInput: false,
      blogs: [],
    };
  }
  onSubmit = () => {
    const blogsCopy = [...this.state.blogs];
    const blogObj = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
    };
    // console.log(this.props);
    this.props.insertBlog(blogObj);
    blogsCopy.push(blogObj);
    this.setState({ blogs: blogsCopy });
  };

  updateAuthor = (e) => {
    const isChecked = e.target.checked;
    this.setState({ shouldShowAuthorInput: isChecked });
  };
  componentDidMount() {
    this.title.focus();
  }
  onInputUpdate = (value, keyName) => {
    // console.log(e);
    // const dynamicName = e.target.name;
    // this.setState({ [dynamicName]: e.target.value });
    this.setState({ [keyName]: value });
  };

  render() {
    // console.log(this.state.user);
    return (
      <div>
        <form>
          <label htmlFor="fname">Title</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={(e) => this.onInputUpdate(e.target.value, "title")}
            ref={(ref) => (this.title = ref)}
          />
          <br />
          <label htmlFor="lname">Author</label>
          <br />
          <input
            type="checkbox"
            defaultValue={this.state.shouldShowAuthorInput}
            onChange={this.updateAuthor}
          />
          {this.state.shouldShowAuthorInput && (
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={(e) => this.onInputUpdate(e.target.value, "author")}
            />
          )}
          <br />
          <br />
          <label htmlFor="lname">Description</label>
          <br />
          <textarea
            cols="25"
            name="description"
            onChange={(e) => this.onInputUpdate(e.target.value, "description")}
            value={this.state.description}
          ></textarea>
          <br />
          <input type="button" defaultValue="Submit" onClick={this.onSubmit} />
        </form>
        {/* <BlogList blogs={this.state.blogs} /> */}
        {/* <Counter />
        <Counter2 /> */}
      </div>
    );
  }
}
const mapDispatchToActions = (dispatch) => {
  return {
    insertBlog: (data) => dispatch(addBlog(data)),
  };
};
export default connect(null,mapDispatchToActions)(CreateForm);
