import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SimpleForm from "../components/SimpleForm";
import BlogList from "./BlogList";
import Login from './Login'
import AddBlog from './AddBlog';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={(params) => <AddBlog {...params} />}
          />
           <Route
            path="/login"
            render={(params) => <Login {...params} />}
          />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blogs">
            <BlogList />
          </Route>
        </Switch>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/">Back to home</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Home;

function About() {
  return <h1>About</h1>;
}
function Contact() {
  return <h1>Contact</h1>;
}
function Blog() {
  return <h1>Blog</h1>;
}
