import React, { Component } from "react";
import ImgListWithDiv from "../../PublicComponents/ImgListWithDiv";
import './Resume.css';
import resumeImg from './resumeImg.jpg';

class Resume extends Component {
  render() {
    const urls=[
      resumeImg,
      resumeImg,
      resumeImg,
      resumeImg,
      resumeImg,
      resumeImg
      ];
    const words=["a","b","c","d","e","f"];
    return (
      <section>
        <ImgListWithDiv 
          id="resumebox" 
          imgBox="resumeImgBox"
          imgClassName="resumeImg"
          imgDescription="resumeDescription"
          urls={urls} 
          words={words}/>
      </section>
    )
  }
}

export default Resume;