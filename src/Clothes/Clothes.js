import React, { Component } from 'react';
import WOW from 'wow.js';
import './Clothes.css';
import 'animate.css';
import ImgClothes from './Clothes.jpg';

import ItemListWithDiv from '../PublicComponents/ImgListWithDiv';

class Clothes extends Component {
  constructor() {
    super();
    this.state = {
      beOnMouseOver: false
    }
  }

  choseBounceInDirection(){
    const clothesBox = document.getElementsByClassName('clothesBox');
    for(let i =0; i < clothesBox.length;i++) {
      if(i%2 === 0 && i === clothesBox.length-1){
        clothesBox[i].className += " wow bounceInUp";
      }else if(i%2 === 0){
        clothesBox[i].className += " wow bounceInLeft";
      }else{
        clothesBox[i].className += " wow bounceInRight";
      }
    }
  }

  handleMouseOver(event) {
    const hoverElement = event.target;
    hoverElement.classList.remove("descriptionForClothes");
    hoverElement.className += "eye";
    
  }
  handleMouseLeave(event) {
    const hoverElement = event.target;
    hoverElement.classList.remove("eye");
    hoverElement.className += "descriptionForClothes";
  }

  componentDidMount() {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 30,
      mobile: true,
      live: true
    })
    wow.init();
    this.choseBounceInDirection();
  }

  render() {
    const urls = [
      ImgClothes,
      ImgClothes,
      ImgClothes,
      ImgClothes,
      ImgClothes
    ]
    const words = [
      "xxx",
      "iii",
      "aaa",
      "ddd",
      "uuu"
    ]
    return (
      <article>
        <section>
          <ItemListWithDiv 
            id="clothesContain"
            imgBox="clothesBox"
            imgClassName="imgForClothes"
            imgDescription="descriptionForClothes"
            urls={urls}
            words={words}
            onMouseOver={this.handleMouseOver.bind(this)}
            onMouseLeave={this.handleMouseLeave.bind(this)} />
        </section>
      </article>
    )
  }
}

export default Clothes;