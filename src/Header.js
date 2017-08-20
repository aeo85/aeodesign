import React, { Component } from 'react';
import './styles/Header.css';
import logo from './logo.svg';
import HamburgerMenu from 'react-hamburger-menu';


class Header extends Component {
    constructor() {
    		super();
    		this.state = {
    			open: [false, true, false, true]
    		};
      }
    	handleClick(id) {
    		let { open } = this.state;
        this.setState({
    			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
    		});
        console.log('')
    	}

  render() {
        return (

      <div className="Header">
        <a href="www.aeodesign.com"><img src={logo} className="Header-logo" alt="logo" /></a>
        <ul className="Header-nav">
          <li><a href="#work">work</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a href="#blog">blog</a></li>
          <li><a href="https://www.instagram.com/aeodesign/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://www.facebook.com/aeodesign/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://twitter.com/aeodesign"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="https://www.pinterest.com/amynedervelt/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/amynedervelt/"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
        </ul>
        <div className='menu-row'>
          <HamburgerMenu
            isOpen={this.state.open[0]}
            menuClicked={this.handleClick.bind(this, 0)}
            width={26}
            height={20}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={5}
            animationDuration='0.3'
            />
        </div>
        <div className="field">
            <ul className="Hamburger-nav">
              <li><a href="#work">work</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#services">services</a></li>
              <li><a href="#contact">contact</a></li>
              <li><a href="#blog">blog</a></li>
            </ul>
        </div>
      </div>

    );
  }
}

export default Header;
