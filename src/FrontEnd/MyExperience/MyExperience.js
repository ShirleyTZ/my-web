import React, { Component } from 'react';
import ImgListWithDiv from '../../PublicComponents/ImgListWithDiv';
import FrontImg from '../FrontImg.jpg';
import './MyExperience.css'

class MyExperience extends Component {
  render() {
    const urls = [
      FrontImg,
      FrontImg,
      FrontImg,
      FrontImg,
      FrontImg,
    ]
    const words = ["aaaa","bbb","ccc","ddd","eee"];
    return(
      <section>
        <ImgListWithDiv 
          id="experienceBox"
          imgBox="showMyExperience"
          imgClassName="imgForExperience"
          imgDescription="wordsForExperience"
          urls={urls}
          words={words} />
      </section>
    )
  }
}

export default MyExperience;