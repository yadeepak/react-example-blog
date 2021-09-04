import React, { Component } from "react";
import Form from "./components/Form";
import Home from "./pages/Home";
import {UserContext} from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  xyz = {
    title: "title 1",
    author: "author 1",
  };

  render() {
    return (
      <UserContext.Provider value={{ user: { name: "abc", lastName: "xyz" } }}>
        <div>
          <Home />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
