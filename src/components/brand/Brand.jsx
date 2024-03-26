import React from 'react';
import './brand.css';

import { atlassian, dropbox, google, slack, shopify } from './imports';

function Brand() {
  return (
    <div className="brands container">
      <a href="https://about.google.com/" target="_blank">
        <img src={google} alt="Google" />
      </a>
      <a href="https://slack.com/" target="_blank">
        <img src={slack} alt="Slack" />
      </a>
      <a href="https://www.dropbox.com/" target="_blank">
        <img src={dropbox} alt="Dropbox" />
      </a>
      <a href="https://www.atlassian.com/" target="_blank">
        <img src={atlassian} alt="Atlassian" />
      </a>
      <a href="https://www.shopify.com/" target="_blank">
        <img src={shopify} alt="Shopify" />
      </a>
    </div>
  )
}

export default Brand