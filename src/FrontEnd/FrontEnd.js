import React, { Component } from 'react';
import MyExperience from './MyExperience/MyExperience';
import PictureSlideshow from './PictureSlideshow/PictureSlideshow';

class FrontEnd extends Component {
  render() {
    return (
      <article>
        <PictureSlideshow />
        <MyExperience />
      </article>
    )
  }
}

export default FrontEnd;