import React from 'react';
import './article.css';

const Article = ({imgsrc, date, title}) => {
  return (
    <div class="card article border-light">
      <img src={imgsrc} class="card-img-top" alt="Article image" />
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">{date}</h6>
        <p class="card-text">{title}</p>
        <a href="#">Read Full Article ≫</a>
      </div>
    </div>
  )
}

export default Article