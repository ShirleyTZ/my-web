import React, { Component } from 'react';

class ShowTodo extends Component {
  render() {
    const showBoxObject = Object.values(this.props.showBox).reverse();
    const num = showBoxObject.length;
    return(
      <div>
        {showBoxObject.map((showWrite,i) => num > 0 ?
          <div className={this.props.showTodoBox} key={i}>
            <div className={this.props.imgAndUsername}>
              <img src={showWrite.src} />
              <div className={this.props.showTodoUsernames} >{showWrite.username}</div>
            </div>
            
            <div className={this.props.showTodoWriten}>{showWrite.writen}</div>
          </div> : ""
        )}
      </div>
      
    )
  }
}

export default ShowTodo;