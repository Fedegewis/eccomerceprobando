import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

import * as amplitude from '@amplitude/analytics-browser';

const productViewed = (title) => {
     const eventProperties = {
       type: title,
       };
    amplitude.track('Viewed product ', eventProperties);
  }


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} 
       onClick={() => {
        history.push(`${match.url}${linkUrl}`);
        productViewed(title);
       }}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);