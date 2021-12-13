import React from 'react';

interface ProgressStepProps {
  /** Set the step list */
  stepList: Array<string>;
  /** Define the current step */
  currentStep?: number;
}

const ProgressStep: React.FC<ProgressStepProps> = ({stepList, currentStep}) => {
  currentStep = currentStep === 0 ? 1 : currentStep;

  return (
    <ul className='iq-progress-step'>
      {stepList.map((step, index) => {
        const modifier = (currentStep - 1) >= index ? 'enable' : 'disable';
        return (
          <li key={`step-${index}`} className={`iq-progress-step__item--${modifier}`}>
            {step}
          </li>
        );
      })}
    </ul>
  );
};

export default ProgressStep;
