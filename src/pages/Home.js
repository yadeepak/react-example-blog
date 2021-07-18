import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import {SimpleFormWithHooks} from "../components/SimpleFormWithHooks";
import BlogList from "../components/BlogList";

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
            render={(params) => <SimpleFormWithHooks {...params} />}
          />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
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
            <Link to="blog">Blog</Link>
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
