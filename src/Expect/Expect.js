import React, { Component } from 'react';
import TodoList from "./TodoList/TodoList";
import './Expect.css'

class Expect extends Component {
  render() {
    return (
      <div id="expect">
        <TodoList />
      </div>
    )
  }
}

export default Expect;