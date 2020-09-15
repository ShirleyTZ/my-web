import React, { Component } from 'react';

class User extends Component {
  render() {
    return(
      <div>
        <header id="headerForTodoList">Add your wishes here</header>
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
            </tbody>
          </table>

          <label id="wordsBox">
          <textarea id="writingArea" type="text" />
          <input id="writingSubmitBtn" type="submit" onClick={this.props.onClick} />
          </label>
      </div>
    )
  }
}

export default User;