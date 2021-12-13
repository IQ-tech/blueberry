import React from 'react';

interface StepProgressProps {
  /** Set the step list */
  stepsList: Array<string>;
  /** Define the current step */
  currentStep?: number;
}

const StepProgress: React.FC<StepProgressProps> = ({stepsList, currentStep}) => {
  currentStep = currentStep === 0 ? 1 : currentStep;

  return (
    <ul className='iq-step-progress'>
      {stepsList.map((step, index) => {
        const modifier = (currentStep - 1) >= index ? 'enable' : 'disable';
        return (
          <li key={`step-${index}`} className={`iq-step-progress__item--${modifier}`}>
            {step}
          </li>
        );
      })}
    </ul>
  );
};

export default StepProgress;
