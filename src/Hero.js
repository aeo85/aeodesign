import React, { Component } from 'react';
import './styles/Hero.css';

class Hero extends Component {
  render() {
    return (

      <div className="Hero">
        <header>
          <h1>Hello & Welcome</h1>
          <p>to aeo design — a lil&rsquo; design studio <br /> delivering brand strategies<br /> with a simple process & smart approach</p>
          <a href="#work"><button type="button" name="button" className="firstbutton">see my work</button></a>
        </header>
      </div>

    );
  }
}

export default Hero;
