import React, { Component } from "react";
class Webpage extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            age: "",
            email: "",
            number: "",
            user: [],
        };
    }

    onSubmit = () => {
        const user = [...this.state.user];
        const userObj = {
          fname: this.state.fname,
          lname: this.state.lname,
        };
        user.push(userObj);
        this.setState({ user: user });
      };
      updateFn = (e) => {
        this.setState({ fname: e.target.value});
      };

 
    render() {
        return (
            <div>
                <nav class="navbar bg-primary">
                    <h1>Stinker</h1>
                </nav>
                <div class="container mt-3">
                    <form>
                        <div class="form-group row">
                            <div class="col-md-6">
                                <p>First Name:  <input type="text" class="form-control" defaultValue={this.state.fname} onChange={this.updateFn} /></p>
                                <p>Last Name:  <input type="text" class="form-control" defaultValue={this.state.lname} onChange={this.updateFn} /></p>
                                <p>Age:  <input type="text" class="form-control" defaultValue={this.state.age} onChange={this.updateFn} /></p>
                                <p>Email:  <input type="text" class="form-control" defaultValue={this.state.email} onChange={this.updateFn} /></p>
                                <p>Number:  <input type="text" class="form-control" defaultValue={this.state.number} onChange={this.updateFn} /></p>
                                <p>User:  <input type="text" class="form-control" defaultValue={this.state.user} onChange={this.updateFn} /></p>
                                <input type="button" defaultValue="Submit" onClick={this.onSubmit} />
                            </div>
                            <div class="col-md-6">
                                <img src="./logo512.png"></img>
                            </div>
                        </div>
                    </form>
                </div>
                {this.state.user.map((userObj) => (
          <h1>
            {userObj.fname} <p>{userObj.lname}</p>
          </h1>
        ))}
            </div>

        );
    }
}

export default Webpage;