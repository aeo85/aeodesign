import React, { Component } from 'react';
import './styles/Meet.css';

class Meet extends Component {
  render() {
    return (

      <div className="Meet">
        <header>
          <h1>Thanks!</h1>
          <p>Not into filling out the above? <br /> Simply email me</p>
          <a href="mailto:aeodesigns@gmail.com"><button type="button" name="button" className="secondbutton">email me</button></a>
        </header>
      </div>

    );
  }
}

export default Meet;
