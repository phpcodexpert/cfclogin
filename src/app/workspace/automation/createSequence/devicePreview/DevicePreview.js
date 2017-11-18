import React from 'react';
import './DevicePreview.css';

const DevicePreview = (props) => {
  return (
    <section className='device-preview-container'>
      <div class="iphone">
        <div class="iphone-top">
          <span class="camera"></span>
          <span class="sensor"></span>
          <span class="speaker"></span>
        </div>
        <div class="top-bar"></div>
        <div class="iphone-screen">
          <p>We will type anything we want here!</p>
        </div>
        <div class="buttons">
          <span class="on-off"></span>
          <span class="sleep"></span>
          <span class="up"></span>
          <span class="down"></span>
        </div>
        <div class="bottom-bar"></div>
        <div class="iphone-bottom">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export {
  DevicePreview,
};
