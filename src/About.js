import React, { Component } from 'react';
import './styles/About.css';

class About extends Component {
  render() {
    return (

      <div className="About">
        <main>
          <section className="section1">
            <div className="vert"> </div>
            <h4>Designer & Coffee Lover</h4>
            <article className="bio">I&rsquo;ve been running AEO DESIGN for over a decade, designing whatever I can get my hands on in the great city of Chicago! The best part of my day is giving you insightful, unique strategies for brand development, art direction, and graphic design. </article>
            <p className="learnmore"><a href="#contact">Get in Touch</a></p>
          </section>
          <section className="section2">
            <article className="approach"> The process is simple & the approach is smart — let&rsquo;s build a collaborative relationship to ensure customer satisfaction and prompt deliverables. Clients range from start-ups to recognized brand names. We use the 3 step process below to identify, gather, and fine-tune.  </article>
                <div className="circle">01
                  <section className="circle-content">research</section>
                </div>
                <div className="circle">02
                  <section className="circle-content">organization</section>
                </div>
                <div className="circle">03
                   <section className="circle-content">refinement</section>
                </div>
          </section>
        </main>
      </div>

    );
  }
}

export default About;
