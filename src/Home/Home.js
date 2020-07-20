import React, { Component } from 'react';
import './Home.css'
import AboutMe from './Mycards/AboutMe';
import Resume from './MyResume/Resume';

class Home extends Component {
  render() {
    return (
      <article>
        <AboutMe />
        <Resume />
      </article>
    )
  }
}

export default Home;