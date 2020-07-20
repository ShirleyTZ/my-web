import React, {Component} from 'react';
import './PictureSlideshow.css';
import ImgListWithDiv from '../../PublicComponents/ImgListWithDiv';
import ItemList from '../../PublicComponents/ItemList';
import Pic1 from "./SlideshowImg/Pic1.jpg";
import Pic2 from "./SlideshowImg/Pic2.jpg";
import Pic3 from "./SlideshowImg/Pic3.jpg";
import Pic4 from "./SlideshowImg/Pic4.jpg";
import Pic5 from "./SlideshowImg/Pic5.jpg";

class PictureSlideshow extends Component {
  

  slideshow() {
    const slideshowbox = document.getElementsByClassName("slideshowbox");
    const slideshowContainer = document.getElementById("slideshowContainer");
    const descriptionForSlideshow = document.getElementsByClassName("descriptionForSlideshow");
    const n = slideshowbox.length;
    descriptionForSlideshow[0].className += " imgShow";
    let i = 0;
    this.timer = setInterval(function(){
        i++;
        if(i < n){
          slideshowContainer.style.left = -i*1226 + "px";
          descriptionForSlideshow[i].className += " imgShow";
          descriptionForSlideshow[i-1].classList.remove("imgShow");
        }else {
          slideshowContainer.style.left = "0px";
          descriptionForSlideshow[0].className += " imgShow";
          descriptionForSlideshow[i-1].classList.remove("imgShow");
          i = 0;
        }
    },3000)
  }
  
  componentDidMount() {
    this.slideshow();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const urls = [Pic1,Pic2,Pic3,Pic4,Pic5];
    const words = ["1","2","3","4","5"];
    return(
      <section id="pictureSection">
        <ImgListWithDiv
          id="slideshowContainer"
          imgBox="slideshowbox"
          imgClassName="imgsForSlideshow"
          description="descriptionForNone"
          urls={urls}
          words={words} />
        <ItemList 
          id="slideBtnList"
          names={words}
          className="descriptionForSlideshow" />
      </section>
    )
  }
}

export default PictureSlideshow;
