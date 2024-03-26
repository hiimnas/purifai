import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js';

function Blog() {
  return (
    <div className="blog section-padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient-text">A lot is happening, <br /><b>we are blogging about it.</b></h1>
      </div>
      <div className="blog-container">
        <div className="focus">
          <Article imgsrc={blog01} date="25 March 2024" title="GPT-3 and OpenAI is the future - Let us explore how it is." />
        </div>
        <div className="other">
          <Article imgsrc={blog02} date="24 March 2024" title="The fear of AI and how to adapt to 'The New Normal'." />
          <Article imgsrc={blog03} date="23 March 2024" title="New AI functionality can crack SHA-256 in seconds!" />
          <Article imgsrc={blog04} date="22 March 2024" title="Do you have privacy concerns? This is data encryption." />
          <Article imgsrc={blog05} date="21 March 2024" title="Why is computer literacy is vital in 2024?" />
        </div>
      </div>
      <a href="#" className="more">View More Articles...</a>
    </div>
  )
}

export default Blog