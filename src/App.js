import React, { Component } from "react";
import Form from "./components/Form";
import Home from "./pages/Home";
class App extends Component {
  xyz = {
    title: "title 1",
    author: "author 1",
  };

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
