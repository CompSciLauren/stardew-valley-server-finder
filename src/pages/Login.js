import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h>Please Enter Your Username and Password</h>
        <form>
          <label>
            Username:
            <input type="text" id="username" name="username" />
          </label>
          <label>
            Password:
            <input type="text" id="password" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
