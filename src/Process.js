import React, { Component } from 'react';
import './styles/Process.css';
import bd2 from './images/bd2.png';
import ad2 from './images/ad2.png';
import gd2 from './images/gd2.png';

class Process extends Component {
  render() {
    return (

      <div className="Process">
          <h2>Love What You Do & Live it!</h2>
          <p id="sub">about aeo design</p>
        <main>
          <section id="content">
            <img src={bd2} className="resize" alt="breand development" />
            <h3>brand development</h3>
            <div className="horizontal"> </div>
            <article id="description">Identifying the who, what, and why to determine the goal for your company. Developing  the strategy that’s going to make your brand recognizable.</article>
          </section>
              <div className="vertical"> </div>
          <section id="content">
            <img src={ad2} className="resize" alt="art direction" />
            <h3>art direction</h3>
            <div className="horizontal"> </div>
            <article id="description"> Making sure that your imagery and brand looks beautiful and meaningful.
            Evoking the mood and tone to give you the best possible design solution. </article>
          </section>
              <div className="vertical"> </div>
          <section id="content">
            <img src={gd2} className="resize" alt="graphic design" />
            <h3>graphic design</h3>
            <div className="horizontal"> </div>
            <article id="description">Putting pen to paper. Interpreting the client&rsquo;s needs and making them come to life — whether it&rsquo;s a logo, collateral, or digital design.
             </article>
          </section>
        </main>
      </div>

    );
  }
}

export default Process;
