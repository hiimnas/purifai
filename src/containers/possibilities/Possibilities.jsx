import React from 'react';
import './possibilities.css';
import vr from '/vr.png';

function Possibilities() {
  return (
    <div className="possibilities section-margin" id="possibilities">
      <div className="psblt-img">
        <img src={vr} alt="Woman smiling in VR Headset" />
      </div>
      <div className="psblt-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>
          PurifAI is a platform designed to simplify AI for everyone, offering a seamless blend of advanced technologies and human-like interactions. By leveraging cutting-edge AI algorithms and natural language processing capabilities, PurifAI enables users to harness the power of artificial intelligence without the need for specialized technical knowledge. Whether it's creating chatbots with empathetic communication skills, generating creative content with natural language understanding, or analyzing complex datasets with machine learning algorithms, PurifAI empowers individuals and businesses to unlock the full potential of AI in their everyday lives. With its user-friendly interface and intuitive features, PurifAI makes AI accessible to a wide range of users, from entrepreneurs and developers to educators and healthcare professionals, revolutionizing the way we interact with and leverage technology for the betterment of society.
        </p>
        <a href="#">Request Early Access to Get Started</a>
      </div>
    </div>
  )
}

export default Possibilities