import React from 'react';
import classNames from 'classnames';

interface ProgressBarProps {
  /** Define the percentage of the progress */
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  let progressWidth = `calc(${percentage}% + 113px)`;
  const componentClass = classNames('iq-progress-bar__filled', { 'iq-progress-bar__filled--full': percentage === 100 });
 
  return (
    <div className='iq-progress-bar'>
      <div
        style={{ width: progressWidth }}
        className={componentClass}
      >
        <span>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
