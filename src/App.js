import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ItemList from './PublicComponents/ItemList';
import FrontEnd from './FrontEnd/FrontEnd';
import Clothes from './Clothes/Clothes';
import Expect from './Expect/Expect';

import Home from './Home/Home';

function App() {
  const menu = ["首页","前端","三坑","期望"];
  const paths = ["/","/frontEnd/","/clothes/","/expect/"]
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Shirley's<span> web</span>
        </header>
        <nav className="App-nav">
          <div id="nav-ul">
          {menu.map((name,i) => <Link className="nav-item" to={paths[i]} key={i}>{name}</Link>)}
          </div>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/frontEnd/" component={FrontEnd} />
        <Route path="/clothes/" component={Clothes} />
        <Route path="/expect/" component={Expect} />



        <footer>
          <p>This website is designed by myself and can be used for personal use, but cannot be used for commercial purposes without permission.</p>
          <p>I am glad that my website can be seen by you</p>
          <p>With my fervent heart, I sincerely pray for you: I wish you peace and happiness all your life.</p>
        </footer>

      </div>
    </Router>    
  );
}

export default App;
