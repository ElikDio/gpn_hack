import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({tasks_done, tasks, type, is_started}) => {
  return (
    <div className="progress-bar-container">
      <CircularProgressbar
        value={tasks_done / tasks * 100}
        text={ type==="huge" &&
            <>
                <tspan x="50" dy="-10" className='text'>{`${tasks_done}/${tasks}`}</tspan>
                <tspan x="50" dy="20" className='sub-text'>заданий</tspan>
            </> }
        strokeWidth={9}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: `rgba(36, 195, 142, ${tasks_done / tasks})`,
          trailColor: 'rgb(235, 237, 239)',
        })}
      />
    </div>
  );
};

export default ProgressBar;