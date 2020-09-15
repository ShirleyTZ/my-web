import React, { Component } from 'react';
import './TodoList.css';
import Login from './Login/Login';
import User from './User/User';
import ShowTodo from './ShowTodoBox/ShowTodo';
import UserImg from '../TodoList/UserImg.jpg';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      show:[]
    }
  }

  componentDidMount(){
    var storage=localStorage.getItem("showBox");
    var storageItem = JSON.parse(storage);
    this.setState({
      show:storageItem
    });
  }

  checkLogin(i) {
    if(this.state.Login !== i){
      this.setState({
        login: i
      })
    }
  }

  loginClick() {
    let obj = [];
    const passWord = document.getElementById("password").value;
    const userName = document.getElementById("username").value;
    const userImg = document.getElementById("passwordCheck").value;
    let ls_users = localStorage.getItem("users");
    
    if(ls_users) {
      obj = JSON.parse(ls_users);
      let findItem = obj.some(item => {
        if(item.userName === userName) {
          return true;
        }
      })

      if(findItem){
        alert("该账号已经注册可以直接登录");
      }else{
        obj.push({userName,passWord});
        localStorage.setItem("users",JSON.stringify(obj));
        alert("注册成功可以直接登录");
      }
      
    }else{
      obj.push({userName,passWord});
      localStorage.setItem("users",JSON.stringify(obj));
      alert("注册成功可以直接登录");
    }
  }

  submitToDoList() {
    const passWord = document.getElementById("password").value;
    const userName = document.getElementById("username").value;
    const writen = document.getElementById("writingArea").value;
    let ls_users = localStorage.getItem("users");
    let obj = JSON.parse(ls_users);
    let findItem = obj.some(item => {
      if(item.userName === userName && item.passWord === passWord) {
        return true;
      }
    })

    let showBoxItem = {};
    let obj2 = [];
    let ls_showBox = localStorage.getItem("showBox");
    
    if(!passWord || !userName || !writen){
      alert("you shoud fufill them")
      return;
    }else if(findItem){
      showBoxItem.username = userName;
      showBoxItem.writen = writen;
      showBoxItem.src = UserImg;
    }else{
      alert("Please check the PassWord and UserName.");
      return false;
    }

    if(ls_showBox){
      obj2 = JSON.parse(ls_showBox);
      console.log(obj2);
      obj2.push(showBoxItem);
      localStorage.setItem("showBox",JSON.stringify(obj2));
    }else{
      obj2.push(showBoxItem);
      localStorage.setItem("showBox",JSON.stringify(obj2));
    }
    const newshowBox = [...this.state.show,showBoxItem];
    this.setState({
      show : newshowBox
    })
    
  }


  render() {
    return(
      <artical>
        
        <section id="writeSection">
          <div id="login">
            <div onClick={this.checkLogin.bind(this,false)}>登录账号</div>
            <div onClick={this.checkLogin.bind(this,true)}>注册账号</div>
          </div>
          <hr />

          {this.state.login ? <Login onClick={this.loginClick.bind(this)}/>:<User onClick={this.submitToDoList.bind(this)}/>}
          
          

        </section >
          
        <ShowTodo
          showTodoBox="showTodoBox"
          imgAndUsername="imgAndUsername"
          showTodoUsernames="showTodoUsernames"
          showTodoWriten="showTodoWriten"
          showBox={this.state.show} />
      </artical>
    )
  }
}

export default TodoList;