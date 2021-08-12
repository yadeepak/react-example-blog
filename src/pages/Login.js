import axios from "axios";
import React from "react";
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            user: [],
        }
    }
    onSubmit = async () => {
        const user = [...this.state.user];
        const userObj = {
            username: this.state.username,
            password: this.state.password,

        };
      const {data} = await  axios.post("http://localhost:3001/login",userObj);
      console.log(data,"data");
      localStorage.setItem('token',data.token);
        // user.push(userObj);
        // this.setState({ user: user });

    };
    updateFn = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div class="container mt-5">
                <form>
                    USERNAME: <input type="text" defaultValue={this.state.username} name="username" onChange={this.updateFn} /><br /><br />
                    PASSWORD: <input type="text" defaultValue={this.state.password} name="password" onChange={this.updateFn} /><br /><br />
                    <input class="ml-5" type="button" defaultValue="submit" onClick={this.onSubmit} />
                </form>
                {this.state.user.map((userObj) => (
                    <h1>
                        {userObj.username}
                        <p>{userObj.password}</p>

                    </h1>
                ))}

            </div>
        );
    }
}

export default Login;