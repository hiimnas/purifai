import React, { useState } from 'react';
import './navbar.css';
import logo from '/logo.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <a className="logo" href='./'>
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#what">What is GPT?</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#possibilities">PurifAI Capabilities</a></li>
          <li><a href="#blog">Library</a></li>
        </ul>
      </div>
      <div className="login btn-group" role="group">
        <button type="button" className="btn btn-outline-light me-2">Login</button>
        <button type="button" className="btn btn-warning">Sign-up</button>
      </div>

      <div className="navbar-menu">
        {toggleMenu
          ? <button className="menu-icon btn btn-outline-light" onClick={() => setToggleMenu(false)}><i className="bi bi-x"></i></button>
          : <button className="menu-icon btn btn-outline-light" onClick={() => setToggleMenu(true)}><i className="bi bi-list"></i></button>
        }
        {toggleMenu && (
          <div className="nav-menu scale-up-center">
            <ul className="nav-menu-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#what">What is GPT?</a></li>
              <li><a href="#possibilities">PurifAI Capabilities</a></li>
              <li><a href="#features">Case Studies</a></li>
              <li><a href="#blog">Library</a></li>
            </ul>
            <div className="login btn-group" role="group">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        )

        }
      </div>
    </div>
  )
}

export default Navbar