import React, { Component } from 'react';
import './TodoList.css';
import ShowTodo from './ShowTodoBox/ShowTodo';
import UserImg from '../TodoList/UserImg.jpg';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      password: "123456",
      showBox:[{
        username:"222",
        writen: "shjfbaahb",
        src:UserImg
      }],
    }
  }

  submitToDoList() {
    const passWord = document.getElementById("password").value;
    const userName = document.getElementById("username").value;
    const writen = document.getElementById("writingArea").value;
    let showBoxItem = {};
    if(!passWord || !userName || !writen){
      alert("you shoud fufill them")
      return;
    }else if(passWord !== this.state.password){
      alert("Please check the password.");
      return;
    }else {
      showBoxItem.username = userName;
      showBoxItem.writen = writen;
      showBoxItem.src = UserImg;
    }
    const newshowBox = [...this.state.showBox,showBoxItem];
    this.setState({
      showBox : newshowBox
    })
    console.log(this.state.showBox);
  }


  render() {
    return(
      <artical>
        
        <section id="writeSection">
        <header id="headerForTodoList">Add your wishes here</header>
          <table id="usersBox">
          <tr>
            <th>UserName:</th>
            <th><input id="username" type="text" name="username" /></th>
          </tr>
          <tr>
            <th>PassWord:</th>
            <th><input id="password" type="password" name="password" /></th>
          </tr>
          </table>

          <label id="wordsBox">
          <textarea id="writingArea" type="text" />
          <input id="writingSubmitBtn" type="submit" onClick={this.submitToDoList.bind(this)} />
          </label>
        </section>
          
        <ShowTodo
          showTodoBox="showTodoBox"
          imgAndUsername="imgAndUsername"
          showTodoUsernames="showTodoUsernames"
          showTodoWriten="showTodoWriten"
          showBox={this.state.showBox} />
      </artical>
    )
  }
}

export default TodoList;