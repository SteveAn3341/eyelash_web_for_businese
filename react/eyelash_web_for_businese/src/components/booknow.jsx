import "../App.css"
import "../Timeline.css"
import React, { useState } from 'react';
import Timeline from './Timeline';
import {SelectServices} from './SelectServices'; // Adjust the path as necessary
// import DateAndTime from './DateAndTime'; // Adjust the path as necessary
// import CompleteRequest from './CompleteRequest'; // Adjust the path as necessary
// Import other components for each step

export const AppointmentBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // function to navigate next or previous
  const goToNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Timeline currentStep={currentStep} />
      {/* {currentStep === 1 && <SelectServices onNext={goToNext} />}
      {currentStep === 2 && <DateAndTime onPrev={goToPrev} onNext={goToNext} />}
      {currentStep === 3 && <CompleteRequest onPrev={goToPrev} />} */}
      {currentStep === 1 && <SelectServices onNext={goToNext} />}
      {currentStep === 2 && <SelectServices onPrev={goToPrev} onNext={goToNext} />}
      {currentStep === 3 && <SelectServices onPrev={goToPrev} />}
    </div>
  );
};

