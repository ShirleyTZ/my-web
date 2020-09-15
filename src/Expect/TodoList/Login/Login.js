import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div>
        <header id="headerForTodoList">欢迎注册</header>
        <table id="usersBox">
          <tbody>
            <tr>
              <td>UserName:</td>
              <td><input id="username" type="text" name="username" /></td>
            </tr>
            <tr>
              <td>PassWord:</td>
              <td><input id="password" type="password" name="password" /></td>
            </tr>
            <tr>
              <td>PassWord Check:</td>
              <td><input id="passwordCheck" type="password" name="passwordCheck" /></td>
            </tr>
          </tbody>
        </table>
        <input id="writingSubmitBtn" type="submit" onClick={this.props.onClick} />
      </div>
    )
  }
}

export default Login;