import React, { Component } from 'react';
import './styles/Services.css';
import identity2 from './images/identity2.png';
import print2 from './images/print2.png';
import digital2 from './images/digital2.png';

class Services extends Component {
  render() {
    return (

      <div className="Services">
            <h2>Labor of Love</h2>
            <p id="sub">view the work</p>
        <main>
            <section id="content">
              <img src={identity2} className='resize' alt="identity" />
              <h3>identity</h3>
              <div className="horizontal"> </div>
              <ul className="labor">
                <li>Logo Design</li>
                <li>Visual Ideation</li>
                <li>Brand Collateral</li>
                <li>Brand Curation</li>
              </ul>
            </section>
                  <div className="vertical"> </div>
            <section id="content">
              <img src={print2} className='resize' alt="print" />
              <h3>print</h3>
              <div className="horizontal"> </div>
              <ul className="labor">
                <li>Advertising</li>
                <li>Editorial</li>
                <li>Stationary</li>
                <li>Package Design</li>
              </ul>
            </section>
                  <div className="vertical"> </div>
            <section id="content">
              <img src={digital2} className='resize' alt="digital" />
              <h3>digital</h3>
              <div className="horizontal"> </div>
              <ul className="labor">
                <li>Website Design</li>
                <li>Responsive & Mobile</li>
                <li>Email & Social Media</li>
                <li>Photography</li>
              </ul>
            </section>
          </main>
      </div>

    );
  }
}

export default Services;
