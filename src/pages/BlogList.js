import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class BlogListv2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  async componentDidMount() {
    const blogsData = await axios.get("http://localhost:3001/allblogs");
    if (blogsData.status === 200) {
      this.setState({ blogs: blogsData.data });
    }
  }

  deleteBlog = async (id, index) => {
    const response = await axios.delete(
      `http://localhost:3001/blog/remove/${id}`
    );
    if (response && response.status === 200) {
      const cloneBlogs = [...this.state.blogs];
      cloneBlogs.splice(index, 1);
      this.setState({ blogs: cloneBlogs });
    }
  };

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.getTableData()}</tbody>
      </Table>
    );
  }

  getTableData = () => {
    const { blogs } = this.state;
    return blogs.map((blog, index) => (
      <tr key={blog._id}>
        <td>{index + 1}</td>
        <td>{blog.title}</td>
        <td>{blog.author}</td>
        <td dangerouslySetInnerHTML={{ __html: blog.description }}></td>
        <td>{blog.image ?<img src={`http://localhost:3001/${blog.image}`} width="200" height="150" alt="alt"/>:"no image"}</td>
        <td>
          <Button
            variant="danger"
            onClick={() => this.deleteBlog(blog._id, index)}
          >
            Delete
          </Button>

          <Link to={`blog/update/${blog.title}`}>
            <Button
              variant="primary"
            >
              edit
            </Button>
          </Link>
        </td>
      </tr>
    ));
  };
}

export default BlogListv2;
