import React from 'react';
import './footer.css';
import logo from '/logo.png';

function Footer() {
  return (
    <div className="footer section-padding">
      <div className="ft-heading">
        <h1 className="gradient-text">Are you ready to step into the future?</h1>
      </div>
      <div className="ft-btn">
        <a href="#" role="button" className="btn btn-outline-light">Register for Early Access</a>
      </div>
      <div className="ft-links">
        <div className="logo"> 
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <p>PurifAI © All rights reserved</p>
        </div>
        <div className="links">
          <h4>Links</h4>
          <a href="#">Subsidiaries</a>
          <a href="#">Social Media</a>
          <a href="#">Counters</a>
          <a href="#">Contact</a>
        </div>
        <div className="links">
          <h4>Company</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Legal</a>
        </div>
        <div className="links">
          <h4>Get in touch</h4>
          <a href="#">123 Main Street,<br />Anytown, USA,<br />12345</a>
          <a href="#">(666) 666-1234</a>
          <a href="#">info@hiimnas.tea</a>
        </div>
      </div>
      <hr />
      <p>© nas 🍵 PurifAI original website idea coded using <a href="https://react.dev/" target="_blank">React</a>, <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a> and <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a>.</p>
    </div>
  )
}

export default Footer