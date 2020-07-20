import React, { Component } from 'react';

class ImgListWithDiv extends Component {
  render() {
    const urls = this.props.urls;
    const words = this.props.words;
    return (
      <div id={this.props.id} >
        {urls.map((url,i) => 
          <div className={this.props.imgBox} key={i}>
            <img 
              className={this.props.imgClassName} 
              src={url} />
            <div
              onMouseOver={this.props.onMouseOver} 
              onMouseLeave={this.props.onMouseLeave}  
              className={this.props.imgDescription}>{words[i]}</div>
          </div>)}
      </div>
    )
  }
}

export default ImgListWithDiv;