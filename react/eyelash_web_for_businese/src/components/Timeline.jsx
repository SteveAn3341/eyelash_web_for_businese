// Timeline.js
import React from 'react';
import '../Timeline.css';

const Timeline = ({ currentStep }) => {
  return (
    <div className="timeline-container">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <div className={`circle ${currentStep >= 1 ? 'filled' : ''}`}>1</div>
        <span>Select Services</span>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <div className={`circle ${currentStep >= 2 ? 'filled' : ''}`}>2</div>
        <span>Date & Time</span>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <div className={`circle ${currentStep >= 3 ? 'filled' : ''}`}>3</div>
        <span>Complete Request</span>
      </div>
    </div>
  );
};

export default Timeline;
