import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    const names = this.props.names;
    return (
      <ul  id={this.props.id} onClick={this.props.onClick}>
        {names.map((name,i) => <li className={this.props.className} key={i}>{name}</li>)}
      </ul>
    )
  }
}

export default ItemList;