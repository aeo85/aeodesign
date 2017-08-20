import React, { Component } from 'react';
import './styles/Process.css';
import bd from './images/bd.png';
import ad from './images/ad.png';
import gd from './images/gd.png';

class Process extends Component {
  render() {
    return (

      <div className="Process">
          <h2>Love What You Do & Live it!</h2>
          <p id="sub">about aeo design</p>
        <main>
          <section id="content">
            <img src={bd} alt="bd" />
            <h3>brand development</h3>
            <div className="horizontal"> </div>
            <article id="description">The life that is brought to your brand. We identify the who, what, and why to determine the goal for your company or service.</article>
          </section>
              <div className="vertical"> </div>
          <section id="content">
            <img src={ad} alt="bd" />
            <h3>art direction</h3>
            <div className="horizontal"> </div>
            <article id="description"> Paying attention to the mood and tone to make something. Lorem ipsum dolor set et ud ait conspireaut soleu. </article>
          </section>
              <div className="vertical"> </div>
          <section id="content">
            <img src={gd} alt="d" />
            <h3>graphic design</h3>
            <div className="horizontal"> </div>
            <article id="description">The nitty gritty of what you need or want. We got your back. Lorem ipsum dolor set et ud ait conspireaut soleu.</article>
          </section>
        </main>
      </div>

    );
  }
}

export default Process;
