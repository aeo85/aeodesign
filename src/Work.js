import React, { Component } from 'react';
import './styles/Work.css';
import bd from './images/bd.jpg';
import ad from './images/ad.jpg';
import gd from './images/gd.jpg';

class Work extends Component {
  render() {
    return (

      <div className="Work">
        <div className="row">
          <section className="col6">
            <article className="portfolio">brand development</article>
          </section>
            <img src={bd} alt="bd" />
        </div>
        <div className="row">
          <section className="col6">
            <article className="portfolio">art direction</article>
          </section>
            <img src={ad} alt="ad" />
        </div>
        <div className="row">
          <section className="col6">
            <article className="portfolio">graphic design</article>
          </section>
            <img src={gd} alt="gd" />
        </div>
      </div>

    );
  }
}

export default Work;
