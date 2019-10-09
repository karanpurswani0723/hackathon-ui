import React, { Component } from "react";

class LoginComponent extends Component {
  state = {
    userName: "",
    password: ""
  };

  authenticate = () => {
    console.log(this.state);
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>User Name</label>
              </td>
              <td>
                <input
                  name="userName"
                  defaultValue={this.state.userName}
                  onChange={event =>
                    this.setState({ userName: event.target.value })
                  }
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                <input
                  name="password"
                  defaultValue={this.state.password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                ></input>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={() => this.authenticate()}>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LoginComponent;
