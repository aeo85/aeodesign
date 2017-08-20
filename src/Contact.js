import React, { Component } from 'react';
import './styles/Contact.css';

class Contact extends Component {
  render() {
    return (

      <div className="Contact">
      <main>
        <section className="section1">
          <div className="vert"></div>
          <h4>Interested? Let&rsquo;s Get Started!</h4>
          <article className="bio">Let&rsquo;s talk about your needs & wants over coffee – or bagels or donuts or cupcakes! Need brand advice or guidance? Let&rsquo;s get down to business and cleary define that direction. Fill out form and I will reply back.</article>
          <p className="freelance"><a href="mailto:aeodesigns@gmail.com" className="">Available for freelance work</a></p>
        </section>
        <section className="section2">
            <form className="form" id="form1">
              <p className="name">
                <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="name" id="name" />
              </p>
              <p className="email">
                <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="email" />
              </p>
              <p className="text">
                <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="message"></textarea>
              </p>
              <div className="submit">
                <input type="submit" value="submit" id="submit-button"/>
              </div>
            </form>
          </section>
        </main>
      </div>

    );
  }
}

export default Contact;
