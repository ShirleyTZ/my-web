import React, { Component } from 'react';
import './AboutMe.css'
import ItemList from '../../PublicComponents/ItemList';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      sectorOpened: false,
    }
  }

  handleClick() {
    console.log(1);
    const sector = document.getElementById("sector");
    let sectorItem = sector.getElementsByClassName("sector-item");
    let n = sectorItem.length;
    let perDeg = 180/n;
    if(this.state.sectorOpened) {
      console.log(1);
      this.setState({
        sectorOpened:false
      })
      for(let i = 0;i < n; i++){
        sectorItem[i].style.transform = "rotate(" + 0 + "deg)";
      }
    } else {
      this.setState({
        sectorOpened: true
      })
      for(let i = 0;i < n; i++){
        let degrees = (i-(n+1)/2+1)*perDeg;
        sectorItem[i].style.transform = "rotate(" + degrees + "deg)";
      }
    }
  }

  


  render() {
    const menu = ["css","html","JavaScript","JK","Lolita","汉服","点击  操作  开关扇"];
    return (
      <section>
        <ItemList 
          id="sector" 
          className="sector-item" 
          names={menu} 
          onClick={() => this.handleClick()} />
      </section>  
    )
  }
}

export default AboutMe;