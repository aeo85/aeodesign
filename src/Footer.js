import React, { Component } from 'react';
import './styles/Footer.css';
import bd from './images/bd.png';

class Footer extends Component {
  render() {
    return (

      <div className="Footer">
          <ul className="Footer-nav">
            <li>AEO DESIGN</li>
            <li>&copy;2017 All Rights Reserved</li>
            <li><a href="https://www.instagram.com/aeodesign/"><i className="fa fa-instagram social" aria-hidden="true"></i></a></li>
            <li><a href="https://www.facebook.com/aeodesign/"><i className="fa fa-facebook social" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/aeodesign"><i className="fa fa-twitter social" aria-hidden="true"></i></a></li>
            <li><a href="https://www.pinterest.com/amynedervelt/"><i className="fa fa-pinterest-p social" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/amynedervelt/"><i className="fa fa-dribbble social" aria-hidden="true"></i></a></li>
          </ul>
      </div>

    );
  }
}

export default Footer;
