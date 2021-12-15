import React from 'react';

interface ProgressBarProps {
  /** Define the percentage of the progress */
  percentage: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  let progressWidth = `calc(${percentage} + 113px)`

  return (
    <div className='iq-progress-bar'>
      <div
        style={{ width: progressWidth }}
        className="iq-progress-bar--completed"
      >
        <span>{percentage}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
