import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header.js';
import Hero from './Hero.js';
import Process from './Process.js';
import Work from './Work.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';
import Meet from './Meet.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (

      <div className="App">

        <section>
          <Header />
        </section>

        <section>
          <Hero />
        </section>

        <section>
          <Process />
        </section>

          <a name="work"></a>

        <section>
          <Work />
        </section>

          <a name="about"></a>

        <section>
          <About />
        </section>

          <a name="services"></a>

        <section>
          <Services />
        </section>

          <a name="contact"></a>

        <section>
          <Contact />
        </section>

        <section>
          <Meet />
        </section>

        <section>
          <Footer />
        </section>

      </div>

    );
  }
}

export default App;
