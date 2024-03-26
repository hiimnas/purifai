import React from 'react';
import './header.css';

import people from '/people.png';
import ai from '/ai.png';

function Header() {
  return (
    <div className="header container" id="home">
      <div className="header-content">
        <h1 className="gradient-text">Let's Build Something awesome with the simple but effective <b>PurifAI</b></h1>
        <p>
        Embark on an extraordinary journey with PurifAI, where innovation meets simplicity to redefine the boundaries of artificial intelligence. Our platform is meticulously designed to demystify the complexities of AI, offering an unparalleled fusion of cutting-edge technologies and human-like interactions. With PurifAI, you're not just accessing a tool – you're unlocking a whole new world.
        </p>
        <div className="mailing-list input-group" role="group">
          <input type="email" id="email" className="form-control" placeholder="Your Email Address" />
          <button type="button" className="btn btn-info me-3">Get Updates</button>
        </div>
        <div className="testimonials">
          <img src={people} alt="people" />
          <span>1,600 people subscribed to our newsletter in the last 24 hours</span>
        </div>
      </div>
      <div className="header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header