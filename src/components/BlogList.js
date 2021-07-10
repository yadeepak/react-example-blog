import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { removeBlog } from "../redux/action";
class BlogList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onDelete = (title) => {
    const allBlogs = [...this.props.blogs];
    const filteredBlogs = allBlogs.filter(
      (blog) => blog.title !== title
    );
    this.props.removeBlog(filteredBlogs);
  };
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.blogs.map((obj, index) => (
          <React.Fragment key={index}>
            <h1>{obj.title}</h1>
            <span>{obj.author}</span>
            <p>{obj.description}</p>
            <button onClick={() => this.onDelete(obj.title)}>delete</button>
            <hr />
          </React.Fragment>
        ))}
      </>
    );
  }
}
const stateToProps = (state) => {
  return { blogs: state };
};
const mapDispatchToActions = (dispatch) => {
  return {
    removeBlog: (data) => dispatch(removeBlog(data)),
  };
};
export default connect(stateToProps, mapDispatchToActions)(BlogList);
